import { NextPage } from "next";
import * as S from "../../styles/ChatStyles";
import { useState, useEffect, useRef, Key, useMemo } from "react";
import { slide as Menu } from "react-burger-menu";
import io from "socket.io-client";
import { api } from "../../services/api";
import Head from "next/head";
import Cookies from "universal-cookie";
import router from "next/router";
import Swal from "sweetalert2";

const Chat: NextPage = () => {
  type Message = {
    user_id: any;
    message: any;
    full_name: any;
    date: any;
  };
  type Users = {
    id: any;
    email: any;
    name: any;
    iat: any;
    exp: any;
  };
  const cookies = useMemo(() => {
    return new Cookies();
  }, []);
  const [mobilemenu, setMobileMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messageref = useRef<HTMLInputElement>();
  const [messages, setMessages] = useState<any[]>([]);
  const [online, setOnline] = useState<Users[]>([]);

  const onResize = () => {
    if (window.innerWidth <= 768) {
      setMobileMenu(true);
    } else {
      setMobileMenu(false);
    }
  };

  const parseJwt = (token: string) => {
    if (!token) {
      return;
    }
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace("-", "+").replace("_", "/");
      const user_token = JSON.parse(window.atob(base64));

      return user_token;
    } catch (err) {
      return false;
    }
  };

  const mytoken = parseJwt(cookies.get("auth"));

  useEffect(() => {
    const socket = io(`${process.env.NEXT_PUBLIC_SOCKET}`);

    socket.on("connect", () => {
      socket.emit("newlogin", mytoken.name, () => {});
    });

    socket.on("updateusers", (data) => {
      setOnline(() => data);
    });

    socket.on("updatemsgs", (data: any) => {
      console.log(data);
      //setMessages((oldArray) => [data, ...oldArray]);
      setMessages(() => data.reverse());
    });

    onResize();
    window.addEventListener("resize", onResize);
    document.querySelector("body")!.style.overflow = "hidden";
    const req = async () => {
      const result: any = await api.get("/messages");
      setMessages(() => result.data.reverse());
      console.log(messages);
    };
    req();
    return () => {
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Head>
        <title>FoodOnClick | Painel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <S.MainNavbar>
        <S.ChatLogoWrapper>
          <S.ChatLogo onClick={() => ""}>FoodOnClick</S.ChatLogo>
        </S.ChatLogoWrapper>
        {mobilemenu ? (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              cookies.remove("auth");
              router.push("/");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </span>
        ) : (
          <S.LogoutButton
            onClick={() => {
              cookies.remove("auth");
              window.location.href = "/";
            }}
          >
            Deslogar
          </S.LogoutButton>
        )}
      </S.MainNavbar>

      <S.ChatWrapper>
        {mobilemenu ? (
          <>
            <Menu
              styles={S.MobileMenuStyles}
              isOpen={isOpen}
              onOpen={() => setIsOpen(true)}
              onClose={() => setIsOpen(false)}
            >
              <div>
                <S.LeftSideUsers>Usuários</S.LeftSideUsers>
                {online.map((user: any, i: Key) => {
                  console.log(online);
                  return (
                    <>
                      <S.LeftSideUserList>
                        <S.LeftSideUserListWrapper>
                          <S.LeftSideOnlineIcon></S.LeftSideOnlineIcon>
                          <span key={i}>{user.name}</span>
                        </S.LeftSideUserListWrapper>
                      </S.LeftSideUserList>
                    </>
                  );
                })}
              </div>
            </Menu>
          </>
        ) : (
          <S.LeftSide>
            <div>
              <S.LeftSideUsers>Usuários</S.LeftSideUsers>
              {online.map((user: any, i: Key) => {
                console.log(online);
                return (
                  <>
                    <S.LeftSideUserList>
                      <S.LeftSideUserListWrapper>
                        <S.LeftSideOnlineIcon></S.LeftSideOnlineIcon>
                        <span key={i}>{user.name}</span>
                      </S.LeftSideUserListWrapper>
                    </S.LeftSideUserList>
                  </>
                );
              })}
            </div>
          </S.LeftSide>
        )}

        <S.RightSide>
          <S.ChatArea>
            <S.ChatContent>
              {messages.map((msg, i) => {
                return (
                  <>
                    <S.ChatMessageWrapper>
                      <S.ChatMessageDetailsWrapper>
                        <S.ChatMessageDetailsUser key={msg.full_name + i}>
                          {msg.full_name}
                        </S.ChatMessageDetailsUser>
                        <S.ChatMessageDetailsTime>
                          {new Date(msg.date).toLocaleString("pt-BR", {
                            timeZone: "America/Sao_Paulo",
                          })}
                        </S.ChatMessageDetailsTime>
                      </S.ChatMessageDetailsWrapper>
                      <S.ChatMessage key={msg.message + i}>
                        {msg.message}
                      </S.ChatMessage>
                    </S.ChatMessageWrapper>
                  </>
                );
              })}
            </S.ChatContent>
            <S.MessageInputWrapper>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (messageref.current!.value) {
                    const gettoken = parseJwt(cookies.get("auth"));
                    try {
                      await api.post("/newmsg", {
                        user_id: gettoken.id,
                        message: messageref.current!.value,
                        full_name: gettoken.name,
                      });
                    } catch (err) {
                      Swal.fire({
                        title: "Erro",
                        text: "Token inválido!",
                        icon: "error",
                      }).then(() => {
                        router.push("/loginuser");
                      });
                    }

                    messageref.current!.value = "";
                  }
                }}
              >
                <S.MessageInput
                  placeholder="Mensagem..."
                  name="messageInput"
                  ref={messageref}
                />
                <S.SendButton type="submit">Enviar</S.SendButton>
              </form>
            </S.MessageInputWrapper>
          </S.ChatArea>
        </S.RightSide>
      </S.ChatWrapper>
    </>
  );
};

export default Chat;
