import tw from "tailwind-styled-components"
import styled, { css } from "styled-components";

export const JoinNowWrapper = styled.div`
  margin-top: 1vh;
  display: flex;
  align-items: center;
  vertical-align: middle;
  justify-content: space-evenly;
  flex-direction: column;
  text-align: center;
`;

export const JoinNowTitleWrapper = styled.div`
  width: 70%;
`;

export const JoinNowTitle = styled.h1`
  margin-top: 7vh;
  font-family: "Roboto";
  color: #152d3d;
  font-size: 24px;
  font-weight: bold;
`;

export const JoinNowPWrapper = styled.div`
  width: 18%;
  @media only screen and (max-width: 1200px) {
    width: 50%;
    margin-top: 1vh;
  }
`;

export const JoinNowP = styled.p`
  font-family: "Roboto";
  color: gray;
  font-size: 16px;
  margin-bottom: 2.7vh;
`;

const JoinInputStyled = styled.input`
  color: #4a5568;
  @media only screen and (max-width: 1200px) {
    margin-left: 0.25rem;
    margin-right: 1vh !important;
  }
`;

export const JoinInput = tw(JoinInputStyled)`
  shadow
  appearance-none
  border
  rounded-2xl
  w-auto
  h-10
  mr-5
  py-2
  px-3
  leading-tight
  focus:outline-none
  mb-5
`;

export const JoinInputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 4vh;
`;
