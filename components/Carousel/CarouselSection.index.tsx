"use client";

import React, { useState } from "react";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Controller, Pagination, Scrollbar, A11y, EffectFade } from "swiper/modules";

import Image from "next/image";

import CarouselCard from "./CarouselCard";
import CarouselCardMinimized from "./CarouselCardMinimized";

import leftArrow from "../../public/left arrow.svg";
import rightArrow from "../../public/Right arrow.svg";

import { CarouselSectionProps } from "@/types";

import "./carousel.css";

SwiperCore.use([Navigation, Scrollbar, A11y, EffectFade]);

const CarouselSection = ({
    sectionTitle,
    sectionData,
    isTopDisplayedOnRight,
}: CarouselSectionProps) => {
    const [highlightedCard, setHighlightedCard] = useState(1);
    const [firstSwiper, setFirstSwiper] = useState<SwiperCore>();
    const [secondSwiper, setSecondSwiper] = useState<SwiperCore>();

    return (
        <div className=" w-full bg-center overflow-hidden relative ">
            <div className="w-screen h-[600px] lg:h-[800px] opacity-30 my-auto relative z-50 pointer-events-none	">
                {/* <BgWave /> */}
            </div>
            <div className="w-full absolute left-0 top-0 flex flex-col py-[30px] lg:py-[50px] px-[10px] 2xl:px-[50px] bg-transparent">
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
                            navigation={{
                                nextEl: `.arrow-left-${sectionTitle}`,
                                prevEl: `.arrow-right-${sectionTitle}`,
                            }}
                            modules={[Controller, Navigation]}
                            slidesPerView={1}
                            onSwiper={setFirstSwiper}
                            controller={{ control: secondSwiper }}
                            spaceBetween={30}
                            initialSlide={1}
                            effect="fade"
                            className="w-[80%] md:w-full"
                            fadeEffect={{
                                crossFade: true,
                            }}
                            autoHeight={true}
                        >
                            {sectionData.map((data, index) => (
                                <SwiperSlide key={data.cardTitle} className="">
                                    <CarouselCard
                                        key={data.cardTitle}
                                        isHighlighted={highlightedCard === index}
                                        {...data}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button
                            onClick={() => {
                                setFirstSwiper((swiper) => {
                                    swiper?.slidePrev();
                                    return swiper;
                                });
                            }}
                            className={`.arrow-right-${sectionTitle} cursor-pointer top-2/4 lg:hidden absolute  mt-[-5px] -translate-y-2/4`}
                        >
                            <Image src={leftArrow} alt="left arrow" width={30} height={40} />
                        </button>
                        <button
                            onClick={()=>{
                                setFirstSwiper((swiper) => {
                                    swiper?.slideNext();
                                    return swiper;
                                })
                            }}
                            className={`.arrow-left-${sectionTitle} cursor-pointer top-2/4 lg:hidden right-0 -translate-y-2/4 absolute  mt-[-5px]`}
                        >
                            <Image src={rightArrow} alt="right arrow" width={30} height={40} />
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

                <div className="relative w-full flex justify-center items-center mt-[30px] lg:mt-[50px]  mx-auto">
                    <Swiper
                        onSlideChange={(e) => {
                            setHighlightedCard(e.realIndex);
                        }}
                        className="mySwiper w-full"
                        spaceBetween={15}
                        onSwiper={setSecondSwiper}
                        controller={{ control: firstSwiper }}
                        navigation={{
                            nextEl: `.arrow-left-bottom-${sectionTitle}`,
                            prevEl: `.arrow-right-bottom-${sectionTitle}`,
                        }}
                        slidesPerView={3}
                        slideToClickedSlide={true}
                        modules={[Controller, Navigation]}
                    >
                        <SwiperSlide>
                            {" "}
                            <div></div>{" "}
                        </SwiperSlide>
                        {sectionData.map((data, index) => (
                            <SwiperSlide key={data.cardTitle}>
                                <CarouselCardMinimized
                                    key={data.cardTitle}
                                    isHighlighted={highlightedCard === index}
                                    {...data}
                                    handleClick={() => {
                                        setHighlightedCard(index);
                                        setSecondSwiper((e) => {
                                            e?.slideTo(index);
                                            return e;
                                        });
                                    }}
                                />
                            </SwiperSlide>
                        ))}
                        <SwiperSlide>
                            {" "}
                            <div></div>{" "}
                        </SwiperSlide>
                    </Swiper>

                    <button
                        className={`arrow-right-bottom-${sectionTitle} cursor-pointer top-2/4 hidden lg:flex !left-0 absolute  mt-[-5px] -translate-y-2/4`}
                    >
                        <Image src={leftArrow} alt="left arrow" width={30} height={40} />
                    </button>
                    <button
                        className={`arrow-left-bottom-${sectionTitle} cursor-pointer top-2/4 hidden lg:flex !right-0 -translate-y-2/4 absolute  mt-[-5px]`}
                    >
                        <Image src={rightArrow} alt="right arrow" width={30} height={40} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarouselSection;
