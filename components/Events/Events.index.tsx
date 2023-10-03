"use client";

import CarouselSection from "../Carousel/CarouselSection.index";
import { EventCardsData } from "@/constants";
import { Database } from "@/lib/database.types";



interface IEventsProps {
    events: Database["public"]["Tables"]["events"]["Row"][];
}

export default function Events({events}: IEventsProps) {
  return (
      <CarouselSection
        isTopDisplayedOnRight={false}
        sectionTitle="Events"
        items={events}
        // sectionData={EventCardsData}
      />
  );
}
