"use client";
import React, { useRef } from "react";
import Frame from "../../public/assets/newsletter/Frame.svg";
import Frame1 from "../../public/assets/newsletter/Frame(1).svg";
import Frame2 from "../../public/assets/newsletter/Frame(2).svg";
import Frame3 from "../../public/assets/newsletter/Frame(3).svg";
import { motion, useScroll, useTransform } from "framer-motion";

export default function NewsletterBackground() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const translateY = useTransform(scrollYProgress, [-1, 1], [-100, 100], { clamp: false });

    return (
        <div className="h-full w-full absolute bottom-0 right-0" draggable={false}>
            <motion.div ref={ref} style={{ translateY: translateY }} viewport={{ once: true }}>
                <div className="elipse" draggable={false}></div>
                <img
                    src={Frame3.src}
                    className="w-[15rem] md:w-[30%] glow-animation absolute top-10t lg:right-[0%] right-[-10%]"
                    draggable={false}
                />
                <img
                    src={Frame1.src}
                    className="w-[15rem] md:w-[30%]  absolute top-20 lg:left-[1%] left-[-20%]"
                    draggable={false}
                />
            </motion.div>
            <img
                src={Frame2.src}
                className="w-[15rem]  absolute bottom-20 lg:right-[12%] right-[-10%]"
                draggable={false}
            />

            <img
                src={Frame.src}
                className="h-[10rem] md:h-[20%] absolute bottom-0 left-[-10%] lg:left-[1%]"
                draggable={false}
            />
        </div>
    );
}
