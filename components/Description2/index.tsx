import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";
import Business from "../../public/static/images/talking_2.svg";
import { useEffect, useState } from "react";

function Description2() {
  const [invert, setInvert] = useState(false);

  const onResize = () => {
    if (window.innerWidth <= 1000) {
      setInvert(true);
      return
    } else {
      setInvert(false);
      return
    }
  };

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return (
    <S.Description2Wrapper>
      {invert ? (
        <>
          <span>
            <h1>
              A solução <br />
              para o seu negócio
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              vero eos ipsam sed, dolor expedita aspernatur in illo voluptas
              nostrum animi, hic qui natus. Fuga fugiat vero architecto harum
              ab?
            </p>
            <Link href="/" passHref>
              <S.BusinessContactButton onClick={() => {

              }}>
                Vamos conversar?
              </S.BusinessContactButton>
            </Link>
          </span>
          <S.Description2IMGWrapper>
            <Image
              src={Business}
              width={300}
              height={300}
              alt="Imagem principal"
              className="mainimg"
            ></Image>
          </S.Description2IMGWrapper>
        </>
      ) : (
        <>
          <S.Description2IMGWrapper>
            <Image
              src={Business}
              width={300}
              height={300}
              alt="Imagem principal"
              className="mainimg"
            ></Image>
          </S.Description2IMGWrapper>
          <span>
            <h1>
              A solução <br />
              para o seu negócio
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              vero eos ipsam sed, dolor expedita aspernatur in illo voluptas
              nostrum animi, hic qui natus. Fuga fugiat vero architecto harum
              ab?
            </p>
            <Link href="/" passHref>
              <S.BusinessContactButton disabled>
                Vamos conversar?(Em Breve)
              </S.BusinessContactButton>
            </Link>
          </span>
        </>
      )}
    </S.Description2Wrapper>
  );
}

export default Description2;
