"use client";

import CarouselSection from "../Carousel/CarouselSection.index";
import { EventCardsData } from "@/constants";

export default function Events() {
  return (
      <CarouselSection
        isTopDisplayedOnRight={false}
        sectionTitle="Events"
        sectionData={EventCardsData}
      />
  );
}
