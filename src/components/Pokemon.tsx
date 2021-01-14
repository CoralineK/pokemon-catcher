import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import * as API from '../API';
import { PokemonType, PokemonProps, PokemonInfo } from '../types';
import Context from '../Context';
import Info from './Info';

const font = () => 'font-family: "Ubuntu", sans-serif; color: #2e2e2e;';

const Container = styled.div`
  position: relative;
  display: block;
  text-align: center;
  border-radius: 8px;
  padding: 2% 1%;
  margin: 10px;
`;
const Name = styled.div`
  ${font}
  font-size: 20px;
  padding-top: 5px;

  @media (min-width: 769px) {
    font-size: 15px;
  }
  @media (min-width: 1025px) {
    font-size: 20px;
  }
  @media (min-width: 1201px) {
    font-size: 25px;
  }
`;
const Artwork = styled.div`
  img {
    height: 18vh;
  }
`;

function Pokemon({ pokemonAPI, catched }: PokemonProps) {
  const { state, action } = useContext(Context);
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo>();
  const [border, setBorder] = useState<string>('inset 0 0 0 1px #003a70');
  const [tooltip, setTooltip] = useState<string>('none');

  const pokemon = (pokemon: PokemonType) => {
    API.getPokemonsInfo(pokemon).then((result) => {
      setPokemonInfo(result);
    });
  };

  useEffect(() => {
    pokemon(pokemonAPI);
  }, [pokemonAPI]);

  useEffect(() => {
    pokemonInfo &&
      (!state.pokemonsInfo
        ? action.setPokemonsInfo([pokemonInfo])
        : action.setPokemonsInfo([...state.pokemonsInfo, pokemonInfo]));
  }, [pokemonInfo]);

  useEffect(() => {
    if (pokemonInfo && catched) {
      catched.includes(pokemonInfo.name)
        ? setBorder('inset 0 0 0 2px #4ede31')
        : setBorder('inset 0 0 0 2px #eb4034');
    }
  }, [catched, pokemonInfo]);

  function handleOnMouseEnter() {
    setTooltip('flex');
  }
  function handleOnMouseLeave() {
    setTooltip('none');
  }

  if (!pokemonInfo) return null;
  return (
    <Container
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      style={{ boxShadow: border }}
    >
      <Info display={tooltip} pokemonInfo={pokemonInfo} />
      <Artwork>
        <img src={pokemonInfo.artwork} alt={pokemon.name} />
      </Artwork>
      <Name>{pokemonInfo.name}</Name>
    </Container>
  );
}

export default Pokemon;
