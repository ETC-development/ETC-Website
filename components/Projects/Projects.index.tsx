"use client";

import { ProjectCardsData } from "@/constants";
import CarouselSection from "../Carousel/CarouselSection.index";

export default function Projects() {
  return (
      <CarouselSection
        isTopDisplayedOnRight={true}
        sectionTitle="Our Projects"
        sectionData={ProjectCardsData}
      />
  );
}
