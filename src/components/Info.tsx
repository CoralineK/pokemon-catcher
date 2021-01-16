import React from 'react';
import styled from 'styled-components';
import { PokemonInfo, Stats } from '../types';
import { extraFont, flexColumnCenter } from '../constants';

const Container = styled.div`
  ${flexColumnCenter}
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
`;

const Stat = styled.div`
  ${extraFont}
`;

type Props = {
  show: boolean;
  pokemonInfo: PokemonInfo;
};

function Info({ show, pokemonInfo }: Props) {
  if (!show) return null;

  return (
    <Container>
      {pokemonInfo.stats.map((stat: Stats, index: number) => (
        <Stat key={index}>
          {stat.name.toUpperCase()} {stat.value}
        </Stat>
      ))}
    </Container>
  );
}

export default Info;
