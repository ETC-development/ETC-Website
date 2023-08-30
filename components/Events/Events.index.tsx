"use client";

import { ThemeProvider } from "@material-tailwind/react";

import CarouselSection from "../Carousel/CarouselSection.index";
import { EventCardsData } from "@/constants";

export default function Events() {
  return (
    <ThemeProvider>
      <CarouselSection
        isTopDisplayedOnRight={false}
        sectionTitle="Our Events"
        sectionData={EventCardsData}
      />
    </ThemeProvider>
  );
}
