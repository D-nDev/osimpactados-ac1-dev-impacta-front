import styled, { css } from "styled-components";

export const TestimonialWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #6a994e;
  margin-top: 8vh;
  flex-wrap: wrap;

  > span {
    margin-bottom: 5vh;
    width: 35%;
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
      margin-left: 5vh;
      margin-top: 4vh;
      @media only screen and (max-width: 1200px) {
        margin-right: 2vh;
        margin-left: 4vh;
      }
    }
  }
`;

export const TestimonialIMGWrapper = styled.div`
  margin-right: 5vh;
  align-self: center;
  @media only screen and (max-width: 1200px) {
    margin-left: 5vh;
  }
`;

export const TestimonialName = styled.h2`
  display: inline-block;
  margin-top: 2vh;
  font-weight: bold;
  font-family: "Roboto";
  font-size: 32px;
  text-align: left;
  margin-left: 5vh;
`;
