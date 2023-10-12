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
                <div className=" mx-auto items-center px-[0px] flex flex-col h-full">
                    <div className="relative h-2/4 md:h-2/4 w-3/4 flex justify-center">
                        {cardImage ? (
                            <Image
                                alt="logo"
                                src={cardImage}
                                className={"left-0 right-0"}
                                // width={30}
                                // height={30}
                                objectFit="contain"
                                fill
                            />
                        ) : (
                            <div
                                className="w-full h-full rounded-[20px] py-[20px] px-[20px] text-2xl md:text-5xl flex items-center justify-center text-center font-azonix ">
                                {cardTitle}
                            </div>
                        )}
                    </div>

                    <div className={"flex h-3/4 items-center justify-center"}>
                        <p className="font-montserrat text-md px-[10px] lg:leading-[24px] leading-[13px] text-white text-center md:text-xl ">
                            {cardDescription}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselCard;