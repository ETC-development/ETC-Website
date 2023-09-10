"use client";
import React, { useState } from "react";
import "./newsletter.style.css";
import TextInput from "../utils/TextInput";
import Neurons from "../../public/assets/newsletter/neurons.svg";
import NewsLetterButton from "./Newsletter.button";
import handleSubmit from "./Newsletter.handler";
import Image from "next/image";
import {motion} from "framer-motion";



export default function NewsletterForground() {
    const [email, setEmail] = useState<string>("test@test.com");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const divStyles =
        `z-10 sm:max-w-[90%] m-auto bg-black bg-opacity-25 backdrop-blur-sm
     w-full h-[80vh] min-h-[40rem] rounded-[2rem] border border-silver-white p-5 
     text-center flex justify-center overflow-clip bg-cover relative`;


    return (
        <div className={divStyles}>
        <motion.div  className="glow-animation object-contain flex-1 absolute z-10 scale-[150%] lg:scale-[150%] bottom-0"
        initial={{ filter: "drop-shadow(0 0 5px #00F18610)" }}
        animate={{
                filter: [
                "drop-shadow(0 0 5px #00F18610)",
                "drop-shadow(0 0 5px #00F18610) drop-shadow(0 0 7px #00F186F0)",
                "drop-shadow(0 0 5px #00F18610)",
                ],
        }}
        transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
        }}>
                <Image src={Neurons} alt="neurons"></Image>
        </motion.div>
            <div className="m-auto flex flex-col  justify-evenly w-full h-full">
                <div className="z-20 flex flex-col justify-around gap-10 px-[5%]">
                    <h1>NewsLetter</h1>
                    <h2 className="font-bold">LET'S STAY IN TOUCH</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <form className="z-50 flex flex-col justify-around items-center gap-5">
                    <TextInput
                        placeholder={"Enter your email"}
                        type={"email"}
                        name={"newsletter_email"}
                        id={"newsletter_email"}
                        setInputValue={setEmail}
                    />
                    <NewsLetterButton isLoading={isLoading} onSubmit={handleSubmit({email: email, setIsLoading: setIsLoading})} />
                </form>
            </div>
        </div>
    );
}
