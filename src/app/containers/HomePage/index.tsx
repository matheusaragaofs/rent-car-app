import React from "react";
import { Marginer } from "../../../utils/Marginer";
import { BookCard } from "../../components/BookCard";
import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { AboutUs } from "./components/AboutUs";
import { BookingSteps } from "./components/BookingSteps";
import { TopCars } from "./components/TopCars";
import TopSection from "./components/TopSection";
import { PageContainer } from "./styles";

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookCard />
      <Marginer direction="vertical" margin="10em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="5em" />
      <AboutUs />
      <Marginer direction="vertical" margin="5em" />
      <TopCars/>
      <Footer/>
    </PageContainer>
  );
}
