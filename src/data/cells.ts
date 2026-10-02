/**
 * Cells: the teams every member belongs to. Shown on the home page and in the registration form.
 * `apply: true` cells can be ranked by applicants; the key must exist in the `departments`
 * enum of the registration table in Supabase.
 */
import type { IconName } from "@/components/ui";

export type CellKey = "development" | "ai" | "design" | "multimedia" | "events" | "marketing" | "relex";

export const CELLS: {
    key: CellKey;
    name: string;
    tag: string;
    icon: IconName;
    photo: string;
    desc: string;
    does: string[];
    /** False while the registration table's `departments` enum has no value for this cell. */
    apply: boolean;
}[] = [
    {
        key: "development",
        name: "Development",
        tag: "Code",
        icon: "dev",
        photo: "/photos/focus-team.webp",
        desc: "Writes the software the club runs on. You leave with code other students actually use, and a repo to show for it.",
        does: ["ENSIA Hub", "Training Sessions", "ETCODE Challenges"],
        apply: true,
    },
    {
        key: "ai",
        name: "AI & Data Science",
        tag: "AI/DS",
        icon: "ai",
        photo: "/photos/ai-vision.webp",
        desc: "Takes what ENSIA teaches in lectures and makes you practise it: datasets, models, competitions. AI Journey is its training track.",
        does: ["AI Journey", "Models", "Datasets", "Competitions"],
        apply: false,
    },
    {
        key: "design",
        name: "Design",
        tag: "Visual",
        icon: "design",
        photo: "/photos/board.webp",
        desc: "Every poster, event identity and post in front of our followers comes out of this cell. Your work is published, seen and judged, which is how you get good fast.",
        does: ["Event identities", "Posters", "Social", "Merch"],
        apply: true,
    },
    {
        key: "multimedia",
        name: "Multimedia",
        tag: "Video, audio",
        icon: "media",
        photo: "/photos/hall-wide.webp",
        desc: "Films, records and edits the club: event recaps, photography and ETCast. If it happened at ETC and you saw it online, this cell made it.",
        does: ["ETCast", "Recaps", "Photography", "Reels"],
        apply: true,
    },
    {
        key: "events",
        name: "Events",
        tag: "Operations",
        icon: "events",
        photo: "/photos/amphi-group.webp",
        desc: "Runs events from first idea to final evaluation: venues, schedules, juries, the day itself. Real responsibility for hundreds of participants, while still a student.",
        does: ["Events", "Logistics"],
        apply: true,
    },
    {
        key: "marketing",
        name: "Marketing",
        tag: "Growth",
        icon: "marketing",
        photo: "/photos/stand.webp",
        desc: "Decides how ETC talks to ENSIA and beyond: campaigns, launch plans for every event, social media strategy and the club stands. You learn to fill a room, which is harder than it sounds.",
        does: ["Campaigns", "Event launches", "Social strategy", "Stands"],
        apply: true,
    },
    {
        key: "relex",
        name: "Relex",
        tag: "External relations",
        icon: "globe",
        photo: "/photos/awards-line.webp",
        desc: "ETC's link to the outside: the sponsors and partners who fund the events, the companies and speakers who come to ENSIA, the schools and clubs we build with. Negotiation and partnership skills nobody teaches in engineering school.",
        does: ["Sponsors", "Partners", "Speakers & mentors", "Other schools"],
        apply: true,
    },
];

/** Cells an applicant can rank today. */
export const APPLY_CELLS = CELLS.filter((c) => c.apply);

/** Study levels offered in the registration form (matches the `level` enum in Supabase). */
export const LEVELS = ["1CP / 1L", "2CP / 2L", "1CS / 3L", "2CS / 1M", "3CS / 2M"] as const;
