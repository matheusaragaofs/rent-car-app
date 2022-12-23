import React from "react";
import { ICar } from "../../../../../typings/car";
import { Car } from "../../../../components/Car";
import { CarsContainer, Title, TopCarsContainer } from "./styles";

const testCar2: ICar = {
  name: "Audi S3 Car",
  mileage: "10k",
  thumbnailSrc:
    "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
  dailyPrice: 70,
  monthlyPrice: 1600,
  gearType: "Auto",
  gas: "Petrol",
};

const testCar3: ICar = {
  name: "Honda City 5 Seater Car",
  mileage: "20k",
  thumbnailSrc:
    "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
  dailyPrice: 50,
  monthlyPrice: 1500,
  gearType: "Auto",
  gas: "Petrol",
};

export const TopCars: React.FC = () => {
  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Car {...testCar2} />
        <Car {...testCar3} />
      </CarsContainer>
    </TopCarsContainer>
  );
};
