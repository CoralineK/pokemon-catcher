import React, { useState } from 'react';
import Router from './Router';
import Context from './Context';
import { PokemonInfo, PokemonType } from './types';

function App() {
  const [nickname, setNickname] = useState<string>(
    localStorage.getItem('nickname') || undefined!,
  );
  const [alert, setAlert] = useState<string>(undefined!);
  const [pokemons, setPokemons] = useState<PokemonType[]>(undefined!);
  const [pokemonsInfo, setPokemonsInfo] = useState<PokemonInfo[]>(undefined!);

  return (
    <Context.Provider
      value={{
        state: { nickname, alert, pokemons, pokemonsInfo },
        action: { setNickname, setAlert, setPokemons, setPokemonsInfo },
      }}
    >
      <Router />
    </Context.Provider>
  );
}

export default App;
