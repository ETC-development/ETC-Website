/**
 * Projects: what ETC runs all year, between the events. Shown in the bento grid on the home page.
 * A project with a matching custom cell in sections.tsx gets its own layout; any other key renders as a plain card.
 */

export type ProjectMeta = {
    key: string;
    name: string;
    kind: string;
    byline?: string;
    href?: string;
    desc: string;
    /** Shown as a "Coming this season" badge. */
    upcoming?: boolean;
};

export const PROJECTS: ProjectMeta[] = [
    {
        key: "ensiahub",
        name: "ENSIA Hub",
        kind: "Platform",
        byline: "Built by the Development cell",
        href: "https://ensia-hub.netlify.app",
        desc: "The course material for ENSIA's modules, in one place. Built and kept up by ETC developers, open to every ENSIA student, member or not.",
    },
    {
        key: "fossflash",
        name: "FOSS Flash",
        kind: "Newsletter",
        desc: "One free and open-source tool worth switching to, explained in a few minutes by students who use it.",
    },
    {
        key: "etcast",
        name: "ETCast",
        kind: "Video podcast",
        href: "https://www.youtube.com/watch?v=rsmwGopksig",
        desc: "Honest conversations in Darja about student life in Algeria. Episode 1: should you pause your studies to start a project?",
    },
    {
        key: "trainingsessions",
        name: "Training Sessions",
        kind: "Every cell",
        desc: "Intensive workshops, theory first, then practice on real material. This is where a new member becomes someone their cell can hand a task to.",
    },
    {
        key: "aijourney",
        name: "AI Journey",
        kind: "AI & Data Science cell",
        desc: "The Training Sessions of the AI & Data Science cell. The maths you see in class, turned into models you train and break yourself.",
    },
    {
        key: "techdays",
        name: "Tech Days",
        kind: "One day, one technology",
        desc: "One technology, one full day. Presentations first, to understand how it works and where it is used, then workshops where you build with it yourself. Some days are delivered and certified by the company behind the technology.",
    },
    {
        key: "techreels",
        name: "Tech Reels",
        kind: "Short-form video",
        upcoming: true,
        desc: "Tech explained in under a minute, plus member challenges and competitions on camera. Made to be fun to shoot, not another chore.",
    },
    {
        key: "quantumcorner",
        name: "Quantum Corner",
        kind: "Learning series",
        desc: "Quantum computing from the qubit up: the algorithms, the languages that program them, the hardware, and where it meets machine learning.",
    },
    {
        key: "readit",
        name: "Read-IT",
        kind: "Reading circle",
        desc: "One book or article, read on your own, argued about together. From the fundamentals to the ones that change how you think.",
    },
];

/** The days listed on the Tech Days card. Leave `desc` empty to show the name only. */
export const TECH_DAYS: {
    name: string;
    /** Who delivers it, shown above the name. */
    by?: string;
    desc: string;
    figure?: [string, string];
}[] = [
    {
        name: "NVIDIA Day",
        by: "With NVIDIA",
        desc: "Our annual deep learning workshop, delivered and certified by NVIDIA. You leave with an NVIDIA certificate.",
        figure: ["2", "Editions"],
    },
    {
        name: "Blockchain Day",
        desc: "A full day on blockchain: presentations on how it works and what it is used for, then hands-on workshops.",
        figure: ["1", "Edition"],
    },
    {
        name: "AWS Cloud Training",
        by: "With Formini",
        desc: "Exclusive AWS cloud sessions by Formini, an authorized AWS and VMware training center in Algiers. Every participant is registered on the AWS platform and gets the official AWS certificate.",
        figure: ["AWS", "Certificate"],
    },
];

/** The latest ETCast episode, featured on the ETCast card. */
export const ETCAST_EPISODE = {
    number: 1,
    title: "كيفاش يتعامل الطالب الجزائري مع التحديات؟",
    subtitle: "Being far from home, studies, work, projects",
    thumb: "/photos/etcast-ep1.jpg",
    href: "https://www.youtube.com/watch?v=rsmwGopksig",
};
