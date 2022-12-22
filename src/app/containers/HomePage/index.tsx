import React from "react";
import Navbar from "../../components/Navbar";
import TopSection from "./components/TopSection";
import { PageContainer } from "./styles";

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection/>
    </PageContainer>
  );
}
