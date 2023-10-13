
import "./globals.css";

import 'swiper/css';
import 'swiper/css/navigation';
import { config } from '@fortawesome/fontawesome-svg-core' // 👈
import '@fortawesome/fontawesome-svg-core/styles.css' // 👈
config.autoAddCss = false // 👈


import type { Metadata } from "next";
import localFont from "next/font/local";
import { Comfortaa, Montserrat } from "next/font/google";

const azonix = localFont({
  src: [
    {
      path: "../public/fonts/Azonix.otf",
    },
  ],
  variable: "--font-azonix",
});


const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ['latin']
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "ETC Club",
  description: "ENSIA Tech Community, a scientific club founded in March 2022, is the National School of Artificial Intelligence's central location for technology and computer science. Join us for projects, courses, and events geared toward tech enthusiasts of all skill levels. Together, let's unleash your potential and create a world driven by technology.",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className={`${azonix.variable} ${montserrat.variable} ${comfortaa.variable}`}>{children}</body>
      </html>
  );
}