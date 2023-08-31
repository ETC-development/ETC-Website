"use client"
import { motion } from "framer-motion";
import { ReactNode } from "react";


export default function FadeInWhenVisible({ children }: {children: ReactNode}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, scale: 1, translateY: 0 },
        hidden: { opacity: 0, scale: 1, translateY: 100 },
      }}
    >
      {children}
    </motion.div>
  );
}