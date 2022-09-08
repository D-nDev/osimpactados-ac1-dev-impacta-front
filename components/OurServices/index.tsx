import * as S from "./styles";
import Icon1 from "../../public/static/images/ourservices_1.svg";
import Icon2 from "../../public/static/images/ourservices_2.svg";
import Icon3 from "../../public/static/images/ourservices_3.svg";
import Image from "next/image";

function OurServices() {
  return (
    <>
      <S.OurServicesTextWrapper>
        <S.OurServicesP>Nossos serviços</S.OurServicesP>
        <S.OurServicesH1>
          Aqui matar sua fome é nossa
          <br /> PRIORIDADE
        </S.OurServicesH1>
      </S.OurServicesTextWrapper>

      <S.OurServicesIconsWrapper>
        <S.OurServicesCard>
          <Image src={Icon1} width={128} height={128} alt="Servico 1"></Image>
          <S.OurServicesTitle>Comida que cabe no seu bolso</S.OurServicesTitle>
          <S.OurServicesDescription>
            O FoodOnClick foi criado com o objetivo de ser um delivery de comidas próximas a data de validade
            por um preço muito em conta
          </S.OurServicesDescription>
        </S.OurServicesCard>

        <S.OurServicesCard>
          <Image src={Icon2} width={128} height={128} alt="Servico 2"></Image>
          <S.OurServicesTitle>Segurança em primeiro lugar</S.OurServicesTitle>
          <S.OurServicesDescription>
            Aqui sua segurança é nossa prioridade, sem mais nem menos, receba o que pediu sempre.
          </S.OurServicesDescription>
        </S.OurServicesCard>

        <S.OurServicesCard>
          <Image src={Icon3} width={128} height={128} alt="Servico 3"></Image>
          <S.OurServicesTitle>
            Fácil de usar e<br /> em qualquer lugar
          </S.OurServicesTitle>
          <S.OurServicesDescription>
            Fácil, leve e simples de usar, acesse de qualquer dispositivo conectado e mate sua fome
          </S.OurServicesDescription>
        </S.OurServicesCard>
      </S.OurServicesIconsWrapper>
    </>
  );
}

export default OurServices;
