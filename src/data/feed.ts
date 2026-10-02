/** Highlights shown in the "Live from the deep" grid. `tall` spans two rows. Use photos at least 1200px wide. */

export const FEED: { src: string; alt: string; tall?: boolean }[] = [
    {
        src: "/photos/bitcamp-talk.webp",
        alt: "A speaker presenting at BitCamp",
        tall: true,
    },
    { src: "/photos/amphi.webp", alt: "A full amphitheater of students during an ETC event" },
    { src: "/photos/formini-class.webp", alt: "Participants at the AWS cloud training with Formini" },
    {
        src: "/photos/etcode-night.webp",
        alt: "ETCode teams coding at night under purple light",
        tall: true,
    },
    { src: "/photos/bitcamp-group.webp", alt: "BitCamp participants gathered in the amphitheater" },
    { src: "/photos/group-huddle.webp", alt: "A team discussing their solution during ETCode" },
];
