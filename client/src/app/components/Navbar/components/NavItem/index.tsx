import React from "react";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../../../config/responsive";
import { ListContainer, NavItem } from "./styles";
import { menuStyles } from "../../styles";

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <a href="">Home</a>
          </NavItem>
          <NavItem menu>
            <a href="">Cars</a>
          </NavItem>
          <NavItem menu>
            <a href="">Services</a>
          </NavItem>
          <NavItem menu>
            <a href="">Contact Us</a>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <a href="">Home</a>
      </NavItem>
      <NavItem>
        <a href="">Cars</a>
      </NavItem>
      <NavItem>
        <a href="">Services</a>
      </NavItem>
      <NavItem>
        <a href="">Contact Us</a>
      </NavItem>
    </ListContainer>
  );
}
