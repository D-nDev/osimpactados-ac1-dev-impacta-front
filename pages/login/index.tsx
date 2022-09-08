import type { NextPage } from "next";
import * as S from "../../styles/LoginStyles";
import Link from "next/link";
import Head from "next/head";
import { useRef } from "react";
import Swal from "sweetalert2";
import { usermicroservice } from "@services/api";
import Cookies from "universal-cookie";
import { encode, decode } from "js-base64";

const Login: NextPage = () => {
  const emailref = useRef<any>();
  const passref = useRef<any>();
  const cookies = new Cookies();

  const handleLogin = async () => {
    if (!emailref.current!.value || !passref.current!.value) {
      Swal.fire({
        title: "Erro",
        text: "Preencha todos os campos!",
        icon: "error",
      });
    } else {
      try {
        const result: any = await usermicroservice.get("/login", {
          data: {
            email: emailref.current!.value,
            password: passref.current!.value,
          },
          headers: {
            Authorization: `Basic ${encode(
              `${emailref.current!.value}:${passref.current!.value}`
            )}`,
          },
          withCredentials: true,
        });
        cookies.set("auth", result.data.token);
        window.location.href = "/";
      } catch (error: any) {
        if (error.response.status == 401) {
          Swal.fire({
            title: "Erro",
            text: "Login ou senha inválidos",
            icon: "error",
          });
        } else {
          Swal.fire({
            title: "Erro",
            text: "Ocorreu um erro ao logar, contate o administrador",
            icon: "error",
          });
        }
      }
    }
  };
  return (
    <>
      <Head>
        <title>FoodOnClick | Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <S.Main>
        <S.LeftSide></S.LeftSide>
        <S.RightSide>
          <h1>FoodOnClick - Login</h1>
          <S.MainLabel>Seu E-mail</S.MainLabel>
          <S.Input1 type="email" placeholder="Seu e-mail" ref={emailref} />

          <S.MainLabel>Sua senha</S.MainLabel>
          <S.Input1 type="password" placeholder="Sua senha" ref={passref} />

          <Link href="#" passHref>
            <S.LoginButton
              onClick={() => {
                handleLogin();
              }}
            >
              Login
            </S.LoginButton>
          </Link>
          <S.RegisterText>
            Esqueceu sua senha?{" "}
            <Link href="/recover" passHref>
              <span>Recupere aqui</span>
            </Link>
          </S.RegisterText>
        </S.RightSide>
      </S.Main>
    </>
  );
};

export default Login;
