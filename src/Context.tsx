import React from 'react';

type ContextType = {
  state: { nickname: string; alert: string; pokemons: any; pokemonsInfo: any};
  action: {
    setNickname: (nickname: string) => void;
    setAlert: (alert: string) => void;
    setPokemons: (pokemons: any) => void;
    setPokemonsInfo: (pokemonsInfo: any) => void;
  };
};

const Context = React.createContext<ContextType>(undefined!);

export default Context;
