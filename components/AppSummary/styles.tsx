import tw from "tailwind-styled-components"
import styled, { css } from "styled-components";

export const AppSummary = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  background-color: #6a994e;
  flex-wrap: wrap;

  > span {
    width: 40%;
    @media only screen and (max-width: 1200px) {
      width: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    > h1 {
      text-align: left;
      margin-top: 8vh;
      font-family: "Penta";
      font-size: 56px;
      margin-left: 5vh;
      @media only screen and (max-width: 1200px) {
        margin-left: 4vh;
      }
    }
    > p {
      text-align: left;
      margin-left: 5vh;
      margin-top: 4vh;
      @media only screen and (max-width: 1200px) {
        margin-right: 2vh;
        margin-left: 4vh;
      }
    }
  }
`;

export const AppSummaryMainIMGWrapper = styled.div`
  align-self: center;
  @media only screen and (max-width: 1200px) {
    margin-left: 4vh;
  }
  img {
    filter: drop-shadow(30px 30px 5px #6a994e);
  }
`;

const JoinButtonStyled = styled.a`
  display: inline-block;
  margin-top: 4vh;
  color: white;
  background-color: #386641;
  margin-left: 5vh;
  @media only screen and (max-width: 1200px) {
    width: 170.73px;
    height: 56px;
    padding-left: 0 !important;
    padding-right: 0 !important;
    padding-bottom: 1rem !important;
    padding-top: 1rem !important;
    text-align: center;
  }
  margin-bottom: 2vh;
  &:hover {
    filter: brightness(0.95);
  }
`;

export const JoinButton = tw(JoinButtonStyled)`
  text-base
  font-semibold
  py-4
  px-16
  rounded-2xl
  shadow-md
  focus:outline-none
`;


export const MobileLogo = styled.h1`
  margin-top: 4vh;
  font-family: "Weinssehof";
  font-size: 20px;
  font-weight: bold;
  color: #386641;
`;
