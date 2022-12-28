import React, { useEffect, useState } from "react";
import { ICar } from "../../../../../typings/car";
import { Car } from "../../../../components/Car";
import { CarsContainer, Title, TopCarsContainer } from "./styles";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import carService from "../../../../services/carService";
import { SCREENS } from "../../../../config/responsive";

export const TopCars: React.FC = () => {
  useEffect(() => {
    const getCars = async () => {
      const response = await carService.getCars();
      setCars(response?.cars);
    };
    getCars();
  }, []);

  const [cars, setCars] = useState([] as any);

  const [value, setValue] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);
  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        <Carousel
          value={value}
          onChange={setValue}
          slides={cars.map((car: any, index: any) => (
            <Car key={index} {...car} />
          ))}
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
