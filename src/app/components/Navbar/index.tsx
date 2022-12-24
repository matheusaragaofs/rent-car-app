import React from "react";
import Logo from "../Logo";
import { NavItems } from "./components/NavItem";
import { LogoContainer, NavbarContainer } from "./styles";

export default function Navbar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavbarContainer>
  );
}
