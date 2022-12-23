import React, { useState } from "react";
import { ICar } from "../../../../../typings/car";
import { Car } from "../../../../components/Car";
import { CarsContainer, Title, TopCarsContainer } from "./styles";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../../../config/responsive";

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

const cars = [
  <Car key={0} {...testCar2} />,
  <Car key={1} {...testCar3} />,
  <Car key={2} {...testCar2} />,
  <Car key={3} {...testCar3} />,
];
export const TopCars: React.FC = () => {
  const [value, setValue] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3)
  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Carousel
          value={value}
          onChange={setValue}
          slides={cars}
          plugins={[
            "ClickToChange",

            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        ></Carousel>
        <Dots value={value} onChange={setValue} number={numberOfDots} />
      </CarsContainer>
    </TopCarsContainer>
  );
};
