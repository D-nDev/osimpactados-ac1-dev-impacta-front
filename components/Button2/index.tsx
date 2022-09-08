import * as S from './styles'

type Props = {
  text: string;
}

function Button2({ text } : Props) {
  return (
    <S.Button2>{text}</S.Button2>
  )
}

export default Button2;
