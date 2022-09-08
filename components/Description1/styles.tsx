import styled, { css } from "styled-components";

export const Description1Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #6a994e;
  margin-top: 8vh;
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
      margin-top: 4vh;
      max-width: 70%;
      @media only screen and (max-width: 1200px) {
        margin-right: 2vh;
      }
    }
  }
`;

export const Description1IMGWrapper = styled.div`
  margin-right: 5vh;
  align-self: center;
  @media only screen and (max-width: 1200px) {
    margin-left: 4vh;
  }
`;
