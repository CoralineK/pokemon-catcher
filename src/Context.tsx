import React from 'react';
import { PokemonInfo } from './types';

type ContextType = {
  state: { nickname: string; pokemonsInfo: any };
  action: {
    setNickname: (nickname: string) => void;
    setPokemonsInfo: (pokemonsInfo: PokemonInfo[]) => void;
  };
};

const Context = React.createContext<ContextType>(undefined!);

export default Context;
