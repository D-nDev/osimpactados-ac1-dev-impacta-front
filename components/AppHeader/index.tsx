import * as S from "./styles";
import Link from "next/link";


function AppHeader() {
  return (
    <S.AppHeaderWrap>
      <S.Logo>FoodOnClick</S.Logo>
      <div style={{ marginTop: "1vh" }}>
        <Link href="/loginuser" passHref>
          <S.LoginButton>Login Usuário</S.LoginButton>
        </Link>

        <span style={{ marginLeft: "3vh" }}>
        <Link href="/loginestablishment" passHref>
          <S.LoginButton>Login Estabelecimento</S.LoginButton>
        </Link>
        </span>

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
