import React, { useContext } from 'react';
import styled from 'styled-components';
import Context from '../Context';
import { useHistory } from 'react-router-dom';
import { Button } from '../styles/styled-components';
import * as API from '../API';

const font = () => 'font-family: "Ubuntu", sans-serif; color: #2e2e2e;';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  text-align: center;
  height: 80px;
  margin: 10vh 0 5vh;
`;
const NicknameInput = styled.input`
  ${font}
  padding: 8px;
  border: none;
  box-shadow: 0px 2px #3d7dca;
  font-size: 20px;
  text-align: center;
  margin: 10px;

  @media (min-width: 768px) {
    width: 400px;
  }
`;
const Alert = styled.p`
  ${font}
  font-size: 15px;
  color: red;
`;

function Nickname() {
  const history = useHistory();
  const { state, action } = useContext(Context);

  const pokemons = (offset: number) => {
    API.getPokemonsName(offset).then((result) => {
      action.setPokemons(result);
    });
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    action.setAlert('');
    action.setNickname(e.target.value);
  }

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!state.nickname) {
      action.setAlert('Nickname is required');
    } else {
      pokemons(state.nickname.length * 10);
      history.push('/catching');
    }
  }

  return (
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
  );
}

export default Nickname;
