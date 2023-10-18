"use client"
import RegistrationTitle from "@/components/registrations/RegistrationTitle";
import CountdownCard from "@/components/registrations/CountdownCard";
import { useEffect, useState } from "react";
import bot1P from "@/public/assets/registration/Bot1P.svg";
import Image from "next/image";



export default function RegClosed() {



    return (
        <div className={"flex flex-col items-center gap-8"}>

            <Image
                className="animationReg absolute hidden sm:block sm:w-32 sm:left-2 md:left-4 xl:left-6 md:w-40 xl:w-72"
                src={bot1P}
                alt=""
            >
            </Image>

            <RegistrationTitle title={"Registrations"} subtitle={"Are closed :("} />
            <div className={"flex justify-center items-center gap-1 md:gap-4"}>

            </div>

            <p className=" text-white text-center font-montserrat text-[15px] lg:text-[20px] max-w-xs font-semibold">
                If you have already registered, we'll send you a confirmation email very soon :)
            </p>
        </div>
    )
}