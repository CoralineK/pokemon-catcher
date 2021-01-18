import React, { useState } from 'react';
import Router from './Router';
import Context from './Context';
import { PokemonInfo } from './types';

function App() {
  const [nickname, setNickname] = useState<string>(
    localStorage.getItem('nickname') || undefined!,
  );
  const [pokemonsInfo, setPokemonsInfo] = useState<PokemonInfo[]>(undefined!);

  return (
    <Context.Provider
      value={{
        state: { nickname, pokemonsInfo },
        action: { setNickname, setPokemonsInfo },
      }}
    >
      <Router />
    </Context.Provider>
  );
}

export default App;
