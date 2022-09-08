import tw from "tailwind-styled-components"
import styled, { css } from "styled-components";

export const AppHeaderWrap = styled.div`
  padding-top: 2vh;
  grid-area: appsummary;
  display: flex;
  justify-content: space-evenly;
  background-color: #6a994e;
  height: 5vh;
`;

export const AppHeader = styled.div`
  margin-top: 0.8vh;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;
  max-width: 200px;

  > p {
    margin-left: 5vh;
    font-weight: bold;
    white-space: nowrap;
    cursor: pointer;
  }
`;

export const Logo = styled.h1`
  margin-top: 0.5vh;
  margin-left: -2.4vh;
  font-family: "Weinssehof";
  font-size: 20px;
  font-weight: bold;
  color: #386641;
`;

const LoginButtonStyled = styled.a`
  color: white;
  background-color: #386641;
  &:hover {
    filter: brightness(0.95);
  }
`;

export const LoginButton = tw(LoginButtonStyled)`
  text-base
  font-semibold
  py-1
  px-8
  rounded-lg
  shadow-md
  focus:outline-none
`;


