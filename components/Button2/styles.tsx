import tw from "tailwind-styled-components"
import styled, { css } from "styled-components";


const Button2Styled = styled.button`
  margin-top: 4vh;
  color: white;
  background-color: #386641;
  margin-left: 5vh;
  &:hover {
    filter: brightness(0.95);
  }
`;

export const Button2 = tw(Button2Styled)`
  text-base
  font-semibold
  py-4
  px-16
  rounded-2xl
  shadow-md
  focus:outline-none
`;
