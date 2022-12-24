import React from "react";
import CarLogoImg from "../../../assets/images/car-logo.png";
import CarLogoDarkImg from "../../../assets/images/car-logo-dark.png";

import { Image, LogoContainer, LogoText } from "./styles";

interface ILogoProps {
  color?: "white" | "dark";
}
export default function Logo({ color }: ILogoProps) {
  return (
    <LogoContainer>
      <Image>
        <img src={color === "white" ? CarLogoDarkImg: CarLogoImg } />
      </Image>
      <LogoText color={color || "dark"}>RentioCar.</LogoText>
    </LogoContainer>
  );
}
