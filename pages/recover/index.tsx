import type { NextPage } from "next";
import * as S from "../../styles/RecoverStyles";
import Link from "next/link";
import Head from "next/head";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import { awslambda1 } from "@services/api";

const Recover: NextPage = () => {
  const emailref = useRef<any>();
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
        const result: any = await awslambda1.post("", {
          email: emailref.current.value,
        });
        Swal.fire({
          title: "Sucesso",
          text: "Código enviado para o e-mail",
          icon: "success",
        }).then(() => {
          window.location.href = "/reset";
        });
      } catch (error: any) {
        if (error.response.status == 404) {
          Swal.fire({
            title: "Erro",
            text: "E-mail não encontrado",
            icon: "error",
          });
        } else {
          Swal.fire({
            title: "Erro",
            text: "Ocorreu um erro ao enviar o e-mail, contate o administrador",
            icon: "error",
          });
        }
        console.log(error);
        console.log(error.response);
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
          <h1>FoodOnClick - Recuperar senha</h1>
          <S.MainLabel>Seu E-mail</S.MainLabel>
          <S.Input1 type="email" placeholder="Seu e-mail" ref={emailref} />

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

export default Recover;
