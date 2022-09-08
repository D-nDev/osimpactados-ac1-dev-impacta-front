import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  box-sizing: border-box;
  * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }
  button[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
  }
@font-face {
  font-family: 'Montserrat';
    src: url('/static/fonts/Montserrat-Regular.ttf');
    src: url('/static/fonts/Montserrat-Bold.ttf');
    src: url('/static/fonts/Montserrat-Black.ttf');
    src: url('/static/fonts/Montserrat-ExtraLight.ttf');
}

@font-face {
  font-family: 'Weinssehof';
    src: url('/static/fonts/WeissenhofGrotesk-Medium.ttf');
}

@font-face {
  font-family: 'Penta';
    src: url('/static/fonts/Penta-Rounded-Extrabold.ttf');
}
`;
