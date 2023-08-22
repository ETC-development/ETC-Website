"use client";

import { useState } from "react";
import "./buttons.css";

interface ButtonInterface {
    text: string;
    isActive: boolean;
}

export default function Button2({ text, isActive }: ButtonInterface) {
    const [active, setActive] = useState(isActive);

    return (
        <button
            onClick={() => {
                setActive(!active);
            }}
            className=" relative bg-[#0C0A00] px-8 py-2 font-comfortaa font-bold text-silver-white rounded-full cursor-pointer overflow-hidden group"
        >
            <div
                className={`${
                    !active ? "bg-none" : "bg-green"
                } btn-ellipse-blur left-0 right-0 group-hover:bg-green !w-16`}
            ></div>
            <div
                className={`${
                    !active && "hidden"
                } absolute left-0 right-0 bottom-0 m-auto w-1/2 rounded-full h-[1.5px] bg-gradient-to-r from-cyan to-green`}
            ></div>
            <p className="relative text-md ">{text}</p>
        </button>
    );
}
