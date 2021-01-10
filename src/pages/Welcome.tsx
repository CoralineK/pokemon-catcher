import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import Context from "../Context"
import { Body, Button } from "../styles/styled-components"
import Logo from "../components/Logo"
import * as API from "../API"

const font = () => 'font-family: "Ubuntu", sans-serif; color: #2e2e2e;'
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Welcomes = styled.p`
  ${font}
  font-size: 40px;
  font-weight: 600;
  color: #003a70;
`
const Name = styled.div``
const Artwork = styled.div``

function Welcome() {
  const { state, action } = useContext(Context)

  // const pokemonsInfo = (link: any) => {
  //   API.getPokemonsInfo(link).then((result) => {
  //     action.setPokemonsInfo(result)
  //   })
  // }

  // useEffect(() => {
  //   state.pokemons?.forEach((e: any) => pokemonsInfo(e.url))
  // }, [state.pokemons])

  return (
    <Body>
      <Logo />
      <Container>
        <Welcomes>Welcome, {state.nickname}!</Welcomes>
      </Container>
      {!state.pokemons
        ? null
        : state.pokemons.map((e: any) => (
            <>
              <Name>{e.name}</Name>
              <Artwork>
                {/* {e.sprites.other["official-artwork"].front_default} */}
              </Artwork>
            </>
          ))}
      <Button style={{ backgroundColor: "#3d7dca", color: "white" }}>
        Catch'em!
      </Button>
    </Body>
  )
}

export default Welcome
