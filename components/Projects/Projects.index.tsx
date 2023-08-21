"use client";

import { ProjectCardsData } from "@/constants";
import CarouselSection from "../Carousel/CarouselSection.index";

import { ThemeProvider } from "@material-tailwind/react";

export default function Projects() {
  return (
    <ThemeProvider>
      <CarouselSection
        isTopDisplayedOnRight={true}
        sectionTitle="Our Projects"
        sectionData={ProjectCardsData}
      />
    </ThemeProvider>
  );
}
