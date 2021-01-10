import React from "react"
import styled from "styled-components"

const FONT_SIZE = "8vh"

const text = () =>
  `font-size: ${FONT_SIZE}; padding: 0 0.2em 0.4em; position: absolute;`

const TextBox = styled.div`
  position: relative;
  height: calc(${FONT_SIZE} * 1.4);
  width: calc(${FONT_SIZE} * 8.83);
  padding-bottom: 150px;
  margin-top: 35vh;
`
const TextBlue = styled.div`
  ${text}
  font-family: PokemonHollow;
  color: #3d7dca;
  font-weight: bold;
  z-index: 2;
`
const TextYellow = styled.div`
  ${text}
  font-family: PokemonSolid;
  color: #ffcb05;
  text-shadow: -4px 5px #003a70;
`

function Logo() {
  return (
    <TextBox>
      <TextBlue>Pokémon Catcher</TextBlue>
      <TextYellow>Pokémon Catcher</TextYellow>
    </TextBox>
  )
}

export default Logo
