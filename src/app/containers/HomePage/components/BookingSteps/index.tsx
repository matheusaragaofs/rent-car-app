import {
  faCalendarAlt,
  faCarSide,
  faMap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Container,
  Step,
  StepContainer,
  StepDescription,
  StepIcon,
  StepsContainer,
  StepTitle,
  Title,
} from "./styles";

export const BookingSteps: React.FC = () => {
  return (
    <Container>
        <Title>Our Working Steps</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMap} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Find the nearest RentioCar. point and book your car.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Pick-Up Date</StepTitle>
          <StepDescription>
            Pickup the best date to rent a car for you
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Book Your Car</StepTitle>
          <StepDescription>
            Book your nice car with ease in one single click
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
};

