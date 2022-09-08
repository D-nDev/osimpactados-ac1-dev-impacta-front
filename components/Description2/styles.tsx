import tw from "tailwind-styled-components"
import styled, { css } from "styled-components";

export const Description2Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > span {
    width: 35%;
    margin-bottom: 5vh;
    @media only screen and (max-width: 1200px) {
      width: auto;
    }
    > h1 {
      text-align: left;
      margin-top: 8vh;
      font-family: "Penta";
      font-size: 56px;
      margin-left: 4vh;
    }
    > p {
      text-align: left;
      margin-left: 4vh;
      margin-top: 1vh;
      max-width: 70%;
      @media only screen and (max-width: 1200px) {
        margin-right: 2vh;
      }
    }
  }
`;

export const Description2IMGWrapper = styled.div`
  margin-right: 5vh;
  align-self: center;
  @media only screen and (max-width: 1200px) {
    margin-left: 4vh;
  }
`;

const BusinessContactStyled = styled.button`
  display: inline-block;
  margin-top: 2vh;
  color: white;
  background-color: #386641;
  margin-left: 5vh;
  margin-bottom: 2vh;
  @media only screen and (max-width: 1200px) {
    width: 207px;
    height: 56px;
    padding-left: 0 !important;
    padding-right: 0 !important;
    padding-bottom: 1rem !important;
    padding-top: 1rem !important;
    text-align: center;
  }
  &:hover {
    filter: brightness(0.95);
  }
`;

export const BusinessContactButton = tw(BusinessContactStyled)`
  text-base
  font-semibold
  py-4
  px-16
  rounded-2xl
  shadow-md
  focus:outline-none
`;
