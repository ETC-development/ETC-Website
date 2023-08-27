"use client";

import React, { useEffect, useState, useRef } from "react";

// import { Carousel, IconButton } from "@material-tailwind/react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";

import Image from "next/image";

import CarouselCard from "./CarouselCard";
import CarouselCardMinimized from "./CarouselCardMinimized";

import leftArrow from "../../public/left arrow.svg";
import rightArrow from "../../public/Right arrow.svg";

import BgWave from "../../public/BgWave";

import { CarouselSectionProps } from "@/types";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 120,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
    paritialVisibilityGutter: 30,
  },
};

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade]);

const CarouselSection = ({
  sectionTitle,
  sectionData,
  isTopDisplayedOnRight,
}: CarouselSectionProps) => {
  const [highlightedCard, setHighlightedCard] = useState(1);
  // the timer is meant to display the carousel cards starting from the center.

  const leftCustomArrowRef = useRef();
  const rightCustomArrowRef = useRef();

  const moveLeft = () => {
    if (highlightedCard > 0) {
      leftCustomArrowRef?.current?.click();
    }
  };

  const moveRight = () => {
    if (highlightedCard < sectionData.length - 1) {
      rightCustomArrowRef?.current?.click();
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimer(false);
  //   }, 3000);
  // }, []);

  return (
    <div className=" w-full bg-center overflow-hidden relative ">
      <div className="w-screen h-[600px] lg:h-[800px] opacity-30 my-auto relative z-50 pointer-events-none	">
        <BgWave />
      </div>
      <div className="w-full absolute left-0 top-0 flex flex-col py-[30px] lg:py-[50px] px-[10px] 2xl:px-[50px] bg-bg-color">
        <h1 className="font-azonix text-[32px] lg:text-[40px] text-white font-[400] text-center">
          {sectionTitle}
        </h1>

        <div
          className={`flex w-full flex-col lg:mx-auto mt-[30px] lg:mt-[40px] ${
            isTopDisplayedOnRight ? "lg:flex-row-reverse" : "lg:flex-row"
          } lg:justify-between lg:px-[50px]`}
        >
          <div className="relative w-full max-w-[400px] lg:max-w-[500px] mx-auto">
            <Swiper
              navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
              modules={[Navigation]}
              className="mySwiper rounded-xl mx-auto "
              slidesPerView={1}
              autoHeight={true}
              pagination={{ clickable: true, dynamicBullets: true }}
            >
              {sectionData.map((data, index) => (
                <SwiperSlide key={data.cardTitle}>
                  <CarouselCard
                    key={data.cardTitle}
                    isHighlighted={highlightedCard === index}
                    {...data}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <button className="arrow-right cursor-pointer top-2/4 lg:hidden !left-[-10px] absolute  mt-[-5px] -translate-y-2/4">
              <Image src={leftArrow} alt="left arrow" width={30} height={40} />
            </button>
            <button className="arrow-left cursor-pointer top-2/4 lg:hidden !right-[-10px] -translate-y-2/4 absolute  mt-[-5px]">
              <Image
                src={rightArrow}
                alt="right arrow"
                width={30}
                height={40}
              />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center mt-[25px] lg:basis-[50%]">
            <h1 className="font-[400] font-azonix text-transparent lg:text-[40px] text-[24px] bg-clip-text bg-gradient-to-r from-[#00F186] to-[#12D3F1C4]">
              {sectionData[highlightedCard].cardTitle}
            </h1>
            <p className="text-white text-center lg:text-[18px] lg:max-w-[250px] font-montserrat text-[16px] mt-[10px] font-[400]">
              {sectionData[highlightedCard].cardCaption}
            </p>
          </div>
        </div>
        
        <div className="relative w-full  mt-[30px] lg:mt-[50px]  mx-auto">

        <Swiper
          className="mySwiper w-full"
          spaceBetween={30}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <div className="hidden" />
          {sectionData.map((data, index) => (
            <SwiperSlide key={data.cardTitle}>
              <CarouselCardMinimized
                key={data.cardTitle}
                isHighlighted={highlightedCard === index}
                {...data}
                handleClick={() => setHighlightedCard(index)}
              />
            </SwiperSlide>
          ))}
          <div />
        </Swiper>

        <button className="arrow-right cursor-pointer top-2/4 hidden lg:flex !left-[-10px] absolute  mt-[-5px] -translate-y-2/4">
          <Image src={leftArrow} alt="left arrow" width={30} height={40} />
        </button>
        <button className="arrow-left cursor-pointer top-2/4 hidden lg:flex !right-[-10px] -translate-y-2/4 absolute  mt-[-5px]">
          <Image src={rightArrow} alt="right arrow" width={30} height={40} />
        </button>

        </div>
        
      </div>
    </div>
  );
};

export default CarouselSection;
