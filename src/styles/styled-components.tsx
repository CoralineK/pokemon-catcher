import styled from 'styled-components';

const font = () => 'font-family: "Ubuntu", sans-serif; color: #2e2e2e;';

export const Button = styled.button`
  ${font}
  border: none;
  background-color: #ffcb05;
  margin: 30px 0px;
  padding: 15px 40px;
  font-size: 25px;

  @media (min-width: 769px) {
    padding: 10px 30px;
    font-size: 20px;
  }
  @media (min-width: 1201px) {
    padding: 15px 40px;
    font-size: 25px;
  }
`;
