import React from "react";
import { Marginer } from "../../../utils/Marginer";
import { BookCard } from "../../components/BookCard";
import Navbar from "../../components/Navbar";
import { BookingSteps } from "./components/BookingSteps";
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
    </PageContainer>
  );
}
