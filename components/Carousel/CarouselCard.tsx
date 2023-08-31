import Image from "next/image";
import React, { useState } from "react";

import { CarouselCardProps } from "@/types";

const CarouselCard = ({
  cardImage,
  cardDescription,
  CardHoverBackground,
}: CarouselCardProps) => {

  return (
    <div
      className="relative w-full md:w-[280px] mx-auto lg:w-[450px] lg:h-[350px] overflow-hidden h-[240px] bg-[#E8E8E84D] rounded-[20px] border__gradient"
    >
      <div className="h-full w-full relative transition-all ease-in duration-[3000ms] top-[-35px] group">
        <Image
          alt="element"
          src={CardHoverBackground}
          className={`rotate-180 opacity-50 group-hover:opacity-100`}
          objectFit="contain"
          fill
        />
      </div>
      <div className="absolute inset-0 py-[30px] lg:py-[50px] h-full w-full">
        <div className=" mx-auto items-center px-[0px]   flex flex-col ">
          <div className="w-[130px] h-[84px] lg:w-[300px] lg:h-[100px] relative">
            {cardImage ? (
              <Image
                alt="logo"
                src={cardImage}
                layout="fill"
                objectFit="contain"
              />
            ) : (
              <div className="w-full h-full rounded-[20px] py-[20px] px-[20px] bg-[#D9D9D9] flex items-center justify-center font-azonix ">
                Project X
              </div>
            )}
          </div>

          <p className="font-montserrat text-[8px] lg:text-[12px] lg:px-[10px] lg:leading-[24px] leading-[13px] text-white mt-[20px] text-center font-[400] ">
            {cardDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
