import React, { useEffect, useMemo, useState } from "react";
import { ICar } from "../../../../../typings/car";
import { Car } from "../../../../components/Car";
import {
  CarsContainer,
  EmptyCarsContainer,
  LoadingContainer,
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
import { MoonLoader } from "react-spinners";

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

export const TopCars: React.FC = () => {
  const { setTopCars } = actionDispatch(useDispatch());
  const [isLoading, setLoading] = useState(false);

  const wait = (time: number) =>
    new Promise((resolve) => setTimeout(resolve, time));

  useEffect(() => {
    const getCars = async () => {
      setLoading(true);
      const response = await carService.getCars();
      await wait(3000);
      if (response) setTopCars(response);
      setLoading(false);
    };
    getCars();
  }, []);

  const topCars = useSelector(memoizedTopCars);

  const [value, setValue] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });
  const numberOfDots = isMobile
    ? topCars?.length
    : Math.ceil(topCars?.length / 3);

  const renderTopCars = useMemo(() => {
    if (isLoading)
      return (
        <LoadingContainer>
          <MoonLoader loading />
        </LoadingContainer>
      );

    if (_.isEmpty(topCars))
      return <EmptyCarsContainer>There are no cars</EmptyCarsContainer>;

    return (
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
    );
  }, [topCars, isLoading]);

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      {renderTopCars}
    </TopCarsContainer>
  );
};
