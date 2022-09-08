import * as S from "./styles";
import Link from "next/link";


type HeaderLogged = {
  logout: Function;
}

function AppHeaderLogged({ logout }: HeaderLogged) {
  return (
    <S.AppHeaderWrap>
      <S.Logo>FoodOnClick</S.Logo>
      <S.AppHeader>
        <p>Contato Comercial</p>
        <p>Features</p>
        <p>Suporte</p>
      </S.AppHeader>
      <div style={{ marginTop: "1vh" }}>
        <Link href="/login" passHref>
          <S.LoginButton onClick={() => logout()}>Deslogar</S.LoginButton>
        </Link>
      </div>
    </S.AppHeaderWrap>
  );
}

export default AppHeaderLogged;
