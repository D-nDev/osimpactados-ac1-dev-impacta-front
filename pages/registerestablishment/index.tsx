import type { NextPage } from "next";
import Link from "next/link";
import * as S from "../../styles/RegisterStyles";
import Head from "next/head";
import { establishmentmicroservice } from "@services/api";
import { useRef } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const Register: NextPage = () => {
  const router = useRouter();
  const fullnameref = useRef<any>();
  const emailref = useRef<any>();
  const passref = useRef<any>();
  const confirmpassref = useRef<any>();
  const cnpjref = useRef<any>();
  const addressref = useRef<any>();
  const addressnumberref = useRef<any>();
  const addressdistrictref = useRef<any>();
  const addresscomplement = useRef<any>();
  const cityref = useRef<any>();
  const stateref = useRef<any>();
  const cepref = useRef<any>();
  const mobilenumberref = useRef<any>();
  const okbutton = useRef<HTMLButtonElement>(null);
  const handleRegister = async () => {
    okbutton.current!.disabled = true;
    okbutton.current!.style.cursor = "not-allowed";
    okbutton.current!.style.opacity = "0.8";
    if (
      !emailref.current!.value ||
      !fullnameref.current!.value ||
      !passref.current!.value ||
      !confirmpassref.current!.value ||
      !cnpjref.current!.value ||
      !addressref.current!.value ||
      !addressnumberref.current!.value! ||
      !addressdistrictref.current!.value ||
      !cityref.current!.value ||
      !stateref.current!.value ||
      !cepref.current!.value ||
      !mobilenumberref.current!.value
    ) {
      Swal.fire({
        title: "Erro",
        text: "Preencha todos os campos!",
        icon: "error",
      });
    } else if (passref.current!.value != confirmpassref.current!.value) {
      Swal.fire({
        title: "Erro",
        text: "As senhas não conferem!",
        icon: "error",
      });
    } else {
      try {
        await establishmentmicroservice.post("/create", {
          name: fullnameref.current!.value,
          email: emailref.current!.value,
          password: passref.current!.value,
          mobileNumber: mobilenumberref.current!.value,
          subsidiaries: [
            {
              name: "matriz",
              address: addressref.current!.value,
              addressNumber: parseInt(addressnumberref.current!.value),
              addressDistrict: addressdistrictref.current!.value,
              addressComplement: addresscomplement.current!.value,
              city: cityref.current!.value,
              state: stateref.current!.value,
              cep: cepref.current!.value,
              products: [],
            },
          ],
          cnpj: cnpjref.current!.value,
        });
        Swal.fire({
          title: "Sucesso",
          text: "Cadastro sucedido",
          icon: "success",
        }).then(() => {
          router.push("/");
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
        } else {
          Swal.fire({
            title: "Erro",
            text: error.response.data.error,
            icon: "error",
          });
        }
      } finally {
        okbutton.current!.disabled = false;
        okbutton.current!.style.cursor = "pointer";
        okbutton.current!.style.opacity = "1.0";
      }
    }
  };
  return (
    <>
      <Head>
        <title>FoodOnClick | Registro Comercial</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <S.Main>
        <div className="container">
          <header>FoodOnClick - Registro Estabelecimento</header>

          <div className="main">
            <div className="form first">
              <div className="details personal">
                <span className="title">Detalhes pessoais</span>

                <div className="fields">
                  <div className="input-field">
                    <label>Nome da empresa</label>
                    <input
                      type="text"
                      placeholder="O nome da empresa"
                      required
                      ref={fullnameref}
                    />
                  </div>

                  <div className="input-field">
                    <label>Seu e-mail</label>
                    <input
                      type="email"
                      placeholder="Insira seu e-mail"
                      required
                      ref={emailref}
                    />
                  </div>

                  <div className="input-field">
                    <label>Telefone celular com DDD</label>
                    <input
                      type="text"
                      placeholder="Seu número"
                      required
                      ref={mobilenumberref}
                    />
                  </div>

                  <div className="input-field">
                    <label>Senha</label>
                    <input
                      type="password"
                      placeholder="Uma senha segura :)"
                      required
                      ref={passref}
                    />
                  </div>

                  <div className="input-field">
                    <label>Confirme senha</label>
                    <input
                      type="password"
                      placeholder="Uma senha segura :)"
                      required
                      ref={confirmpassref}
                    />
                  </div>

                  <div className="input-field">
                    <label>CNPJ</label>
                    <input
                      type="text"
                      placeholder="Seu CNPJ"
                      required
                      ref={cnpjref}
                    />
                  </div>
                </div>
              </div>

              <br />
              <div className="details address">
                <span className="title">Dados da MATRIZ</span>

                <div className="fields">
                  <div className="input-field">
                    <label>Rua</label>
                    <input
                      type="text"
                      placeholder="Sua rua"
                      required
                      ref={addressref}
                    />
                  </div>

                  <div className="input-field">
                    <label>Número</label>
                    <input
                      type="text"
                      placeholder="O Número do endereço da matriz da empresa"
                      required
                      ref={addressnumberref}
                    />
                  </div>

                  <div className="input-field">
                    <label>Complemento</label>
                    <input
                      type="text"
                      placeholder="Complemento ou N/A"
                      required
                      ref={addresscomplement}
                    />
                  </div>

                  <div className="input-field">
                    <label>Bairro</label>
                    <input
                      type="text"
                      placeholder="Seu bairro"
                      required
                      ref={addressdistrictref}
                    />
                  </div>

                  <div className="input-field">
                    <label>Cidade</label>
                    <input
                      type="text"
                      placeholder="Sua Cidade"
                      required
                      ref={cityref}
                    />
                  </div>

                  <div className="input-field">
                    <label>Estado</label>
                    <input
                      type="text"
                      placeholder="Seu estado"
                      required
                      ref={stateref}
                    />
                  </div>

                  <div className="input-field">
                    <label>Cep</label>
                    <input
                      type="text"
                      placeholder="Seu CEP"
                      required
                      ref={cepref}
                    />
                  </div>
                </div>

                <button
                  className="sumbit"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleRegister()}
                  ref={okbutton}
                >
                  <span className="btnText">Cadastrar</span>
                  <i className="uil uil-navigator"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </S.Main>
    </>
  );
};

export default Register;
