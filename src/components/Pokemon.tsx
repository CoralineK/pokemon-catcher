import React, { useState, useEffect } from "react"
import styled from "styled-components"
import * as API from "../API"

const font = () => 'font-family: "Ubuntu", sans-serif; color: #2e2e2e;'

const Container = styled.div`
  display: block;
  text-align: center;
  border: 1px solid #003a70;
  border-radius: 8px;
  padding: 20px 10px;
  margin: 10px;
`
const Name = styled.div`
  ${font}
  font-size: 25px;
`
const Artwork = styled.div``

type Props = {
  pokemonAPI: any
}

function Pokemon({ pokemonAPI }: Props) {
  const [pokemonInfo, setPokemonInfo] = useState<any>()

  const pokemon = (pokemon: any) => {
    API.getPokemonsInfo(pokemon).then((result) => {
      setPokemonInfo(result)
    })
  }

  useEffect(() => {
    pokemon(pokemonAPI)
  }, [pokemonAPI])

  if (!pokemonInfo) return null

  return (
    <Container>
      <Artwork>
        <img src={pokemonInfo.artwork} alt={pokemon.name} height="200px" />
      </Artwork>
      <Name>{pokemonInfo.name.toUpperCase().replaceAll("-", " ")}</Name>
    </Container>
  )
}

export default Pokemon
