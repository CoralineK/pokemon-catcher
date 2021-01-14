import React from 'react';
import styled from 'styled-components';
import { InfoProps, Stats } from '../types';

const Container = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  flex-direction: column;
  justify-content: center;
`;
const Stat = styled.div`
  font-family: 'VT323', monospace;
  font-size: 25px;
`;

function Info({ display, pokemonInfo }: InfoProps) {
  return (
    <Container style={{ display: display }}>
      {pokemonInfo.stats.map((stat: Stats, index: number) => (
        <Stat style={{ color: 'white' }} key={index}>
          {stat.name.toUpperCase()} {stat.value}
        </Stat>
      ))}
    </Container>
  );
}

export default Info;
