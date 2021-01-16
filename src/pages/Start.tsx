import React, { useContext, useEffect } from 'react';
import Context from '../Context';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Nickname from '../components/Nickname';
import { flexColumnCenter } from '../constants';

const Body = styled.div`
  ${flexColumnCenter}
  width: 100%;
  height: 100vh;
`;

function Start() {
  const { action } = useContext(Context);

  useEffect(() => {
    action.setNickname(undefined!);
  }, []);

  return (
    <Body>
      <Logo />
      <Nickname />
    </Body>
  );
}

export default Start;
