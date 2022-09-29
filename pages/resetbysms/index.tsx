import type { NextPage } from "next";
import * as S from "../../styles/ResetStyles";
import Link from "next/link";
import Head from "next/head";
import { useRef, useState } from "react";
import Swal from "sweetalert2";
import { usermicroservice } from "@services/api";

const ResetBySMS: NextPage = () => {
  const numberref = useRef<any>();
  const tokenref = useRef<any>();
  const passref = useRef<any>();
  const pass2ref = useRef<any>();
  const Resetbutton = useRef<any>();
  const [buttondisabled, setButtonDisabled] = useState(false);

  const handleReset = async () => {
    setButtonDisabled(true);
    if (passref.current!.value != pass2ref.current!.value) {
      Swal.fire({
        title: "Erro",
        text: "Senhas não coincidem",
        icon: "error",
      });
      setButtonDisabled(false);
    } else if (
      !numberref.current!.value ||
      !tokenref.current!.value ||
      !passref.current!.value ||
      !pass2ref.current!.value
    ) {
      Swal.fire({
        title: "Erro",
        text: "Preencha todos os campos!",
        icon: "error",
      });
      setButtonDisabled(false);
    } else if (passref.current.value.length < 6) {
      Swal.fire({
        title: "Erro",
        text: "A senha deve possuir pelo menos 6 caracteres",
        icon: "error",
      });
      setButtonDisabled(false);
    } else {
      try {
        await usermicroservice.post(
          "/changepass/sms",
          {
            mobileNumber: numberref.current.value,
            token: tokenref.current.value,
            password: passref.current.value,
          },
          { withCredentials: true }
        );
        Swal.fire({
          title: "Sucesso",
          text: "Senha alterada com sucesso",
          icon: "success",
        }).then(() => {
          window.location.href = "/loginuser";
        });
      } catch (error: any) {
        console.log(error);
        console.log(error.response);
        if (error.response.status == 400) {
          Swal.fire({
            title: "Erro",
            text: error.response.data.error,
            icon: "error",
          });
        } else if (error.response.status == 404) {
          Swal.fire({
            title: "Erro",
            text: error.response.data.error,
            icon: "error",
          });
        } else if (error.response.status == 409) {
          let errors = "";
          error.response.data.error.forEach((element: any) => {
            errors += element.msg;
            errors += "<br/>";
          });
          console.log(errors);
          Swal.fire({
            title: "Erro",
            html: errors,
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
        <title>FoodOnClick | Alterar senha</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <S.Main>
        <S.LeftSide></S.LeftSide>
        <S.RightSide>
          <h1>FoodOnClick - Alterar senha</h1>
          <S.MainLabel>Seu Número</S.MainLabel>
          <S.Input1 type="text" placeholder="Seu número" ref={numberref} />

          <S.MainLabel>Seu Token</S.MainLabel>
          <S.Input1 type="text" placeholder="Seu Token" ref={tokenref} />

          <S.MainLabel>Sua nova senha</S.MainLabel>
          <S.Input1
            type="password"
            placeholder="Sua nova senha"
            ref={passref}
          />

          <S.MainLabel>Sua nova senha novamente</S.MainLabel>
          <S.Input1
            type="password"
            placeholder="Sua nova senha novamente"
            ref={pass2ref}
          />

          <Link href="#" passHref>
            <S.ResetButton
              ref={Resetbutton}
              onClick={() => {
                handleReset();
              }}
              disabled={buttondisabled}
            >
              Alterar senha
            </S.ResetButton>
          </Link>
        </S.RightSide>
      </S.Main>
    </>
  );
};

export default ResetBySMS;
