import type { NextPage } from "next";
import * as S from "../../styles/RecoverStyles";
import Link from "next/link";
import Head from "next/head";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import { usermicroservice } from "@services/api";

const Validate: NextPage = () => {
  const emailref = useRef<any>();
  const coderef = useRef<any>();
  const recoverbutton = useRef<any>();
  const [buttondisabled, setButtonDisabled] = useState(false);

  const handleRecover = async () => {
    setButtonDisabled(true);

    if (!emailref.current!.value) {
      Swal.fire({
        title: "Erro",
        text: "Preencha todos os campos!",
        icon: "error",
      });
    } else {
      try {
        await usermicroservice.post("/validateuser", {
          email: emailref.current!.value,
          token: coderef.current!.value,
        });
        Swal.fire({
          title: "Sucesso",
          text: "Conta ativada com sucesso",
          icon: "success",
        }).then(() => {
          window.location.href = "/loginuser";
        });
      } catch (error: any) {
        console.log(error);
        console.log(error.response);
        if (error.response.status == 404) {
          Swal.fire({
            title: "Erro",
            text: error.response.data.error,
            icon: "error",
          });
        } else {
          Swal.fire({
            title: "Erro",
            text: error.response.data.error,
            icon: "error",
          });
        }
      } finally {
        setButtonDisabled(false);
      }
    }
  };
  return (
    <>
      <Head>
        <title>FoodOnClick | Recuperar senha</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <S.Main>
        <S.LeftSide></S.LeftSide>
        <S.RightSide>
          <h1>FoodOnClick - Validar conta</h1>
          <S.MainLabel>Seu E-mail</S.MainLabel>
          <S.Input1 type="email" placeholder="Seu e-mail" ref={emailref} />

          <S.MainLabel>Seu Código</S.MainLabel>
          <S.Input1 type="text" placeholder="Seu código" ref={coderef} />

          <Link href="#" passHref>
            <S.RecoverButton
              ref={recoverbutton}
              onClick={() => {
                handleRecover();
              }}
              disabled={buttondisabled}
            >
              Enviar e-mail
            </S.RecoverButton>
          </Link>
        </S.RightSide>
      </S.Main>
    </>
  );
};

export default Validate;
