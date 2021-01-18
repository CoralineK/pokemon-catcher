import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Context from '../Context';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import { basicFont, blue, red, flexColumnCenter, medium } from '../constants';

const Form = styled.form`
  ${flexColumnCenter}
`;
const Container = styled.div`
  text-align: center;
  height: 80px;
  margin: 10vh 0 5vh;
`;
const NicknameInput = styled.input`
  ${basicFont}
  padding: 8px;
  border: none;
  box-shadow: 0px 2px ${blue};
  font-size: 20px;
  text-align: center;
  margin: 10px 0;

  @media (min-width: ${medium}) {
    width: 400px;
  }
`;
const Alert = styled.p`
  ${basicFont}
  font-size: 15px;
  color: ${red};
`;

function Nickname() {
  const history = useHistory();
  const [alert, setAlert] = useState('');
  const { state, action } = useContext(Context);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setAlert('');
    action.setNickname(e.target.value);
  }

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!state.nickname) {
      setAlert('Nickname is required');
    } else {
      localStorage.setItem('nickname', state.nickname);
      history.push('/pokemon-catcher/catching');
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
        <Alert>{alert}</Alert>
      </Container>
      <Button type="submit">Continue</Button>
    </Form>
  );
}

export default Nickname;
