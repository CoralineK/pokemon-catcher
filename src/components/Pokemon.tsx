import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import * as API from '../API';
import { PokemonType, PokemonProps, PokemonInfo } from '../types';
import Context from '../Context';
import Info from './Info';
import {
  basicFont,
  navyblue,
  green,
  red,
  flexColumnCenter,
  large,
} from '../constants';

enum CatchState {
  DEFAULT,
  CATCHED,
  UNCATCHED,
}

function getBoxShadow({ catchState }: { catchState: CatchState }) {
  switch (catchState) {
    case CatchState.CATCHED:
      return `inset 0 0 0 2px ${green}`;
    case CatchState.UNCATCHED:
      return `inset 0 0 0 2px ${red}`;
    case CatchState.DEFAULT:
    default:
      return `inset 0 0 0 1px ${navyblue}`;
  }
}

const Container = styled.div<{ catchState: CatchState }>`
  ${flexColumnCenter}
  position: relative;
  border-radius: 8px;
  padding: 2% 1%;
  margin: 10px;
  box-shadow: ${getBoxShadow};
`;
const Name = styled.div`
  ${basicFont}
  font-size: 20px;
  padding-top: 5px;

  @media (min-width: ${large}) {
    font-size: 25px;
  }
`;
const Artwork = styled.div`
  img {
    height: 18vh;
  }
`;

function Pokemon({ pokemon, catched }: PokemonProps) {
  const { state, action } = useContext(Context);
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo>();
  const [catchState, setCatchState] = useState<CatchState>(CatchState.DEFAULT);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const fetchPokemonInfo = (pokemon: PokemonType) => {
    API.getPokemonInfo(pokemon).then((result) => {
      setPokemonInfo(result);
    });
  };

  useEffect(() => {
    fetchPokemonInfo(pokemon);
  }, [pokemon]);

  useEffect(() => {
    pokemonInfo &&
      (!state.pokemonsInfo
        ? action.setPokemonsInfo([pokemonInfo])
        : action.setPokemonsInfo([...state.pokemonsInfo, pokemonInfo]));
  }, [pokemonInfo]);

  useEffect(() => {
    if (pokemonInfo && catched) {
      catched.map((e: PokemonInfo) => e.name).includes(pokemonInfo.name)
        ? setCatchState(CatchState.CATCHED)
        : setCatchState(CatchState.UNCATCHED);
    }
  }, [catched, pokemonInfo]);

  function handleOnMouseEnter() {
    setShowTooltip(true);
  }
  function handleOnMouseLeave() {
    setShowTooltip(false);
  }

  if (!pokemonInfo) return null;

  return (
    <Container
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      catchState={catchState}
    >
      <Info show={showTooltip} pokemonInfo={pokemonInfo} />
      <Artwork>
        <img src={pokemonInfo.artwork} alt={pokemon.name} />
      </Artwork>
      <Name>{pokemonInfo.name}</Name>
    </Container>
  );
}

export default Pokemon;
