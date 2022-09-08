import Button3 from "@components/Button3";
import * as S from "./styles";
import { useState } from "react";

function JoinNow() {
  const [inputjoin, setInputJoin] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputJoin(event.target.value);
  };
  return (
    <>
      <S.JoinNowWrapper>
        <S.JoinNowTitleWrapper>
          <S.JoinNowTitle>
            Cadastre-se e junte-se a comunidade do Dicere
          </S.JoinNowTitle>
        </S.JoinNowTitleWrapper>
        <S.JoinNowPWrapper>
          <S.JoinNowP>
            Descubra por que milhares de pessoas preferem o Dicere
          </S.JoinNowP>
        </S.JoinNowPWrapper>
        <S.JoinInputWrapper>
          <S.JoinInput
            placeholder="Insira seu melhor e-mail"
            value={inputjoin}
            type="email"
            onChange={handleChange}
          />
          <Button3 text="Cadastrar" linkpath="/register" email={inputjoin} />
        </S.JoinInputWrapper>
      </S.JoinNowWrapper>
    </>
  );
}

export default JoinNow;
