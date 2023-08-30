"use client";

import React, { useEffect, useState, useRef } from "react";

import { Carousel, IconButton } from "@material-tailwind/react";
import Image from "next/image";

import CarouselCard from "./CarouselCard";
import CarouselCardMinimized from "./CarouselCardMinimized";

import CustomLeftArrow from "../utils/CustomLeftArrow";
import CustomRightArrow from "../utils/CustomRightArrow";

import leftArrow from "../../public/left arrow.svg";
import rightArrow from "../../public/Right arrow.svg";

import MultiCardCarousel from "react-multi-carousel";

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

const CarouselSection = ({
  sectionTitle,
  sectionData,
  isTopDisplayedOnRight,
}: CarouselSectionProps) => {
  const [highlightedCard, setHighlightedCard] = useState(1);
  // the timer is meant to display the carousel cards starting from the center.
  const [timer, setTimer] = useState(true);

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

  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 3000);
  }, []);

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
          <Carousel
            navigation={() => null}
            autoplay={timer ? true : false}
            autoplayDelay={2000}
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={() => {
                  moveLeft();
                  handlePrev();
                }}
                className={`${
                  highlightedCard === 0 ? "hidden" : "flex"
                } !absolute top-2/4 lg:hidden !left-[-10px] hover:bg-transparent active:bg-transparent -translate-y-2/4`}
              >
                <Image
                  src={leftArrow}
                  alt="left arrow"
                  width={30}
                  height={40}
                />
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={() => {
                  moveRight();
                  handleNext();
                }}
                className={`${
                  highlightedCard === sectionData.length - 1 ? "hidden" : "flex"
                } !absolute top-2/4 lg:hidden !right-[-10px] hover:bg-transparent active:bg-transparent -translate-y-2/4`}
              >
                <Image
                  src={rightArrow}
                  alt="right arrow"
                  width={30}
                  height={40}
                />
              </IconButton>
            )}
            transition={{ duration: 0.5 }}
            className="rounded-xl lg:hidden  mx-auto w-full max-w-[400px] lg:max-w-[500px]"
          >
            {sectionData.map((data, index) => (
              <CarouselCard
                key={data.cardTitle}
                isHighlighted={highlightedCard === index}
                {...data}
              />
            ))}
          </Carousel>

          <div className="hidden lg:flex rounded-xl  mx-auto w-full max-w-[400px] lg:max-w-[500px]">
            <CarouselCard
              key={sectionData[highlightedCard].cardTitle}
              {...sectionData[highlightedCard]}
            />
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

        <MultiCardCarousel
          arrows={true}
          additionalTransfrom={0}
          autoPlay={timer ? true : false}
          customRightArrow={
            <CustomRightArrow
              ref={rightCustomArrowRef}
              handleClick={() =>
                setHighlightedCard((prev) =>
                  prev === sectionData.length - 1 ? prev : prev + 1
                )
              }
            />
          }
          customLeftArrow={
            <CustomLeftArrow
              ref={leftCustomArrowRef}
              handleClick={() =>
                setHighlightedCard((prev) => (prev === 0 ? prev : prev - 1))
              }
            />
          }
          className="w-full mx-auto mt-[30px] lg:mt-[50px] justify-between"
          responsive={responsive}
          itemClass="image-item"
          partialVisbile={false}
        >
          <div className="hidden" />
          {sectionData.map((data, index) => (
            <CarouselCardMinimized
              key={data.cardTitle}
              isHighlighted={highlightedCard === index}
              {...data}
              handleClick={() => setHighlightedCard(index)}
            />
          ))}
          <div />
        </MultiCardCarousel>
      </div>
    </div>
  );
};

export default CarouselSection;
