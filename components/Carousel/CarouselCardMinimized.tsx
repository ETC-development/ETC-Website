import React from "react";

import Image from "next/image";
import { MinmizedCarouselCardProps } from "@/types";

const CarouselCardMinimized = ({
  cardImage,
  cardTitle,
  isHighlighted,
}: MinmizedCarouselCardProps) => {
  
  return (
    <div className="flex flex-col items-center">
      <div className="w-[110px] flex lg:w-[300px] 2xl:w-[450px] lg:h-[150px] 2xl:h-[200px] justify-center items-center h-[62px] bg-[#E8E8E84D] rounded-[20px] border__gradient">
        {cardImage ? (
          <div className="w-[45px] h-[30px] lg:w-[130px] lg:h-[100px] relative">
            <Image
              alt="logo"
              src={cardImage}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ) : (
          <div className="w-[80%] rounded-[20px] h-[80%] py-[20px] px-[20px] bg-[#D9D9D9] flex items-center text-[10px] lg:text-[15px] justify-center font-azonix " > {cardTitle} </div>
        )}
      </div>

      <h1 className="text-white text-center font-azonix text-[12px] lg:text-[15px] 2xl:text-[18px] font-[400] mt-[10px] max-w-[67px] lg:max-w-full ">
        {cardTitle}
      </h1>

      <div className={`w-[100px] lg:w-[300px] 2xl:w-[450px] hidden lg:flex h-[5px] bg-white mt-[15px] rounded-[200px] ${!isHighlighted ? "bg-[#FFFFFF4D]" :"bg-[#ffffff99]"}`} />
    </div>
  );
}

export default CarouselCardMinimized;
