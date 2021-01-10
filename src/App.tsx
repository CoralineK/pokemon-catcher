import React, { useState } from "react"
import Router from "./Router"
import Context from "./Context"

function App() {
  const [nickname, setNickname] = useState<string>(undefined!)
  const [alert, setAlert] = useState<string>(undefined!)
  const [pokemons, setPokemons] = useState<any>(undefined!)
  const [pokemonsInfo, setPokemonsInfo] = useState<any>(undefined!)

  return (
    <Context.Provider
      value={{
        state: { nickname, alert, pokemons, pokemonsInfo },
        action: { setNickname, setAlert, setPokemons, setPokemonsInfo },
      }}
    >
      <Router />
    </Context.Provider>
  )
}

export default App
