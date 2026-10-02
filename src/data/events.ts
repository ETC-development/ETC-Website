/**
 * Events.
 * - SEASON_EVENTS hang from the jellyfish on the home page, in this order.
 * - OTHER_EVENTS are one-off, partner or retired events, shown under the jellyfish with key figures.
 */
import type { IconName } from "@/components/ui";

export type EventMeta = {
    key: string;
    name: string;
    /** Short label above the name, e.g. "Flagship · competitive programming". */
    kind: string;
    accent: string;
    glow: string;
    when: string;
    desc: string;
    /** Round logo used in the jellyfish orb (square image). */
    cover?: string;
    /** Icon used when there is no cover. */
    icon?: IconName;
    /** Photo shown in the detail panel instead of the cover. */
    photo?: { src: string; alt: string };
    /** Event page, internal ("/events/etcode") or external. */
    href?: string;
};

export const SEASON_EVENTS: EventMeta[] = [
    {
        key: "etcday",
        name: "ETC-Day",
        kind: "Presentation day",
        accent: "#12C2F0",
        glow: "rgba(18,194,240,.25)",
        when: "Every year, right after the rentrée",
        cover: "/brand/covers/etcday.jpg",
        desc: "The day ETC presents itself to ENSIA. Every cell on stage, the season's plan out loud, and the managers you will work with in the same room. Registrations open right after.",
    },
    {
        key: "headstart",
        name: "HeadStart",
        kind: "Workshop series",
        accent: "#19F08B",
        glow: "rgba(25,240,139,.22)",
        when: "After ETC-Day",
        icon: "workshop",
        desc: "Starter workshops in every cell for the members who just joined, so the first task you get is one you already know how to do.",
    },
    {
        key: "bitcamp",
        name: "BitCamp",
        kind: "Robotics workshop · 1 day",
        accent: "#F5D90A",
        glow: "rgba(245,217,10,.22)",
        when: "Every year",
        cover: "/brand/covers/bitcamp.jpg",
        photo: {
            src: "/photos/bitcamp-group.webp",
            alt: "BitCamp participants and mentors gathered in the amphitheater",
        },
        desc: "ETC's annual robotics day. One intensive day on Arduino, Raspberry Pi and Jetson Nano, taught by faculty members and engineers from industry, until the idea in your head is a device on the table.",
    },
    {
        key: "exai",
        name: "EXAI",
        kind: "AI datathon · new this season",
        accent: "#13B5B9",
        glow: "rgba(19,181,185,.25)",
        when: "This season · 3 days",
        cover: "/brand/covers/exai.webp",
        href: "https://exai-etc.vercel.app/",
        desc: "A high-level AI datathon for about 100 selected participants. Three days of Kaggle-style, research-grade challenges in deep learning, time series, computer vision, NLP and reinforcement learning, built to look like the problems industry actually has.",
    },
    {
        key: "etcversary",
        name: "ETC-Versary",
        kind: "Anniversary",
        accent: "#C9CED6",
        glow: "rgba(201,206,214,.2)",
        when: "Around 3 March, the club's birthday",
        cover: "/brand/covers/etcversary.jpg",
        desc: "ETC was created on 3 March 2022. The anniversary is the club thanking the people who carried it: members, managers and partners, in one room, for one night.",
    },
    {
        key: "etcode",
        name: "ETCode",
        kind: "",
        accent: "#FF8A2A",
        glow: "rgba(255,138,42,.25)",
        when: "June, every year since 2023",
        cover: "/brand/etcode4/orb.svg",
        photo: {
            src: "/photos/etcode-night.webp",
            alt: "A hall full of ETCode teams coding at night under purple light",
        },
        href: "/events/etcode",
        desc: "ETC's flagship. Teams of three, any language, a problem set from warm-up to brutal. Between rounds, mini-games win you hints, and a lot of fun!",
    },
];

export type OtherEvent = {
    key: string;
    name: string;
    kind: string;
    /** Who we ran it with. */
    partner?: string;
    desc: string;
    /** Key figures, shown as big numbers: [value, label]. */
    figures: [string, string][];
    /** Themes or tracks, shown as chips. */
    tags?: string[];
    logo?: string;
    icon?: IconName;
    href?: string;
};

export const OTHER_EVENTS: OtherEvent[] = [
    {
        key: "agrichallenge",
        name: "AgriChallenge",
        kind: "National datathon · 4 days",
        partner: "With ENSA, the National School of Agronomy",
        logo: "/brand/agrichallenge.svg",
        href: "https://agri-challenge.github.io/edition-2024/",
        desc: "Teams collected their own field data at ENSA, then trained models at ENSIA to find intelligent solutions for agronomy. The 2024 edition's 50,673 tree images became a research benchmark.",
        figures: [
            ["2", "Editions"],
            ["150", "Participants each"],
        ],
    },
    {
        key: "forsatic",
        name: "Forsatic",
        kind: "National datathon · 3 days",
        partner: "With the Algérie Télécom incubator",
        logo: "/brand/covers/forsa.jpg",
        desc: "A national datathon organised in partnership with Algérie Télécom's incubator: three days of data challenges and five invited speakers.",
        figures: [
            ["300", "Participants"],
            ["5", "Speakers"],
        ],
    },
    {
        key: "hackstart",
        name: "HackStart",
        kind: "Ideathon",
        icon: "idea",
        desc: "An ideathon for new members, built on what HeadStart taught: teams picked a real problem in one of four themes and pitched their solution to a jury.",
        tags: ["Transportation", "Education", "Communication", "Health"],
        figures: [
            ["40", "Participants"],
            ["4", "Themes"],
            ["1", "Edition"],
        ],
    },
];
