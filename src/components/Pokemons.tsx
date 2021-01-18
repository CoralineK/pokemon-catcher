import React from 'react';
import styled from 'styled-components';
import Pokemon from '../components/Pokemon';
import { PokemonInfo, PokemonType } from '../types';
import { small } from '../constants';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: ${small}) {
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

type Props = {
  pokemons?: PokemonType[];
  catched?: PokemonInfo[];
};

function Pokemons({ pokemons, catched }: Props) {
  return (
    <Container>
      {pokemons &&
        pokemons.map((pokemon: PokemonType, index: number) => (
          <Pokemon pokemon={pokemon} catched={catched} key={index}></Pokemon>
        ))}
    </Container>
  );
}

export default Pokemons;
