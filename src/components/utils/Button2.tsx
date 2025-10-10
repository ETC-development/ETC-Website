"use client";

import { useState } from "react";
import "./buttons.css";

interface ButtonInterface {
    text: string;
    isActive: boolean;
}

export default function Button2({ text, isActive }: ButtonInterface) {
    const [active, setActive] = useState(isActive);
    const scrollToSection = () => {
        const section = document.getElementById(text);
            if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };

    return (
        <button
            onClick={() => {
                setActive(active);
                scrollToSection();

            }}
            className=" relative bg-[#0C0A00] w-full font-montserrat  text-silver-white rounded-full  cursor-pointer group"
        >
        <div className="btn2-text w-full text-center px-4 py-2">
                <p className=" text-[16px] ">{text}</p>

            </div>

            <div
                className={`${
                    !active ? "bg-none" : "bg-green"
                } btn-ellipse-blur left-0 right-0 group-hover:bg-green !w-16`}
            ></div>
            <div
                className={`${
                    !active && "hidden"
                } absolute left-0 right-0 bottom-0 m-auto w-1/2 rounded-full h-[1.5px] bg-gradient-to-r from-cyan to-green `}
            ></div>

        </button>
    );
}
