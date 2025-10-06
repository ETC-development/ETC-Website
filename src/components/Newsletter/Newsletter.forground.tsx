"use client";
import React, { useState } from "react";
import "./newsletter.style.css";
import TextInput from "../utils/TextInput";
import Neurons from "../../../public/assets/newsletter/neurons.svg";
import NewsLetterButton from "./Newsletter.button";
import handleSubmit from "./Newsletter.handler";
import Image from "next/image";
import { Database } from "@/lib/database.types";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";

interface INewsletterProps {
    clubInfo: Database["public"]["Tables"]["club_info"]["Row"];
}

export interface IResponseMessage {
    status: "none" | "error" | "success";
    text: string;
}

export default function NewsletterForground({ clubInfo }: INewsletterProps) {
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<IResponseMessage>({ status: "none", text: "" });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const divStyles = `z-10 sm:max-w-[90%] m-auto bg-black bg-opacity-25 backdrop-blur-sm
     w-full h-[80vh] min-h-[40rem] rounded-[2rem] border border-silver-white p-5 
     text-center flex justify-center overflow-clip bg-cover relative`;

    function getFeedbackAlert() {

        if(!["error", "success"].includes(message.status)) return

        return <div
            className={clsx(message.status === "error"
                ? "bg-[red] p-3 rounded-xl"
                : "bg-[#00FF00] rounded-xl p-3", "flex justify-center items-center gap-2 md:text-xl text-white backdrop-blur-lg bg-opacity-30")}
        >
            {message.status === "error"
                ?
                <FontAwesomeIcon icon={faXmark} className="text-red-500" />
                :
                <FontAwesomeIcon icon={faCheck} className="text-green-500" />
            }
            {message.text}
        </div>;
    }

    return (
        <div className={divStyles}>
            <div
                className="glow-animation object-contain flex-1 absolute z-10 scale-[150%] lg:scale-[150%] bottom-0"
            >
                <Image src={Neurons} alt="neurons"></Image>
            </div>
            <div className="m-auto flex flex-col  justify-evenly w-full h-full">
                <div className="z-20 flex flex-col items-center justify-around gap-10 px-[5%]">
                    <h1>{clubInfo.newsletter_title}</h1>
                    <h2 className="font-bold">{clubInfo.newsletter_subtitle}</h2>
                    <div className={"md:w-10/12"}>
                        <p className={"text-md md:text-2xl"}
                           dangerouslySetInnerHTML={{ __html: clubInfo.newsletter_desc }}></p>
                    </div>
                </div>
                <form className="z-50 flex flex-col justify-around items-center gap-5">
                    <TextInput
                        placeholder={"Enter your email"}
                        type={"email"}
                        name={"newsletter_email"}
                        id={"newsletter_email"}
                        value={email}
                        setInputValue={setEmail}
                    />

                    <NewsLetterButton
                        isLoading={isLoading}
                        onSubmit={handleSubmit({
                            email: email,
                            setEmail: setEmail,
                            setIsLoading: setIsLoading,
                            setMessage
                        })}
                    />

                    {getFeedbackAlert()}
                </form>
            </div>
        </div>
    );
}
