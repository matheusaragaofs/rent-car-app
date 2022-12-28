import {
  faEllipsisH,
  faFillDrip,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ICar } from "../../../typings/car";


import {
  CarContainer,
  CarDetail,
  CarDetailsContainer,
  CarInfo,
  CarName,
  CarThumbnail,
  DailyPrice,
  MonthlyPrice,
  PricesContainer,
  RentButton,
  Separator,
  SmallIcon,
  SmallText,
} from "./styles";

interface ICarProps extends ICar {}

export const Car: React.FC<ICarProps> = ({
  name,
  thumbnailUrl,
  dailyPrice,
  monthlyPrice,
  mileage,
  gas,
  gearType,
}) => {
  return (
    <CarContainer>
      <CarThumbnail>
        <img src={thumbnailUrl} />
      </CarThumbnail>
      <CarName>{name}</CarName>
      <PricesContainer>
        <DailyPrice>
          ${dailyPrice}
          <SmallText>/Day</SmallText>
        </DailyPrice>
        <MonthlyPrice>
          ${monthlyPrice}
          <SmallText>/Month</SmallText>
        </MonthlyPrice>
      </PricesContainer>
      <Separator />
      <CarDetailsContainer>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faTachometerAlt} />
          </SmallIcon>
          <CarInfo>{mileage}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faEllipsisH} />
          </SmallIcon>
          <CarInfo>{gearType}</CarInfo>
        </CarDetail>
        <CarDetail>
          <SmallIcon>
            <FontAwesomeIcon icon={faFillDrip} />
          </SmallIcon>
          <CarInfo>{gas}</CarInfo>
        </CarDetail>
      </CarDetailsContainer>
      <RentButton text="Rent Now" />
    </CarContainer>
  );
};
