import * as S from './styles';

type Props = {
  text: string;
}

function Button1({ text } : Props) {
  return (
    <S.Button1>{text}</S.Button1>
  )
};

export default Button1;
