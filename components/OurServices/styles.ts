import styled, { css } from "styled-components";

export const OurServicesTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
`;

export const OurServicesP = styled.p`
  margin-top: 7vh;
  color: #000000aa;
  font-family: "Roboto";
  font-size: 19px;
  font-weight: bold;
`;

export const OurServicesH1 = styled.h1`
  width: 70%;
  margin-top: 1vh;
  text-align: center;
  color: #152d3d;
  font-family: "Penta";
  font-weight: bold;
  font-size: 32px;
  margin-bottom: 3.5vh;
`;

export const OurServicesIconsWrapper = styled.div`
  margin-top: 4.5vh;
  display: flex;
  align-items: center;
  vertical-align: middle;
  justify-content: space-evenly;
  flex-wrap: wrap;
  text-align: center;

  > img {
    vertical-align: middle;
    align-self: center;
  }
`;

export const OurServicesCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 20%;
  @media only screen and (max-width: 1200px) {
    width: auto;
    margin-bottom: 8vh;
    margin-left: 2vh;
    margin-right: 2vh;
  }
`;

export const OurServicesTitle = styled.h1`
  color: black;
  font-family: "Roboto";
  font-size: 19px;
  font-weight: bold;
  text-align: center;
`;

export const OurServicesDescription = styled.p`
  margin-top: 1vh;
  color: gray;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  text-align: center;
  overflow-wrap: break-word;
`;
