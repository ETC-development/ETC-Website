/**
 * Club identity, contact links, headline numbers and the registration switch.
 * Edit here; every page reads from this file.
 */

export const SITE = {
    name: "ETC",
    fullName: "ENSIA Tech Community",
    url: "https://etc-club.vercel.app",
    tagline: "Make it exist.",
    hashtag: "#Empowered_By_Innovation",
    founded: "3 March 2022",
    instagramHandle: "@etc_.club",
    instagramFollowers: "13.7K",
    season: "2026/27",
};

export const CLUB = {
    email: "tech-community@ensia.edu.dz",
    phone: "+213-776-17-24-49",
    address_text: "Sidi Abdellah, Zeralda",
    address_link: "https://maps.google.com/?q=ENSIA+Sidi+Abdellah",
    insta_link: "https://www.instagram.com/etc_.club/",
    github_link: "https://github.com/ETC-development",
    discord_link: "https://discord.gg/tFU3svvnVv",
    linkedin_link: "https://www.linkedin.com/company/ensia-tech-community/",
    twitter_link: "https://x.com/ETC_ensia_club",
    facebook_link: "https://www.facebook.com/ensia.tech.community",
    youtube_link: "https://www.youtube.com/@ETC_Club",
    /** Hero counters. */
    num_members: 400,
    num_participants: +700,
    num_events: 10,
    num_projects: 7,
    num_stands: 15,
};

export type Club = typeof CLUB;

export const CREDITS = {
    name: "Yassir CHERDOUH",
    url: "https://yassircherdouh.vercel.app",
};

export const NAV = [
    { href: "/#universe", label: "Events" },
    { href: "/#work", label: "Projects" },
    { href: "/#cells", label: "Cells" },
    { href: "/#crew", label: "Team" },
    { href: "/#feed", label: "Community" },
];

/** Registration window. Flip `open` (or set `opensAt`) each recruitment season. */
export const REGISTRATION = {
    open: true,
    /** ISO date shown on the closed screen, or null while undecided. */
    opensAt: null as string | null,
    /** Supabase table the applications are written to. */
    table: "registerations-2k25-2k26",
    interviewWindow: "[DATE RANGE]",
    resultsDate: "[DATE]",
};
