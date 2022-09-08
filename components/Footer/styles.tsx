import styled, { css } from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #6a994e;
  margin-top: 4vh;
  flex-wrap: wrap;

  > span {
    width: 35%;
    @media only screen and (max-width: 568px) {
      width: 100%;
    }
    div {
      margin-bottom: 1vh;
    }
    a {
      margin-left: 4vh;
      margin-bottom: 1vh;
    }
    > h1 {
      text-align: left;
      margin-top: 2vh;
      font-family: "Penta";
      font-size: 25px;
      margin-left: 4vh;
      margin-bottom: 2vh;
    }
    > p {
      text-align: left;
      margin-left: 4vh;
      margin-bottom: 2vh;
      max-width: 70%;
      @media only screen and (max-width: 1200px) {
        margin-right: 2vh;
      }
    }
  }
`;

export const FoodOnClickFooterLogo = styled.h1`
  text-align: left;
  margin-top: 8vh;
  font-family: "Penta";
  font-size: 25px;
  margin-left: 4vh;
  color: #386641;
  font-weight: bold;
`;
