import styled from "styled-components"

const font = () => 'font-family: "Ubuntu", sans-serif; color: #2e2e2e;'

export const Body = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Button = styled.button`
  ${font}
  margin: 30px 0px;
  padding: 15px 40px;
  border: none;
  background-color: #ffcb05;
  font-size: 25px;
`
