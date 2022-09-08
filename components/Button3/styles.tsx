import tw from "tailwind-styled-components"
import styled, { css } from "styled-components";

const Button3Styled = styled.a`
  color: white;
  background-color: #386641;
  &:hover {
    filter: brightness(0.95);
  }
  display: inline;
  cursor: pointer;
  @media only screen and (max-width: 1200px) {
    margin-left: 0.25rem;
    margin-right: 1.5vh !important
  }
`;

export const Button3 = tw(Button3Styled)`
  text-base
  font-semibold
  py-2
  px-8
  rounded-2xl
  shadow-md
  focus:outline-none
  h-10
`;
