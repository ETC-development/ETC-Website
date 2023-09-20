"use client";

import Image from "next/image";
import Input from "./Input";
import Option from "./Option";
import bot1 from "../../public/assets/registration/Bot1.svg"
import bot1P from "../../public/assets/registration/Bot1P.svg"
import bot2 from "../../public/assets/registration/Bot2.svg"
import bot2P from "../../public/assets/registration/Bot2P.svg"
import bot3 from "../../public/assets/registration/Bot3.svg"
import bot3P from "../../public/assets/registration/Bot3P.svg"
import bot4 from "../../public/assets/registration/Bot4.svg"
import bot4P from "../../public/assets/registration/Bot4P.svg"
import discord from "../../public/assets/registration/Discord.svg"

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination , Navigation} from "swiper/modules";
import { Departements } from "@/constants";
import "./registration.css"
import "swiper/css";
import "swiper/css/pagination";

export default function Main(){

    return (
       <form className="flex py-14 lg:pt-24 px-7 gap-10 bg-[#00282A] flex-col w-[90%] lg:w-[80%] rounded-3xl z-10 relative">
            <Image 
                className="animationReg hidden lg:flex absolute top-10 right-6 "
                src={bot1}  
                alt=""
            >
            </Image>
        <div className="flex lg:justify-center lg:items-center lg:self-stretch">
            <Image 
                className="animationReg lg:hidden"
                src={bot1P}  
                alt=""
            >
            </Image>
            <div className=" relative flex flex-col self-stretch px-5 gap-5 items-center">
                <div className="absolute bgGradient top-0 bottom-0 "></div>
                <p className="text-white font-azonix text-[34px] lg:text-[54px] drop-shadow-md">
                  Join us !
                </p>
                <p className=" text-white text-center font-montserrat text-[15px] lg:text-[20px] max-w-xs font-semibold">
                Join tens of bright minded people 
                and let the fun begin ! 
                </p>
            </div>

        </div>
        <div className="flex flex-col gap-4 self-stretch lg:relative">
            <div className="w-[2px] z-20 h-[105%] bg-white absolute  left-9 top-8 hidden lg:flex"></div>
            <p className=" lg:hidden text-white text-left font-montserrat text-[22px] lg:text-[30px]">
             1 <span className=" font-bold">  Personal information</span>
            </p>
            <div className=" lg:flex gap-3 items-center hidden text-white text-left font-montserrat text-[22px] lg:text-[30px]">
             1 <div className=" ml-1 w-5 h-5 bg-white text-white rounded-full"></div> <span className=" font-bold"> Personal information</span>
            </div>
            <div className="flex flex-col gap-4 relative">
                <Image 
                    src={bot2}  
                    alt=""
                    className=" absolute top-10 left-[-30px] animationReg hidden z-30 lg:flex"
                >
                </Image>
                <div className="flex flex-col gap-4 lg:pl-48 lg:pr-12 ">
                <Input placeholder="Full name *" type="text" height="h-auto"/>
                <Input placeholder="School’s email *" type="email" height="h-auto"/>
                <Option placeholder="Level * " options={["1" , "2"]}/>
                <div className='flex justify-center items-center p-1 bg-transparent borderGradient rounded-2xl'>
                    <div
                        className="flex items-center justify-center gap-4 bg-[#093441] z-20  self-stretch flex-1 rounded-xl  font-montserrat text-[#C7C7C7] pl-8 py-3 text-[12px]  lg:text-[16px] ">
                        <Image 
                        src={discord}  
                        alt=""
                        className=" w-9"
                        >
                        </Image>
                        Connect with your Discord Account

                    </div>
                </div>
                <Input placeholder="Tell us more about yourself" type="text" height="h-[120px]"/>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-4 self-stretch relative">
        <div className="w-[2px] z-20 h-[105%] bg-white absolute  left-9 top-8 hidden lg:flex"></div>
            <Image 
                src={bot2P}  
                alt=""
                className=" absolute top-10 right-[-40px] animationReg lg:hidden"
            >
            </Image>
            <Image 
                src={bot3P}  
                alt=""
                className=" absolute bottom-60 right-[-40px] z-30 animationReg lg:hidden"
            >
            </Image>
            <Image 
                src={bot3}  
                alt=""
                className=" absolute right-10 top-10 z-30 animationReg hidden lg:flex"
            >
            </Image>
            <p className=" lg:hidden text-white text-left font-montserrat text-[22px] lg:text-[30px]">
             2 <span className=" font-bold">  Departement Orientation </span>
            </p>
            <div className=" lg:flex gap-2 items-center hidden text-white text-left font-montserrat text-[22px] lg:text-[30px]">
             2 <div className=" w-5 h-5 bg-white text-white rounded-full"></div> <span className=" ml-1 font-bold">  Departement Orientation</span>
            </div>
            <div>
            <Swiper
                slidesPerView={1}
                centeredSlides={true}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true }}
                modules={ [Pagination , Navigation]}
               className="my-custom-swiper lg:!w-[45%]"
                 
                >
                {Departements.map((department, index) => (
                    <SwiperSlide className="!flex !items-center !justify-center swiper-slide-team ">
                        <div className="flex items-center flex-col gap-5 bg-[#093441] rounded-[30px] p-5 w-[260px] lg:w-[320px] my-10">
                            <p className=" w-32 font-montserrat text-center text-white text-[16px] font-bold">
                                {department.DepartementName}
                            </p>
                            <p className="font-montserrat text-center text-white/70 text-[14px] ">
                                {department.desc}
                            </p>
                        </div>
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
            <div className="flex flex-col gap-4 lg:pr-20 lg:pl-32 ">
                <p className=" font-montserrat text-white text-[18px] lg:text-[20px] font-medium text-left">
                 . Please indicate your departement prefreences
                </p>
                <Option placeholder="First Choice * " options={["1" , "2"]}/>
                <p className=" font-montserrat text-white text-[14px] lg:text-[16px] font-medium text-left">
                 . What are the reasons behind your first choice ? *
                </p>
                <Input placeholder="Your answer here" type="email" height="h-auto"/>

                <Option placeholder="Second Choice * " options={["1" , "2"]}/>
                <p className=" font-montserrat text-white text-[14px] lg:text-[16px] font-medium text-left">
                 . What are the reasons behind your second choice ? *
                </p>
                <Input placeholder="Your answer here" type="email" height="h-auto"/>

                <Option placeholder="Third Choice * " options={["1" , "2"]}/>
                <p className=" font-montserrat text-white text-[14px] lg:text-[16px] font-medium text-left">
                 . What are the reasons behind your third choice ? *
                </p>
                <Input placeholder="Your answer here" type="email" height="h-auto"/>


                <p className=" font-montserrat text-white text-[18px] lg:text-[20px] font-medium text-left">
                 . Why should we choose you over the other applicants ?
                </p>
                <Input placeholder="Your answer here" type="email" height="h-[160px]"/>

                <p className=" font-montserrat text-white text-[18px] lg:text-[20px] font-medium text-left">
                 . Drop your portfolio or Github here and let us see your work !
                </p>
                <Input placeholder="Your answer here" type="email" height="h-auto"/>


              
            </div>
        </div>
        <div className=" flex items-end  justify-around lg:justify-end lg:pt-10 ">
            <Image 
                className="animationReg lg:hidden"
                src={bot4P}  
                alt=""
            >
            </Image>
            <Image 
                className="animationReg hidden lg:flex absolute bottom-10 left-6 z-30"
                src={bot4}  
                alt=""
            >
            </Image>
            <button 
            className=" px-6 lg:px-8 py-4 lg:py-6 rounded-2xl text-white font-montserrat text-[16px] lg:text-[24px] font-bold bg-[#093441] "
            type="submit">
                Submit now !
            </button>
        </div>

       </form>
    );
}
