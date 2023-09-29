"use client"
import ManagerContact from "./ManagerContact";

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./team.css";

interface cardprops {
    name: string,
    position: string,
    year: string,
    desc: string,
    email: string,
    img: string,
    github: string;
    linkedin: string;
    // isActive : boolean,
}

export default function TeamCard({
                                     name,
                                     position,
                                     year,
                                     desc,
                                     email,
                                     img,
                                     github,
                                     linkedin
                                 }: cardprops) {

    const [flip, setFlip] = useState(false);
    const isPhoneView = () => {
        return window.innerWidth < 768;
    };

    const handleClick = () => {
        if (isPhoneView()) {
            setFlip(!flip);
        }
    };
    return (<ReactCardFlip
            isFlipped={flip}
            flipDirection="horizontal">
            <div className="team-card relative
        flex flex-col items-center gap-10 md:gap-3 w-[324px] h-[400px] md:h-fit rounded-[25px] border-[0.5px] p-3"
                 onClick={handleClick}
            >

                <img
                    className="rounded-full w-[130px] h-[130px] "
                    src={img}
                    alt=""
                />

                <div className="h-full flex flex-col items-center relative">
                    <div className="flex flex-col items-center justify-center gap-4  ">

                        <p className="text-center text-white  text-[14px] font-normal px-4 font-comfortaa hidden md:flex">
                            {desc}
                        </p>

                        <p className="  md:hidden text-center font-azonix text-[14px] font-normal manager_title ">
                            {position}
                        </p>
                        <div className="phone-manager-card flex flex-col font-montserrat gap-4">
                            <div className="name text-center">
                                <p className=" md:hidden text-white text-[24px] ">
                                    {name}
                                </p>
                            </div>
                            <div
                                className="manager-year-talent  flex flex-col md:hidden items-center justify-center text-white text-[16px] gap-1 ">
                                {/*<p className="talent">*/}
                                {/*    {talent}*/}
                                {/*</p>*/}
                                <p className="year">
                                    {year}
                                </p>
                            </div>
                        </div>


                        <div className="contact bottom-0 absolute md:relative">
                            <ManagerContact githubLink=" " emailLink={email} linkedinLink=" " />
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`
           flex flex-col items-center justify-center gap-[20px] w-[324px] h-[400px] shrink-0 rounded-[25px] border borderr-[#C3C3C3] bg-bg-color 
           `}
                onClick={() => setFlip(!flip)}
            >
                <div className="w-full h-full  bg-teamCard rounded-[25px] flex flex-col items-center justify-center">
                    <p className="text-center font-montserrat text-[18px] font-normal text-white p-3">
                        {desc}
                    </p>
                </div>
            </div>

        </ReactCardFlip>
    );

}


