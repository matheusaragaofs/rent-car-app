import React from "react";
import CarLogoImg from "../../../assets/images/car-logo.png";
import { Image, LogoContainer, LogoText } from "./styles";

export default function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogoImg} />
      </Image>
      <LogoText>RentioCar.</LogoText>
    </LogoContainer>
  );
}
