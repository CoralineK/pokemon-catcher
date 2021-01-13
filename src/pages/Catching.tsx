import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Context from '../Context';
import { Button } from '../styles/styled-components';
import Logo from '../components/Logo';
import Pokemons from '../components/Pokemons';
import { cachedDataVersionTag } from 'v8';

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4vh;

  @media (min-width: 768px) {
    min-height: 100vh;
  }
`;
const Welcome = styled.p`
  font-family: 'Ubuntu';
  font-size: 25px;
  font-weight: 600;
  color: #003a70;
  margin: 5vh 0;

  @media (min-width: 769px) {
    font-size: 25px;
  }
  @media (min-width: 1025px) {
    font-size: 35px;
  }
  @media (min-width: 1201px) {
    font-size: 40px;
  }
`;

function Catching() {
  const [catched, setCatched] = useState<string[]>([]);
  const { state } = useContext(Context);

  function handleMouseDown() {
    setCatched([]);
  }

  function handleOnClick() {
    const pokemons = state.pokemonsInfo.filter(
      () => Math.round(Math.random()) === 1,
    );

    setCatched(pokemons.map((e: any) => e.name));

    console.log({
      nickanme: state.nickname,
      pokemons,
    });
  }

  return (
    <Body>
      <Logo />
      <Welcome>Welcome, {state.nickname}!</Welcome>
      <Pokemons catched={catched} />
      <Button
        onMouseDown={handleMouseDown}
        onClick={handleOnClick}
        style={{ backgroundColor: '#3d7dca', color: 'white' }}
      >
        Catch'em!
      </Button>
    </Body>
  );
}

export default Catching;
