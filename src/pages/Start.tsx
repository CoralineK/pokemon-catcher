import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Nickname from '../components/Nickname';

const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Start() {
  return (
    <Body>
      <Logo />
      <Nickname />
    </Body>
  );
}

export default Start;
