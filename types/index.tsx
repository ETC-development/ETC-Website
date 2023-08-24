import {ArrowProps} from "react-multi-carousel/lib/types";

export interface CarouselCardProps {
    CardHoverBackground: any;
    cardImage: any;  
    cardDescription: string;
    cardTitle: string;
    cardCaption: string;
    isHighlighted?: boolean;
}

export interface MinmizedCarouselCardProps {
    cardImage: any | undefined;  
    cardTitle: string;
    isHighlighted?: boolean;
    handleClick: () => void;
}

export interface CarouselArrowProps extends ArrowProps {
    handleClick: () => void;
}

export interface CarouselSectionProps {
    sectionTitle: string;
    sectionData: CarouselCardProps[];
    isTopDisplayedOnRight: boolean;
}