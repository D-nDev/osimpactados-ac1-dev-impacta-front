import "../styles/tailwind.css";
import "../styles/register.css";
import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/GlobalStyle";
import "sweetalert2/src/sweetalert2.scss";
import { theme } from "../theme";
import { ThemeProvider } from "@mui/material/styles";
import { UserProvider } from "contexts/UserContext";
import { UploadProvider } from "contexts/UploadContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <UserProvider>
        <UploadProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </UploadProvider>
      </UserProvider>
    </>
  );
}

export default MyApp;
