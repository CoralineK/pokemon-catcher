import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import * as API from '../API';
import Context from '../Context';

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
const Info = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Stat = styled.div`
  ${font}
`;

type pokemonType = {
  name: string;
  url: string;
};
type Props = {
  pokemonAPI: pokemonType;
  catched: string[];
};
type StatsType = {
  name: string;
  value: number;
};
type PokemonInfoType = {
  name: string;
  artwork: string;
  stats: StatsType[];
};

function Pokemon({ pokemonAPI, catched }: Props) {
  const { state, action } = useContext(Context);
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfoType>();
  const [border, setBorder] = useState<string>('#003a70');
  const [tooltip, setTooltip] = useState<string>('none');

  const pokemon = (pokemon: pokemonType) => {
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
    if (pokemonInfo && catched.includes(pokemonInfo.name)) {
      setBorder('inset 0 0 0 2px #4ede31');
    } else {
      setBorder('inset 0 0 0 1px #003a70');
    }
  }, [catched]);

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
      <Info style={{ display: tooltip }}>
        {pokemonInfo.stats.map((e: StatsType) => (
          <Stat style={{ color: 'white' }}>
            {e.name.toUpperCase()} {e.value}
          </Stat>
        ))}
      </Info>
      <Artwork>
        <img src={pokemonInfo.artwork} alt={pokemon.name} />
      </Artwork>
      <Name>{pokemonInfo.name}</Name>
    </Container>
  );
}

export default Pokemon;
