import "./globals.css";
import { CREDITS } from "@/data/club";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Archivo, JetBrains_Mono } from "next/font/google";

const azonix = localFont({
    src: "../../public/fonts/Azonix.otf",
    variable: "--font-azonix",
    display: "swap",
});
const archivo = Archivo({
    subsets: ["latin"],
    axes: ["wdth"],
    variable: "--font-archivo",
    display: "swap",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const description =
    "ENSIA Tech Community, the scientific club of Algeria's National School of Artificial Intelligence since March 2022. Home of ETCode, ENSIA Hub, ETCast and six cells you can join.";

export const metadata: Metadata = {
    metadataBase: new URL("https://etc-club.vercel.app"),
    title: { default: "ETC Club - ENSIA Tech Community", template: "%s | ETC" },
    description,
    keywords: ["ETC", "ENSIA", "Tech Community", "Algeria", "AI", "ETCode", "hackathon"],
    authors: [
        { name: "ENSIA Tech Community" },
        ...(CREDITS.name ? [{ name: CREDITS.name, url: CREDITS.url || undefined }] : []),
    ],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://etc-club.vercel.app",
        siteName: "ETC",
        title: "ETC Club - ENSIA Tech Community",
        description,
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "ETC, ENSIA Tech Community",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "ETC Club - ENSIA Tech Community",
        description,
        images: ["/opengraph-image.png"],
    },
    verification: { google: "IPC6k4BiPCBmR3gKaohNWdTyziah0_EkMB7XRQspPI8" },
    icons: {
        icon: [
            { url: "/favicon.ico" },
            { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
            { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        ],
        apple: [{ url: "/apple-touch-icon.png" }],
    },
};

export const viewport: Viewport = { themeColor: "#040D12", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${azonix.variable} ${archivo.variable} ${mono.variable}`}>
            <body>
                <a className="skip" href="#main">
                    Skip to content
                </a>
                {children}
            </body>
        </html>
    );
}
