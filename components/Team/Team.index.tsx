"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore from "swiper";
import "./team.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation, Controller} from "swiper/modules";
import TeamCard from "./TeamCard";

SwiperCore.use([EffectCoverflow, Navigation]);
export default function Team() {
    const handleChange = () => {
        const slide = document.getElementById("slide");
        slide?.classList.add("fade");
    };
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const managers = [
        {
            name: "Salah Eddine Makdour",
            position: "President",
            talent: "Backend & FrontEnd Developer",
            year: "3rd year student at ENSIA",
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.",
            email: "Salah Eddine Makdour",
            img: "/salah.jpeg",
        },
        {
            name: "Nesrine Abdelhak",
            position: "HR Manager",
            talent: "Backend & FrontEnd Developer",
            year: "3rd year student at ENSIA",
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.",
            email: "Salah Eddine Makdour",
            img: "/nesrine.jpeg",
        },
        {
            name: "Marouane Oulad Ali",
            position: "Communication Manager",
            talent: "Backend & FrontEnd Developer",
            year: "3rd year student at ENSIA",
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.",
            email: "Salah Eddine Makdour",
            img: "./mar1.jpeg",
        },
        {
            name: "Lyes Hajar",
            position: "Design Manager",
            talent: "UI/UX Designer",
            year: "2nd year student at ENSIA",
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.",
            email: "Salah Eddine Makdour",
            img: "/ilyes.png",
        },
        {
            name: "Hamza dia",
            position: "Marketing Manager",
            talent: "Backend & FrontEnd Developer",
            year: "2nd year student at ENSIA",
            desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.",
            email: "Salah Eddine Makdour",
            img: "/hamza.jpeg",
        },
    ];
    const activeManager = managers[activeSlideIndex];
    const [thirdSwiper, setThirsSwiper] = useState<SwiperCore>();

    return (
        <div className="justify-center w-screen py-9 flex flex-col items-center  gap-12 relative" id="Team">
            <p className="text-white font-azonix text-3xl md:text-6xl font-normal ">
                Managers
            </p>

            <div className="flex w-full">
                <div className="flex items-center w-full md:w-[72%] justify-center relative">
                    <div className="team-bg border w-[250px] h-[250px] right-0 left-0 m-auto rounded-full md:w-[435px] md:h-[435px] opacity-80 bg-[#00B1E5] blur-[250px] absolute"></div>
                    <Swiper
                        modules={[Controller]}
                        onSwiper={setThirsSwiper}
                        controller={{ control: thirdSwiper }}
                        onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
                        initialSlide={2}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        loop={false}
                        coverflowEffect={
                                {
                                        rotate:0,
                                        depth:100,
                                        stretch:0,
                                        slideShadows: true,
                                        modifier:7
                                }
                        }
                        navigation={{
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }}
                        className="swiper_container w-full md:w-[80%] md:!m-0  "
                    >
                        {managers.map((content, index) => (
                            <SwiperSlide className="!w-auto swiper-slide-team" key={index}>
                                <TeamCard
                                    // isActive={index === activeSlideIndex}
                                    {...content}
                                />
                            </SwiperSlide>
                        ))}

                        <div className="slider-controler ">
                            <div className="swiper-button-prev slider-arrow after:hidden ">
                                <img src={"/previous.svg"} alt="" className="" />
                            </div>
                            <div className="swiper-button-next slider-arrow after:hidden">
                                <img src={"/next.svg"} alt="" className="" />
                            </div>
                        </div>
                    </Swiper>
                </div>

                <div
                    className="hidden flex-grow md:flex flex-col items-center justify-center text-center gap-[10px] mr-10"
                    id="slide"
                    onChange={handleChange}
                >
                    <p className="text-center font-azonix md:text-[35px] font-normal manager_title ">
                        {activeManager.position}
                    </p>
                    <p className="text-white text-[28px] font-montserrat ">{activeManager.name}</p>
                    <div className="flex flex-col text-[14px] text-gray-300 font-montserrat">
                       <div> {activeManager.talent}</div>
                       <div> {activeManager.year}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
