import Image from "next/image";
import React from "react";

import neuronsEffect from "@/public/neurons-effect.png";
import { CarouselCardProps } from "@/types";

const CarouselCard = ({
                          cardImage,
                          cardDescription,
                          cardTitle
                      }: CarouselCardProps) => {

    return (
        <div
            className="relative w-full md:w-[280px] mx-auto lg:w-[450px] lg:h-[350px] overflow-hidden h-[240px] bg-[#E8E8E84D] rounded-[20px] border__gradient"
        >
            <div className="h-full w-full relative transition-all ease-in duration-[3000ms] top-[-35px] group">
                <Image
                    alt="element"
                    src={neuronsEffect}
                    className={`rotate-180 opacity-50 group-hover:opacity-100`}
                    objectFit="contain"
                    fill
                />
            </div>
            <div className="absolute inset-0 py-[30px] h-full w-full">
                <div className=" mx-auto justify-between items-center px-[0px] flex flex-col ">
                    <div className="relative h-1/4 w-1/2">
                        {cardImage ? (

                            <img
                                alt="logo"
                                src={cardImage}
                                className={"h-full"}
                                // layout="fill"
                                // objectFit="contain"
                            />
                        ) : (
                            <div
                                className="w-full h-full rounded-[20px] py-[20px] px-[20px] text-2xl md:text-3xl flex items-center justify-center font-azonix ">
                                {cardTitle}
                            </div>
                        )}
                    </div>

                    <p className="font-montserrat text-md px-[10px] lg:leading-[24px] leading-[13px] text-white mt-[20px] text-center md:text-xl ">
                        {cardDescription}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CarouselCard;
