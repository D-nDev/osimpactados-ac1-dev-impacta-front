import * as S from "./styles";
import Link from "next/link";

type Props = {
  text: string;
  linkpath: string;
  email: string;
};

function Button3({ text, linkpath, email }: Props) {
  return (
    <>
      <Link href={{
        pathname: linkpath,
        query: { email: email },
      }} passHref>
      <S.Button3>{text}</S.Button3>
      </Link>
    </>
  );
}

export default Button3;
