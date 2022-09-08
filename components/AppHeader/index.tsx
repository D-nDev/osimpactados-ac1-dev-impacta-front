import * as S from "./styles";
import Link from "next/link";


function AppHeader() {
  return (
    <S.AppHeaderWrap>
      <S.Logo>FoodOnClick</S.Logo>
      <S.AppHeader>
        <p>Contato Comercial</p>
        <p>Suporte</p>
      </S.AppHeader>
      <div style={{ marginTop: "1vh" }}>
        <Link href="/login" passHref>
          <S.LoginButton>Login</S.LoginButton>
        </Link>

        <span style={{ marginLeft: "3vh" }}>
          <Link href="/register" passHref>
            <S.LoginButton>Registro Usuário</S.LoginButton>
          </Link>
        </span>

        <span style={{ marginLeft: "3vh" }}>
          <Link href="/registerestablishment" passHref>
            <S.LoginButton>Registro Estabelecimento</S.LoginButton>
          </Link>
        </span>
      </div>
    </S.AppHeaderWrap>
  );
}

export default AppHeader;
