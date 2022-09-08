import styled, { css } from "styled-components";

export const MainContent = styled.main`
  height: 100vh;
`;

export const Partners = styled.div`
  margin-top: 4vh;
  display: flex;
  align-items: center;
  vertical-align: middle;
  justify-content: space-evenly;
`;

export const MobileMenuStyles = {
  bmBurgerButton: {
    position: "absolute",
    width: "36px",
    height: "30px",
    left: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#373a47",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "block",
    marginBottom: "1vh",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
