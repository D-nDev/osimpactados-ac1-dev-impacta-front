import styled from "styled-components";
import tw from "tailwind-styled-components";

export const MainNavbar = tw.div`
  bg-white
  fixed
  w-full
  top-2
  left-0
  z-10
  flex
  items-center
  justify-between
  shadow-sm
  py-3
  px-6
  nav
`;

export const ChatLogoWrapper = tw.div`
  flex
  items-center
`;

const ChatLogoStyled = styled.h1`
  font-family: "Penta";
  font-weight: bold;
  color: orange;
  @media only screen and (max-width: 768px) {
    margin-left: 4vh;
    font-size: 1.3rem;
  }
`;

export const ChatLogo = tw(ChatLogoStyled)`
  ml-3
  text-3xl
  font-semibold
`;

const LogoutButtonStyled = styled.button`
  color: white;
  &:hover {
    filter: brightness(0.85);
  }
`;

export const LogoutButton = tw(LogoutButtonStyled)`
  px-6
  py-3
  text-white
  bg-primary
  font-medium
  rounded-md
  shadow-md
  focus:outline-none
`;

const ChatWrapperStyled = styled.div`
  margin-top: 80px;
  height: calc(100vh - 80px);
  @media only screen and (max-width: 768px) {
    height: calc(100vh - 70px);
    margin-top: 70px;
  }
`;

export const ChatWrapper = tw(ChatWrapperStyled)`
  flex
  m-0
  content
`;

export const LeftSide = tw.div`
  flex-none
  min-w-300
  bg-primary
  overflow-y-auto
`;

const LeftSideUsersStyled = styled.h2`
  color: white;
  font-family: "Roboto";
  @media only screen and (max-width: 768px) {
    margin: 0 !important;
  }
`;

export const LeftSideUsers = tw(LeftSideUsersStyled)`
  m-6
  text-white
  font-bold
  text-lg
`;

const LeftSideUserListStyled = styled.div`
  @media only screen and (max-width: 768px) {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
`;

export const LeftSideUserList = tw(LeftSideUserListStyled)`
  p-3
  mx-6
  my-2
  text-white
  text-opacity-70
  bg-secondary
  rounded-md
`;

export const LeftSideUserListWrapper = tw.div`
  flex
  items-center
`;

const LeftSideOnlineIconStyled = styled.div`
  background-color: green;
`;

export const LeftSideOnlineIcon = tw(LeftSideOnlineIconStyled)`
  h-2
  w-2
  mr-2
  rounded-full
  inline-block
`;

const RightSideStyled = styled.div`
  background-color: rgba(245, 245, 245);
`;

export const RightSide = tw(RightSideStyled)`
  flex-1
  w-full
`;

const ChatAreaStyled = styled.div`
  height: calc(100vh - 80px);
  max-height: calc(100vh - 80px);
  @media only screen and (max-width: 768px) {
    /*margin-top: 69px;*/
    height: calc(95vh - 80px);
  }
`;

export const ChatArea = tw(ChatAreaStyled)`
  flex
  flex-col
`;

const ChatContentWrapper = styled.div`
  @media only screen and (max-width: 768px) {
    padding-bottom: 9vh;
  }
`

export const ChatContent = tw(ChatContentWrapper)`
  flex-1
  overflow-y-auto
  p-6
  flex
  flex-col-reverse
`;

const ChatMessageWrapperStyled = styled.div`
  @media only screen and (max-width: 768px) {
    /*margin-bottom: 5vh;*/
  }
`;

export const ChatMessageWrapper = tw(ChatMessageWrapperStyled)`
  mb-3
  p-3
  mt-11
`;

export const ChatMessageDetailsWrapper = tw.div`
  flex
  flex-items-center
  mb-2
`;

export const ChatMessageDetailsUser = tw.span`
  font-bold
  text-gray-700
  text-lg
  mr-4
`;

export const ChatMessageDetailsTime = tw.span`
  text-sm
  text-gray-400
`;

export const ChatMessage = styled.p`
  color: gray;
`;

const MessageInputWrapperStyled = styled.div`
  @media only screen and (max-width: 768px) {
    /*margin-bottom: 8vh;*/
  }
`;

export const MessageInputWrapper = tw(MessageInputWrapperStyled)`
  flex-none
  pb-4
  px-4
`;

const MessageInputStyled = styled.input`
  border-color: rgba(229, 229, 229);
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: orange;
    opacity: 1;
  }
`;

export const MessageInput = tw(MessageInputStyled)`
  w-full
  p-3
  border
  rounded-md
  shadow-md
  focus:border-primary
`;

export const SendButton = styled.button`
  display: none;
`;

export const MobileMenuStyles = {
  bmBurgerButton: {
    position: "absolute",
    width: "36px",
    left: "12px",
    height: "20px",
    top: "29px",
  },
  bmBurgerBars: {
    background: "orange",
  },
  bmBurgerBarsHover: {
    background: "#fff",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#fff",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#386641",
    padding: "1em",
    fontSize: "1.15em",
    margin: "0",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#000",
    fontFamily: "inherit",
    padding: "0.8em",
  },
  bmItem: {
    display: "block",
    marginBottom: "1vh",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
