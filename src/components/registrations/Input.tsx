import React, { useState } from "react";
import "./registration.css";
import { Applicant } from "./Applicant";

interface cardprops {
    placeholder: string,
    type: string,
    height: string,
    value: string,
    name: string,
    applicant: Applicant,
    setInputValue: (updateAppicant: Applicant) => void,
    id: string;
    isTextField?: boolean
}

export default function Input({
                                  placeholder,
                                  type,
                                  height,
                                  value,
                                  name,
                                  applicant,
                                  setInputValue,
                                  id,
                                  isTextField = false
                              }: cardprops) {
    return (
        <div id={id} className="flex justify-center items-center p-1 bg-transparent borderGradient rounded-2xl">

            {isTextField ?

                <textarea
                    placeholder={placeholder}
                    rows={4}
                    value={value}
                    name={name}
                    onChange={(e) => {
                        setInputValue(({
                            ...applicant,
                            [name]: e.target.value
                        }));
                    }}
                    className={`focus:bg-[#074F57] bg-[#093441] z-20  self-stretch flex-1 outline-none rounded-xl  font-montserrat text-[#C7C7C7] pl-8 py-3 lg:py-4 text-[12px] lg:text-[16px] `}>

                </textarea>

                : <input
                    className={`focus:bg-[#074F57] bg-[#093441] z-20  self-stretch flex-1 outline-none rounded-xl  font-montserrat text-[#C7C7C7] pl-8 py-3 lg:py-4 text-[12px] lg:text-[16px] ${height} `}
                    type={type}
                    value={value}
                    name={name}
                    onChange={(e) => {
                        setInputValue(({
                            ...applicant,
                            [name]: e.target.value
                        }));
                    }}
                    placeholder={placeholder}
                />

            }


        </div>
    );
}
