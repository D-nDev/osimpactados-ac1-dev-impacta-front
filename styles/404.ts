import styled from "styled-components";

export const MainContent = styled.div`
  color: #000;
  background: #fff;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, "Segoe UI",
    "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  > h1 {
    display: inline-block;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
    margin: 0;
    margin-right: 20px;
    padding: 10px 23px 10px 0;
    font-size: 24px;
    font-weight: 500;
    vertical-align: top;
  }
`;

export const Text2Wrapper = styled.div`
  display: inline-block;
  text-align: left;
  line-height: 49px;
  height: 49px;
  vertical-align: middle;
  > h2 {
    font-size: 14px;
    font-weight: normal;
    line-height: inherit;
    margin: 0;
    padding: 0;
  }
`;
