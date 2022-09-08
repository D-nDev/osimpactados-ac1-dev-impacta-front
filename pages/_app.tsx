import '../styles/tailwind.css';
import '../styles/register.css';
import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/GlobalStyle";
import "sweetalert2/src/sweetalert2.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
