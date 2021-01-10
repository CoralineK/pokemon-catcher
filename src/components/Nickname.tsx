import React, { useContext } from "react"
import styled from "styled-components"
import Context from "../Context"
import { useHistory } from "react-router-dom"
import { Button } from "../styles/styled-components"
import * as API from "../API"

const font = () => 'font-family: "Ubuntu", sans-serif; color: #2e2e2e;'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Container = styled.div`
  height: 100px;
  text-align: center;
`
const NicknameInput = styled.input`
  ${font}
  width: 400px;
  padding: 8px;
  margin: 10px;
  border: none;
  box-shadow: 0px 2px #3d7dca;
  font-size: 20px;
  text-align: center;
`
const Alert = styled.p`
  ${font}
  font-size: 15px;
  color: red;
`

function Nickname() {
  const history = useHistory()
  const { state, action } = useContext(Context)

  const pokemons = (offset: number) => {
    API.getPokemonsName(offset).then((result) => {
      action.setPokemons(result)
    })
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    action.setAlert("")
    action.setNickname(e.target.value)
  }

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!state.nickname) {
      action.setAlert("Nickname is required")
    } else {
      pokemons(state.nickname.length * 10)
      history.push("/welcome")
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Container>
          <NicknameInput
            type="text"
            placeholder="pick your nickname"
            onChange={handleChange}
          />
          <Alert>{state.alert}</Alert>
        </Container>
        <Button type="submit">Continue</Button>
      </Form>
    </>
  )
}

export default Nickname
