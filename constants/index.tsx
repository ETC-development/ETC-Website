import { CarouselCardProps, CarouselSectionProps } from "@/types"

import ensiaHubLogo from "@/public/ensia-hub.svg";
import neuronsEffect from "@/public/neurons-effect.png";
import ETCodeLogo from "@/public/ETCode.svg";

export const ProjectCardsData:CarouselCardProps[] = [
    {
        CardHoverBackground: neuronsEffect ,
        cardImage:  undefined ,
        cardDescription: "Coming Soon",
        cardTitle: "Project X" ,
        cardCaption: "Coming Soon" ,
    },
    {
        CardHoverBackground: neuronsEffect ,
        cardImage:  ensiaHubLogo ,
        cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        cardTitle: "ENSIA HUB" ,
        cardCaption: "A library that contains all of the studying resources used in ENSIA." ,
    },
    {
        CardHoverBackground: neuronsEffect ,
        cardImage:  undefined ,
        cardDescription: "Coming Soon",
        cardTitle: "Project X" ,
        cardCaption: "Coming Soon" ,
    },
    {
        CardHoverBackground: neuronsEffect ,
        cardImage:  undefined ,
        cardDescription: "Coming Soon",
        cardTitle: "Project X" ,
        cardCaption: "Coming Soon" ,
    },
    {
        CardHoverBackground: neuronsEffect ,
        cardImage:  undefined ,
        cardDescription: "Coming Soon",
        cardTitle: "Project X" ,
        cardCaption: "Coming Soon" ,
    }
] 

export const EventCardsData:CarouselCardProps[] = [
    {
        CardHoverBackground: neuronsEffect ,
        cardImage:  undefined ,
        cardDescription: "Coming Soon",
        cardTitle: "Project X" ,
        cardCaption: "Coming Soon" ,
    },
    {
        CardHoverBackground: neuronsEffect ,
        cardImage:  ETCodeLogo ,
        cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        cardTitle: "ETCode" ,
        cardCaption: "Coming Soon" ,
    },
    {
        CardHoverBackground: neuronsEffect ,
        cardImage:  ETCodeLogo ,
        cardDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        cardTitle: "BIT CAMP" ,
        cardCaption: "Coming Soon" ,
    },
    {
        CardHoverBackground: neuronsEffect ,
        cardImage:  undefined ,
        cardDescription: "Coming Soon",
        cardTitle: "Project X" ,
        cardCaption: "Coming Soon" ,
    },
    {
        CardHoverBackground: neuronsEffect ,
        cardImage:  undefined ,
        cardDescription: "Coming Soon",
        cardTitle: "Project X" ,
        cardCaption: "Coming Soon" ,
    },
]  

export const ProjectsSection = {
    sectionTitle: "Our Projects",
    sectionData: ProjectCardsData
}

export const EventsSection = {
    sectionTitle: "Our Events",
    sectionData: EventCardsData
}