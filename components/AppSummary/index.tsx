import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  mainIMG: any
  children?: JSX.Element[] | JSX.Element;
}

function AppSummary({ mainIMG, children } : Props) {
  const [mobilemenu, setMobileMenu] = useState(false);

  const onResize = () => {
    if (window.innerWidth <= 1200) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  };

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, []);
  return (
    <S.AppSummary>
      {mobilemenu && <S.MobileLogo>FoodOnClick</S.MobileLogo>}
      <span>
        <h1>
          Comida rápido <br />
          e na palma da sua mão 🍔
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero
          eos ipsam sed, dolor expedita aspernatur in illo voluptas nostrum
          animi, hic qui natus. Fuga fugiat vero architecto harum ab?
        </p>
        <Link href="/chat" passHref>
          <S.JoinButton>Testar</S.JoinButton>
        </Link>
      </span>
      <S.AppSummaryMainIMGWrapper>
        <Image
          src={mainIMG}
          width={500}
          height={500}
          alt="Imagem principal"
          className="mainimg"
        ></Image>
      </S.AppSummaryMainIMGWrapper>
      {children}
    </S.AppSummary>
  );
}

export default AppSummary;
