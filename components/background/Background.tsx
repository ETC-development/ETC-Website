"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import heroGradient from "../../public/assets/hero/gradient.webp";
import Image from "next/image";

export default function Background() {
    const { scrollY } = useScroll();

    const rotate = useTransform(scrollY, [0, 6000], [0, 360], { clamp: false });
    const scale = useTransform(scrollY, [0, 1000], [1, 1.2], { clamp: false });

    return (
        <motion.div
            className="hero-gradient overflow-x-hidden overflow-y-visible fixed blur-xl"
            style={{ rotate, scale }}
        >
            <Image width={5920} src={heroGradient} alt="gradient" />
        </motion.div>
    );
}
