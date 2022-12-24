import styled from "styled-components";
import tw from "twin.macro";

export const NavbarContainer = styled.div`
  min-height: 68px;
${tw`
    w-full
    max-w-screen-2xl 
    flex 
    items-center
    lg:pl-12
    lg:pr-12 
    justify-between`}
`;

export const LogoContainer = styled.div``;

export const menuStyles = {
    bmBurgerButton: {
      position: "absolute",
      width: "20px",
      height: "20px",
      right: "20px",
      top: "20px",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      width: "60%",
      height: "100%",
      top: "0px",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };