import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Context from '../Context';
import Button from '../components/Button';
import Logo from '../components/Logo';
import Pokemons from '../components/Pokemons';
import * as API from '../API';
import { PokemonInfo } from '../types';
import {
  basicFont,
  flexColumnCenter,
  navyblue,
  small,
  medium,
} from '../constants';

const Body = styled.div`
  ${flexColumnCenter}
  width: 100%;
  padding-top: 4vh;

  @media (min-width: ${medium}) {
    min-height: 100vh;
  }
`;
const Welcome = styled.p`
  ${basicFont}
  color: ${navyblue};
  font-size: 25px;
  font-weight: 600;
  margin: 5vh 0;

  @media (min-width: ${small}) {
    font-size: 30px;
  }
  @media (min-width: ${medium}) {
    font-size: 35px;
  }
`;

function Catching() {
  const [catched, setCatched] = useState<PokemonInfo[] | undefined>();
  const { state, action } = useContext(Context);

  const fetchPokemons = (offset: number) => {
    API.getPokemons(offset).then((result) => {
      action.setPokemons(result);
    });
  };

  useEffect(() => {
    fetchPokemons(state.nickname.length * 10);
  }, []);

  function handleOnClick() {
    setCatched([]);

    const catchedPokemons = state.pokemonsInfo.filter(
      () => Math.round(Math.random()) === 1,
    );

    setCatched(catchedPokemons);

    console.log({
      nickanme: state.nickname,
      pokemons: catchedPokemons,
    });
  }

  return (
    <Body>
      <Logo />
      <Welcome>Welcome, {state.nickname}!</Welcome>
      <Pokemons catched={catched} />
      <Button
        onClick={handleOnClick}
        style={{ backgroundColor: '#3d7dca', color: 'white' }}
      >
        Catch'em!
      </Button>
    </Body>
  );
}

export default Catching;
