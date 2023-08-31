"use client";

import { useState, useEffect } from "react";
import Button2 from "../utils/Button2";
import Button1 from "../utils/Button1";
import MoreNavbar from "../utils/MoreNavbar";
import Cross from "../utils/cross";

export default function Navbar() {
    const [isHidden, setIsHidden] = useState(true);
    const [scrollingUp, setScrollingUp] = useState(false);

    const toggleHidden = () => {
        setIsHidden(!isHidden);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrollingUp(true);
            } else {
                setScrollingUp(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`
    ${scrollingUp ? "bg-bg-color border-b mt-0" : "bg-bg-color md:bg-transparent border-b md:border-none lg:mt-2"}
    top-0 w-screen fixed md:py-2 z-50 px-5 py-4 lg:px-14 border-silver-white/60 lg:flex lg:items-center lg:justify-between 
    `}
        >
            <div className="btn-ellipse-blur hover-glow left-0 bg-cyan absolute"></div>
            <div className=" btn-ellipse-blur hover-glow right-[40%] bg-cyan absolute"></div>
            <div className="btn-ellipse-blur hover-glow right-0 lg:right-[35%] bg-cyan absolute"></div>
            <div className="btn-ellipse-blur hover-glow left-[25%] bg-cyan absolute"></div>

            <div className="flex justify-between items-center relative">
                <div
                    className={`
         ${scrollingUp ? "flex" : "flex md:hidden"}
          gap-[10px] items-center relative group
         `}
                >
                    <img
                        className="w-[50px] h-[50px] px-2 lg:w-[60px] lg:h-[60px]"
                        src={"/Logo.svg"}
                        alt=""
                    />
                    <img
                        className=" w-[151px] h-[40px] lg:w-[161px] lg:h-[60px]"
                        src={"/logoWord.svg"}
                        alt=""
                    />
                </div>

                <div
                    onClick={toggleHidden}
                    className={` relative
        lg:hidden m-2 h-full grid grid-cols-6 w-full
        `}
                >
                    <div className={"col-end-8 p-2"}>
                        {isHidden ? <MoreNavbar /> : <Cross color="#DADBDD" />}
                    </div>
                </div>
            </div>
            <div
                className={`flex lg:flex flex-col lg:flex-row justify-between lg:w-[60%] gap-2
       ${isHidden ? "hidden" : ""}
       `}
            >
                <Button2 text={"Home"} isActive={false} />
                <Button2 text={"Events"} isActive={false} />
                <Button2 text={"Projects"} isActive={false} />
                <Button2 text={"Contacts"} isActive={false} />
                <div className="hidden lg:flex ">
                    <Button1 onSubmit={() => {}} text={"Register Now"} />
                </div>
            </div>
        </div>
    );
}
