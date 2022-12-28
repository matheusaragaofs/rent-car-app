import React, { useEffect, useState } from "react";
import { ICar } from "../../../../../typings/car";
import { Car } from "../../../../components/Car";
import {
  CarsContainer,
  EmptyCarsContainer,
  Title,
  TopCarsContainer,
} from "./styles";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import _ from "lodash";
import { useMediaQuery } from "react-responsive";
import carService from "../../../../services/carService";
import { SCREENS } from "../../../../config/responsive";
import { Dispatch } from "@reduxjs/toolkit";
import { GetCars_cars } from "../../../../services/__generated__/GetCars";
import { setTopCars, memoizedTopCars } from "../../slice";
import { useDispatch, useSelector } from "react-redux";

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

export const TopCars: React.FC = () => {
  const { setTopCars } = actionDispatch(useDispatch());

  useEffect(() => {
    const getCars = async () => {
      const response = await carService.getCars();
      if (response) setTopCars(response);
    };
    getCars();
  }, []);

  const topCars = useSelector(memoizedTopCars);

  const [value, setValue] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const numberOfDots = isMobile
    ? topCars?.length
    : Math.ceil(topCars?.length / 3);

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>

      {!_.isEmpty(topCars) ? (
        <CarsContainer>
          <Carousel
            value={value}
            onChange={setValue}
            slides={topCars?.map((car: any, index: any) => (
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
      ) : (
        <EmptyCarsContainer>There are no cars</EmptyCarsContainer>
      )}
    </TopCarsContainer>
  );
};
