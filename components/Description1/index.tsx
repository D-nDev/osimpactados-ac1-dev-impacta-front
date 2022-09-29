import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";
import Woman from "../../public/static/images/talking_1.svg";

function Description1() {
  return (
    <S.Description1Wrapper>
      <span>
        <h1>
          Comida com preço <br />
          justo para todos
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero
          eos ipsam sed, dolor expedita aspernatur in illo voluptas nostrum
          animi, hic qui natus. Fuga fugiat vero architecto harum ab?
        </p>
      </span>
      <S.Description1IMGWrapper>
        <Image
          src={Woman}
          width={300}
          height={300}
          alt="Imagem principal"
          className="mainimg"
        ></Image>
      </S.Description1IMGWrapper>
    </S.Description1Wrapper>
  );
}

export default Description1;
