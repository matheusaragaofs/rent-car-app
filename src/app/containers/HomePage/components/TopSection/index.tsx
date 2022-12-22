import React from "react";
import McLarenCarImg from "../../../../../assets/images/mclaren-orange-big.png";
import BlobImg from "../../../../../assets/images/blob.svg";
import { Button } from "../../../../components/Button";
import {
  BlobContainer,
  ButtonsContainer,
  Description,
  LeftContainer,
  RightContainer,
  Slogan,
  StandaloneCar,
  TopSectionContainer,
} from "./styles";

export default function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent The Best Qulity Car's With Us</Slogan>
        <Description>
          Always choose the best car from our local stores or order it remotely
          at the best price for you and get the best quality cars for as long as
          you like
        </Description>
        <ButtonsContainer>
          <Button text="Book Your Ride" />
          <Button theme="outlined" text="Sell Your Car" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} alt="blob-img" />
        </BlobContainer>
        <StandaloneCar>
          <img src={McLarenCarImg} alt="mc-laren-img" />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
}
