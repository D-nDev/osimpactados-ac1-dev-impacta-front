import * as S from "./styles";

interface Props {
  children: JSX.Element[] | JSX.Element;
  display: any;
}

function UpArrowWrapper({ children, display } : Props) {
  const BackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <>
      <S.TopArrowWrapper display={display} onClick={() => {
        BackToTop();
      }}>{children}</S.TopArrowWrapper>
    </>
  );
}

export default UpArrowWrapper;
