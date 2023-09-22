"use client";

import Image from "next/image";
import back from "../../public/assets/registration/BackBtn.svg";
import Link from "next/link";
import RegistrationForm from "@/components/registrations/RegForm";
import StayTuned from "@/components/registrations/StayTuned";
import { useEffect, useState } from "react";


interface ITimeLeft {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
}


const openDayDate = new Date(Date.UTC(2023, 9, 7));


const calculateTimeLeft = (date: any): ITimeLeft | {} => {
    let difference = date - +new Date();

    let timeLeft: ITimeLeft | {} = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)).toString(),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24).toString(),
            minutes: Math.floor((difference / 1000 / 60) % 60).toString(),
            seconds: Math.floor((difference / 1000) % 60).toString()
        };
    }

    return timeLeft;
};


export default function Main() {


    const [timeLeft, setTimeLeft] = useState<ITimeLeft | {}>(calculateTimeLeft(openDayDate));

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(openDayDate));
        }, 1000);
    });

    return (
        <form
            className="flex py-14 lg:pt-24 px-7 gap-10 bg-[#00282A] flex-col w-[90%] lg:w-[80%] rounded-3xl z-10 relative">
            <Link
                href="/"
            >
                <Image
                    className=" absolute top-4 left-4 md:w-9"
                    src={back}
                    alt=""
                >
                </Image>
            </Link>

            {Object.keys(timeLeft).length === 0 ? <RegistrationForm /> :
                <StayTuned days={(timeLeft as ITimeLeft).days} seconds={(timeLeft as ITimeLeft).seconds}
                           minutes={(timeLeft as ITimeLeft).minutes} hours={(timeLeft as ITimeLeft).hours} />}
        </form>
    );
}
