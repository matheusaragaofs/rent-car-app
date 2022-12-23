import React from "react";

import JeepImg from "../../../../../assets/images/jeep.png";
import {
  AboutUsContainer,
  CarContainer,
  InfoContainer,
  InfoText,
  Title,
} from "./styles";

export const AboutUs: React.FC = () => {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} alt="jeep-img" />
      </CarContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Our Rental Deals</Title>
        <InfoText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, hic
          iure. Qui, praesentium illo repellat eos molestiae quia. Voluptate
          saepe optio quia quas provident distinctio atque? At laboriosam
          debitis accusamus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nulla et tempora iusto quidem dolorem libero tempore. Cumque
          voluptatum vero deserunt rerum culpa id dolor quibusdam, laboriosam
          harum, amet qui quam?
          lorem
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
};
