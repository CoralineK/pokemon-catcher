import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../Context';
import Pokemon from '../components/Pokemon';
import {PokemonsProps, PokemonType} from '../types';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 481px) {
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

function Pokemons({ catched }: PokemonsProps) {
  const { state } = useContext(Context);

  return (
    <Container>
      {state.pokemons &&
        state.pokemons.map((pokemon: PokemonType, index: number) => (
          <Pokemon pokemonAPI={pokemon} catched={catched} key={index}></Pokemon>
        ))}
    </Container>
  );
}

export default Pokemons;
