"use client";

import Image from "next/image";
import logo from "../../public/assets/hero/logo.webp";
import tech from "../../public/assets/hero/tech.svg";

import "./hero.css";

import HeroBot from "./Hero.Bot";
import HeroDesc from "./Hero.Desc";
import { useRouter } from "next/navigation";

export default function Hero() {


    const router = useRouter();

    const gotoRegPage = () => {
        router.push("/registrations");
    };


    return (
        <div id="Home" className="hero z-0 mt-5 overflow-x-hidden overflow-y-visible h-fit w-full flex justify-center">
            <div className="hero-container p-[1px] w-full max-h-full lg:max-w-[95%] xl:max-w-[95%]">
                <div className="hero-card w-full max-h-full pl-2 pr-2  pt-5 pb-6 md:pb-4 sm:pl-5 md:pr-0 ">
                    <div className="logo flex top-0 left-0 items-center gap-4 sm:gap-4 ml-4 md:ml-0 w-fit">
                        <Image
                            className="logo w-[50px] md:w-[70px]  lg:w-[95px]"
                            src={logo}
                            alt=""
                        ></Image>
                        <div className="etc-logo font-azonix text-[20px] md:text-[25px] lg:text-[35px]">
                            ETC Club
                        </div>
                    </div>
                    <div className="hero-elements top-auto flex flex-col gap-2 md:gap-0 items-center  md:ml-4 lg:ml-12  md:flex-row lg:justify-between relative">
                        <div className="image-tech w-[800px] md:w-[600px] lg:w-[800px] bottom-0 rotate-90 md:rotate-0 sm:right-0 absolute">
                            <Image className="tech" src={tech} alt=""></Image>
                        </div>
                        <HeroDesc onRegBtnClick={gotoRegPage}></HeroDesc>

                        <HeroBot></HeroBot>
                    </div>
                </div>
            </div>
        </div>
    );
}
