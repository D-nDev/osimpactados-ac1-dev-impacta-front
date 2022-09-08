import * as S from "./styles";
import Link from "next/link";
import Image from "next/image";
import Opinion from "../../public/static/images/opinion.svg";

function Testimonial() {
  return (
    <S.TestimonialWrapper>
      <span>
        <h1>
          Opinião de <br />
          quem já utiliza
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero
          eos ipsam sed, dolor expedita aspernatur in illo voluptas nostrum
          animi, hic qui natus. Fuga fugiat vero architecto harum ab?
        </p>
        <S.TestimonialName>Diego</S.TestimonialName>
      </span>
      <S.TestimonialIMGWrapper>
        <Image
          src={Opinion}
          width={300}
          height={300}
          alt="Imagem principal"
          className="mainimg"
        ></Image>
      </S.TestimonialIMGWrapper>
    </S.TestimonialWrapper>
  );
}

export default Testimonial;
