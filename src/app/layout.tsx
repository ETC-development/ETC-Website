import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import type { Metadata } from "next";
import localFont from "next/font/local";
import { Comfortaa, Montserrat } from "next/font/google";

const azonix = localFont({
    src: [
        {
            path: "../../public/fonts/Azonix.otf",
        },
    ],
    variable: "--font-azonix",
});

const comfortaa = Comfortaa({
    variable: "--font-comfortaa",
    subsets: ['latin']
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"]
});

export const metadata: Metadata = {
    metadataBase: new URL("https://etc-club.vercel.app"),
    title: "ETC Club - ENSIA Tech Community",
    description: "ENSIA Tech Community, a scientific club founded in March 2022, is the National School of Artificial Intelligence's central location for technology and computer science. Join us for projects, courses, and events geared toward tech enthusiasts of all skill levels.",
    keywords: ["ETC", "ENSIA", "Tech Community", "Algeria", "AI", "Technology"],
    authors: [{ name: "ETC Club" }],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://etc-club.vercel.app",
        siteName: "ETC Club",
        title: "ETC Club - ENSIA Tech Community",
        description: "ENSIA Tech Community - Technology and AI club at ENSIA",
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "ETC Club",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ETC Club - ENSIA Tech Community",
        description: "ENSIA Tech Community",
        images: ["/opengraph-image.png"],
    },
    verification: {
        google: "IPC6k4BiPCBmR3gKaohNWdTyziah0_EkMB7XRQspPI8"
    },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [
            { url: "/apple-touch-icon.png" },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${azonix.variable} ${montserrat.variable} ${comfortaa.variable}`}>
                {children}
            </body>
        </html>
    );
}