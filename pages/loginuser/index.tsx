import type { NextPage } from "next";
import * as S from "../../styles/LoginStyles";
import Link from "next/link";
import Head from "next/head";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import { usermicroservice } from "@services/api";
import Cookies from "universal-cookie";
import { encode, decode } from "js-base64";
import Modal from "react-modal";

enum LoginUserErrorCodes {
  INVALID_PASS_OR_EMAIL = "Invalid email or password, or account not validated yet",
  NotFoundError = "Invalid email or password, or account not validated yet",
  REQUIRE_TWOFACTOR_CODE = "2FA Token Required",
  INVALID_TWOFACTOR_CODE = "Invalid 2FA Token",
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const customStyles2 = {
  content: {
    width: "auto",
    height: "auto",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

const Login: NextPage = () => {
  const emailref = useRef<any>();
  const passref = useRef<any>();
  const twofactorref = useRef<any>(null);
  const cookies = new Cookies();
  const [twoFactor, setTwoFactor] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal2IsOpen, setIsOpen2] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function openModal2() {
    setIsOpen2(true);
  }

  function closeModal() {
    setIsOpen(false);
    setTwoFactor(false);
  }

  function closeModal2() {
    setIsOpen2(false);
  }

  const handleLogin = async () => {
    if (!emailref.current!.value || !passref.current!.value) {
      Swal.fire({
        title: "Erro",
        text: "Preencha todos os campos!",
        icon: "error",
      });
    } else {
      try {
        const result: any = await usermicroservice.post(
          "/login",
          {
            email: emailref.current!.value,
            password: passref.current!.value,
            code: twofactorref.current! ? twofactorref.current!.value : null,
          },
          {
            withCredentials: true,
            headers: {
              Authorization: `Basic ${encode(
                `${emailref.current!.value}:${passref.current!.value}`
              )}`,
            },
          }
        );
        cookies.set("token", result.data.token, {
          sameSite: "none",
          secure: true,
        });
        window.location.href = "/";
      } catch (error: any) {
        console.log(error);
        console.log(error.response);
        if (error.response.status == 400) {
          if (
            error.response.data.error ===
            LoginUserErrorCodes.REQUIRE_TWOFACTOR_CODE
          ) {
            setTwoFactor(true);
            openModal();
          } else {
            Swal.fire({
              title: "Erro",
              text: error.response.data.error,
              icon: "error",
            });
          }
        } else {
          Swal.fire({
            title: "Erro",
            text: error.response.data.error,
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

          <Modal
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="2FA"
          >
            <div style={{ display: "flex", gap: "150px" }}>
              <h2>C??digo 2FA</h2>
              <button onClick={closeModal}>Fechar</button>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <S.Input1
                type="text"
                placeholder="C??digo 2FA"
                ref={twofactorref}
                style={{ marginRight: "2%" }}
              />
              <S.LoginButton
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleLogin();
                }}
              >
                Login
              </S.LoginButton>
            </div>
          </Modal>

          <Modal
            ariaHideApp={false}
            isOpen={modal2IsOpen}
            onRequestClose={closeModal2}
            style={customStyles2}
            contentLabel="Op????es"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginBottom: "20px",
              }}
            >
              <h2>Op????es</h2>
              <button onClick={closeModal2}>Fechar</button>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <S.LoginButton
                style={{
                  cursor: "pointer",
                  marginRight: "2%",
                  marginBottom: "4%",
                }}
                onClick={() => {
                  window.location.href = "/recover";
                }}
              >
                Recuperar senha por e-mail
              </S.LoginButton>

              <S.LoginButton
                style={{
                  cursor: "pointer",
                  marginRight: "2%",
                  marginBottom: "4%",
                }}
                onClick={() => {
                  window.location.href = "/resetbyemail";
                }}
              >
                Alterar senha com c??digo de e-mail
              </S.LoginButton>

              <S.LoginButton
                style={{
                  cursor: "pointer",
                  marginRight: "2%",
                  marginBottom: "4%",
                }}
                onClick={() => {
                  window.location.href = "/recoversms";
                }}
              >
                Recuperar senha por C??digo SMS
              </S.LoginButton>

              <S.LoginButton
                style={{
                  cursor: "pointer",
                  marginRight: "2%",
                  marginBottom: "4%",
                }}
                onClick={() => {
                  window.location.href = "/resetbysms";
                }}
              >
                Alterar senha com c??digo SMS
              </S.LoginButton>

              <S.LoginButton
                style={{
                  cursor: "pointer",
                  marginRight: "2%",
                  marginBottom: "4%",
                }}
                onClick={() => {
                  window.location.href = "/validateuser";
                }}
              >
                Validar conta
              </S.LoginButton>

              <S.LoginButton
                style={{
                  cursor: "pointer",
                  marginRight: "2%",
                  marginBottom: "4%",
                }}
                onClick={() => {
                  window.location.href = "/resendrecoveremail";
                }}
              >
                Re-enviar c??digo de recupera????o por e-mail
              </S.LoginButton>

              <S.LoginButton
                style={{
                  cursor: "pointer",
                  marginRight: "2%",
                  marginBottom: "4%",
                }}
                onClick={() => {
                  window.location.href = "/resendrecoversms";
                }}
              >
                Re-enviar c??digo de recupera????o por SMS
              </S.LoginButton>

              <S.LoginButton
                style={{
                  cursor: "pointer",
                  marginRight: "2%",
                  marginBottom: "4%",
                }}
                onClick={() => {
                  window.location.href = "/resendvalidation";
                }}
              >
                Re-enviar c??digo de Valida????o de conta
              </S.LoginButton>
            </div>
          </Modal>

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
            Dificuldades ao logar?{" "}
            <Link href="#" passHref>
              <span
                onClick={() => {
                  openModal2();
                }}
              >
                Clique aqui
              </span>
            </Link>
          </S.RegisterText>
        </S.RightSide>
      </S.Main>
    </>
  );
};

export default Login;
