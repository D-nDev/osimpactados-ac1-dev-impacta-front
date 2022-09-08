import * as S from "./styles";
import Link from "next/link";

function Footer() {
  return (
    <S.FooterWrapper>
      <span>
        <S.FoodOnClickFooterLogo>
          FoodOnClick <br />
        </S.FoodOnClickFooterLogo>
        <p>FoodOnClick &copy; 2022 - All Rights Reserved</p>
      </span>

      <span>
        <h1>
          Links <br />
        </h1>
        <div>
          <Link href="#" passHref>
            <a>Contato comercial</a>
          </Link>
        </div>
        <div>
          <Link href="#" passHref>
            <a>Features</a>
          </Link>
        </div>
        <div>
          <Link href="#" passHref>
            <a>Suporte</a>
          </Link>
        </div>
      </span>
    </S.FooterWrapper>
  );
}

export default Footer;
