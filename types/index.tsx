import {ArrowProps} from "react-multi-carousel/lib/types";
import { Database } from "@/lib/database.types";

export interface CarouselCardProps {
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
    ref: any;
}

export interface CarouselSectionProps {
    sectionTitle: string;
    isTopDisplayedOnRight: boolean;
    items: Database["public"]["Tables"]["projects"]["Row"][] | Database["public"]["Tables"]["events"]["Row"][]
}