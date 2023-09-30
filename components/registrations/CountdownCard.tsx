"use client"
import { useEffect, useState } from "react";

interface ICardContent {
    text: string;
    type: string;
}


const padNumber = (numberStr: string) => {
    const num = +numberStr;

    if(num < 10 && num >= 0)
        return `0${numberStr}`

    return numberStr
}

export default function CountdownCard({ text, type }: ICardContent) {

    const [hydrated, setHydrated] = useState(false)

    useEffect(()=> {
        setHydrated(true)
    }, [])

    if(!hydrated) return <div></div>;

    return (
        <div className={"flex flex-col gap-3 justify-center items-center"}>
            <div
                className={"flex justify-center items-center w-16 h-16 md:w-28 md:h-28 border-4 rounded-2xl border-[#01ecc9] text-xl md:text-5xl text-center font-montserrat font-semibold"}>
                <span className={"align-middle"}>{padNumber(text)}</span>
            </div>

            <div className={"font-montserrat text-sm md:text-xl"}>
                {type}
            </div>
        </div>);
}