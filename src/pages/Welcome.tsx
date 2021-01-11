import React, { useContext } from "react"
import styled from "styled-components"
import Context from "../Context"
import { Body, Button } from "../styles/styled-components"
import Logo from "../components/Logo"
import Pokemon from "../components/Pokemon"

const font = () => 'font-family: "Ubuntu", sans-serif; color: #2e2e2e;'

const Welcomes = styled.p`
  ${font}
  font-size: 40px;
  font-weight: 600;
  color: #003a70;
`
const Pokemons = styled.div`
  display: flex;
`

function Welcome() {
  const { state } = useContext(Context)

  return (
    <Body>
      <Logo />
      <Welcomes>Welcome, {state.nickname}!</Welcomes>
      <Pokemons>
        {state.pokemons &&
          state.pokemons.map((pokemon: any, index: number) => (
            <Pokemon pokemonAPI={pokemon} key={index}></Pokemon>
          ))}
      </Pokemons>
      <Button style={{ backgroundColor: "#3d7dca", color: "white" }}>
        Catch'em!
      </Button>
    </Body>
  )
}

export default Welcome
