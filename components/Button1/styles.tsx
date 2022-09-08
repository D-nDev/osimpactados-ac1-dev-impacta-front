import tw from "tailwind-styled-components"
import styled, { css } from "styled-components";

const Button1Styled = styled.a`
  color: white;
  background-color: #386641;
  &:hover {
    filter: brightness(0.95);
  }
  display: inline;
`;

export const Button1 = tw(Button1Styled)`
  text-base
  font-semibold
  py-1
  px-8
  rounded-lg
  shadow-md
  focus:outline-none
`;
