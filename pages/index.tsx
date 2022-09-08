import type { NextPage } from "next";
import * as S from "@styles/IndexStyle";
import SummaryIMG from "../public/static/images/summary_index.svg";
import PartnersIMG from "../public/static/images/randomlogo.png";
import Image from "next/image";
import Head from "next/head";
import AppHeader from "@components/AppHeader";
import AppSummary from "@components/AppSummary";
import OurServices from "@components/OurServices";
import Description1 from "@components/Description1";
import Description2 from "@components/Description2";
import Testimonial from "@components/Testimonial";
import JoinNow from "@components/JoinNow";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "@components/Footer";
import UpArrow from "../public/static/images/toparrow.png";
import UpArrowWrapper from "@components/UpArrow";
import Cookies from "universal-cookie";
import AppHeaderLogged from "@components/AppHeaderLogged";

const Index: NextPage = () => {
  const cookies = new Cookies();
  const islogged = cookies.get("auth");
  const [mobilemenu, setMobileMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showarrow, setShowArrow] = useState(false);

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
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 500) {
        setShowArrow(true);
        return;
      } else {
        setShowArrow(false);
        return;
      }
    });
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return (
    <>
      <Head>
        <title>FoodOnClick | Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <S.MainContent>
        {mobilemenu ? (
          <>
            <Menu
              styles={S.MobileMenuStyles}
              isOpen={isOpen}
              onOpen={() => setIsOpen(true)}
              onClose={() => setIsOpen(false)}
            >
              {islogged ? (
                <>
                  <span
                    onClick={() => {
                      cookies.remove("auth");
                      window.location.href = "/";
                    }}
                    style={{cursor: 'pointer', display: 'inline-block', marginBottom: '1vh'}}
                  >
                    Deslogar
                  </span>
                </>
              ) : (
                <>
                  <div style={{marginBottom: "8px"}}>
                    <Link href="/login" passHref>
                      <a>Login</a>
                    </Link>
                  </div>
                  <div style={{marginBottom: "8px"}}>
                    <Link href="/register" passHref>
                      <a>Registro</a>
                    </Link>
                  </div>
                  <div style={{marginBottom: "8px"}}>
                    <Link href="/registerestablishment" passHref>
                      <a>Registro Estabelecimento</a>
                    </Link>
                  </div>
                </>
              )}

              <div style={{marginBottom: "8px"}}>
                <Link href="#" passHref>
                  <a onClick={() => setIsOpen(false)}>Contato comercial</a>
                </Link>
              </div>
              <div>
                <Link href="#" passHref>
                  <a onClick={() => setIsOpen(false)}>Suporte</a>
                </Link>
              </div>
            </Menu>
          </>
        ) : islogged ? (
          <AppHeaderLogged
            logout={() => {
              cookies.remove("auth");
              window.location.href = "/";
            }}
          />
        ) : (
          <AppHeader />
        )}
        <AppSummary mainIMG={SummaryIMG} />

        <S.Partners>
          <Image
            src={PartnersIMG}
            width={50}
            height={50}
            alt="Logo parceiros"
          ></Image>
          <Image
            src={PartnersIMG}
            width={50}
            height={50}
            alt="Logo parceiros"
          ></Image>
          <Image
            src={PartnersIMG}
            width={50}
            height={50}
            alt="Logo parceiros"
          ></Image>
          <Image
            src={PartnersIMG}
            width={50}
            height={50}
            alt="Logo parceiros"
          ></Image>
          <Image
            src={PartnersIMG}
            width={50}
            height={50}
            alt="Logo parceiros"
          ></Image>
        </S.Partners>
        <OurServices />
        <Description1 />
        <Description2 />
        <Testimonial />
        <JoinNow />
        <Footer />
        <UpArrowWrapper display={+showarrow}>
          <Image
            src={UpArrow}
            width={50}
            height={50}
            alt="Voltar ao Início"
          ></Image>
        </UpArrowWrapper>
      </S.MainContent>
    </>
  );
};

export default Index;
