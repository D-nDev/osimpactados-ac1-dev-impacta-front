import styled from "styled-components";
import tw from "tailwind-styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const RightSide = styled.div`
  height: 100vh;
  width: 55%;
  flex: 1 55%;
  background-color: #f5f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h1 {
    font-size: 46px;
    font-family: Penta;
    font-weight: bold;
    color: #6a994e;
    @media only screen and (max-width: 500px) {
      font-size: 36px;
    }
  }
`;

export const LeftSide = styled.div`
  height: 100vh;
  width: 45%;
  flex: 1 45%;
  background: url("/static/images/bg4.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const Input1Styled = styled.input`
  width: 45%;
  margin-top: 2vh;
  margin-bottom: 2vh;
  color: #aeaab7;
  text-indent: 20px;
  border-radius: 5px;
  display: inline-block;
  border: 1px solid #e6e6f0;
  @media only screen and (max-width: 1200px) {
    width: 75%;
  }
  @media only screen and (max-width: 700px) {
    width: 55%;
  }
  @media only screen and (max-width: 500px) {
    width: 75%;
  }
`;

export const Input1 = tw(Input1Styled)`
  appearance-none
  block
  h-10
  px-4
`;

const RecoverButtonStyled = styled.button`
  color: white;
  background-color: #386641;
  &:hover {
    filter: brightness(0.95);
  }
`;

export const RecoverButton = tw(RecoverButtonStyled)`
  text-base
  font-semibold
  py-1
  px-8
  rounded-lg
  shadow-md
  focus:outline-none
`;

export const MainLabel = styled.label`
  font-family: Penta;
`;

export const RegisterText = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  margin-top: 1.6vh;
  > span {
    color: #6a994e;
    cursor: pointer;
    font-weight: bold;
  }
`
