"use client";

import { ProjectCardsData } from "@/constants";
import CarouselSection from "../Carousel/CarouselSection.index";
import { Database } from "@/lib/database.types";

interface IProjectsProps {
    projects: Database["public"]["Tables"]["projects"]["Row"][];
}

export default function Projects({projects}: IProjectsProps) {
  return (
      <CarouselSection
        isTopDisplayedOnRight={true}
        sectionTitle="Projects"
        sectionData={ProjectCardsData}
      />
  );
}
