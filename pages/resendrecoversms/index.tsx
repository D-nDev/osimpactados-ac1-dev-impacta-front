import type { NextPage } from "next";
import * as S from "../../styles/RecoverStyles";
import Link from "next/link";
import Head from "next/head";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import { usermicroservice } from "@services/api";

const ReSendRecoverSMS: NextPage = () => {
  const numberref = useRef<any>();
  const recoverbutton = useRef<any>();
  const [buttondisabled, setButtonDisabled] = useState(false);

  const handleRecover = async () => {
    setButtonDisabled(true);

    if (!numberref.current!.value) {
      Swal.fire({
        title: "Erro",
        text: "Preencha todos os campos!",
        icon: "error",
      });
    } else {
      try {
        await usermicroservice.post("/user/resendrecoversms", {
          mobileNumber: `+55${numberref.current!.value}`,
        });
        Swal.fire({
          title: "Sucesso",
          text: "Código enviado para o Número",
          icon: "success",
        }).then(() => {
          window.location.href = "/resetbysms";
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
        } else if (error.response.status == 400) {
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
        <title>FoodOnClick | Re-Enviar Código de Recuperação de senha</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <S.Main>
        <S.LeftSide></S.LeftSide>
        <S.RightSide>
          <h1 style={{ fontSize: "13px" }}>FoodOnClick - Re-Enviar Código de Recuperação de senha</h1>
          <S.MainLabel>Seu Telefone com DDD</S.MainLabel>
          <S.Input1 type="text" placeholder="Seu Telefone com DDD" ref={numberref} />

          <Link href="#" passHref>
            <S.RecoverButton
              ref={recoverbutton}
              onClick={() => {
                handleRecover();
              }}
              disabled={buttondisabled}
            >
              Enviar Código
            </S.RecoverButton>
          </Link>
        </S.RightSide>
      </S.Main>
    </>
  );
};

export default ReSendRecoverSMS;
