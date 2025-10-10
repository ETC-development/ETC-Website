"use client";
import ManagerContact from "./ManagerContact";

import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./team.css";
import Image from "next/image";
import { convertGoogleDriveUrl } from "@/lib/imageUtils";



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
        flex flex-col items-center justify-between md:gap-3 w-[324px] h-[400px] rounded-[25px] border-[0.5px] p-3"
                 onClick={handleClick}
            >

                <div className="w-[130px] h-[130px] flex-shrink-0">
                    {(() => {
                        console.log("🔍 DEBUG - Profile URL:", img);
                        return null;
                    })()}
                    {img ? (
                        <Image
                            src={convertGoogleDriveUrl(img)}
                            alt={`${name} profile`}
                            width={130}
                            height={130}
                            className="w-[130px] h-[130px] rounded-full object-cover"
                            onLoad={() => console.log("✅ Image loaded:", name, convertGoogleDriveUrl(img))}
                            onError={() => console.log("❌ Image failed:", name, convertGoogleDriveUrl(img))}
                        />
                    ) : (
                        <div className="w-[130px] h-[130px] bg-gray-300 rounded-full flex items-center justify-center text-2xl font-medium text-gray-600">
                            {name?.charAt(0)?.toUpperCase() || "?"}
                        </div>
                    )}
                </div>

                <div className="flex flex-col items-center justify-center h-full relative">
                    <div className="flex flex-col items-center justify-center gap-4  ">

                        <p className="text-center text-white text-[14px] font-normal px-4 font-comfortaa hidden md:flex">
                            {desc}
                        </p>

                        <p className="md:hidden text-center font-azonix text-xl leading-3 font-normal manager_title ">
                            {position}
                        </p>
                        <div className="phone-manager-card flex flex-col font-montserrat gap-4">
                            <div className="name text-center">
                                <p className=" md:hidden text-white leading-8 text-[24px] ">
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


                    </div>

                </div>
                <div className="contact bottom-0 md:relative">
                    <ManagerContact githubLink={github} emailLink={email} linkedinLink={linkedin} />
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


