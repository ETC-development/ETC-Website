/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

/** Custom ETC icon set (24px grid, 1.6 stroke, node-ring terminals). Files live in /public/icons. */
export type IconName =
    | "ai"
    | "arrow-ne"
    | "arrow-r"
    | "bloch"
    | "bolt"
    | "book"
    | "calendar"
    | "check"
    | "chip"
    | "design"
    | "dev"
    | "events"
    | "globe"
    | "idea"
    | "jelly"
    | "leaf"
    | "library"
    | "marketing"
    | "media"
    | "mic"
    | "pin"
    | "plus"
    | "trophy"
    | "users"
    | "workshop";

/** f = foam (light), g = brand gradient, i = ink (on gradient). Not every icon has every variant. */
export function Icon({
    name,
    variant = "f",
    size = 24,
    className,
    style,
}: {
    name: IconName;
    variant?: "f" | "g" | "i";
    size?: number;
    className?: string;
    style?: React.CSSProperties;
}) {
    return (
        <img
            src={`/icons/${name}-${variant}.svg`}
            alt=""
            aria-hidden="true"
            width={size}
            height={size}
            className={className}
            style={style}
        />
    );
}

export type SocialName =
    | "instagram"
    | "discord"
    | "github"
    | "linkedin"
    | "x"
    | "facebook"
    | "tiktok"
    | "youtube";

/** Official platform marks (Simple Icons), never redrawn. */
export function Social({ name, size = 18 }: { name: SocialName; size?: number }) {
    return (
        <img
            src={`/brand/social/${name}.svg`}
            alt=""
            aria-hidden="true"
            width={size}
            height={size}
        />
    );
}

export function Arrow({
    color = "currentColor",
    size = 18,
    back = false,
}: {
    color?: string;
    size?: number;
    back?: boolean;
}) {
    return (
        <svg
            className="arr"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="1.8"
            aria-hidden="true"
        >
            <path d={back ? "M20 12H5M11 6l-6 6 6 6" : "M4 12h15M13 6l6 6-6 6"} />
        </svg>
    );
}

export function Check({ size = 14 }: { size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#04140D"
            strokeWidth="3"
            aria-hidden="true"
        >
            <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
    );
}

/** Emblem + ETC CLUB wordmark: the horizontal lockup used in navigation. */
export function Lockup({
    href = "/",
    emblem = 46,
    word = 16,
    label = "ETC Club - ENSIA Tech Community, home",
}: {
    href?: string;
    emblem?: number;
    word?: number;
    label?: string;
}) {
    return (
        <Link href={href} aria-label={label} className="lockup">
            <img
                src="/brand/etc-emblem.webp"
                alt=""
                width={emblem}
                height={emblem}
                style={{ objectFit: "contain" }}
            />
            <img
                src="/brand/etc-wordmark.svg"
                alt=""
                height={word}
                style={{ height: word, width: "auto" }}
            />
        </Link>
    );
}

const TENTACLES = [
    "M150 292V345L95 400V549",
    "M205 287V410L170 445V491",
    "M255 282V463",
    "M300 280V549",
    "M345 282V463",
    "M395 287V410L430 445V491",
    "M450 292V345L505 400V549",
];
const NODES: [number, number][] = [
    [95, 562],
    [170, 504],
    [255, 476],
    [300, 562],
    [345, 476],
    [430, 504],
    [505, 562],
];
const DELAYS = [0, 0.9, 1.6, 0.4, 2.1, 1.2, 0.6];

/** The Jelly: the ETC emblem as a living creature. Signals run down its seven tentacles. */
export function Jelly({
    id = "jg",
    className = "jelly",
    stroke = 5,
}: {
    id?: string;
    className?: string;
    stroke?: number;
}) {
    return (
        <svg
            className={className}
            viewBox="0 0 600 640"
            role="img"
            aria-label="The ETC jellyfish, the club emblem as a living circuit creature"
        >
            <defs>
                <linearGradient
                    id={id}
                    x1="0"
                    y1="0"
                    x2="600"
                    y2="640"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#19F08B" />
                    <stop offset="1" stopColor="#12C2F0" />
                </linearGradient>
                <radialGradient id={`${id}-b`} cx="50%" cy="40%" r="55%">
                    <stop offset="0" stopColor="#12C2F0" stopOpacity=".22" />
                    <stop offset="1" stopColor="#12C2F0" stopOpacity="0" />
                </radialGradient>
            </defs>
            <ellipse cx="300" cy="230" rx="270" ry="220" fill={`url(#${id}-b)`} />
            <g
                className="dome"
                fill="none"
                stroke={`url(#${id})`}
                strokeWidth={stroke}
                strokeLinecap="round"
            >
                <path d="M110 292C110 150 205 70 300 70S490 150 490 292" />
                <path d="M92 300Q300 255 508 300" />
                <path d="M300 70V278M300 70C245 115 222 190 218 284M300 70C355 115 378 190 382 284M146 196Q300 162 454 196" />
            </g>
            <g
                fill="none"
                stroke={`url(#${id})`}
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {TENTACLES.map((d) => (
                    <path key={d} d={d} />
                ))}
            </g>
            <g
                fill="none"
                stroke="#E9F3F1"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {TENTACLES.map((d, i) => (
                    <path
                        key={d}
                        className="pulse"
                        pathLength={100}
                        style={{ animationDelay: `${DELAYS[i]}s` }}
                        d={d}
                    />
                ))}
            </g>
            <g stroke={`url(#${id})`} strokeWidth={stroke}>
                {NODES.map(([cx, cy], i) => (
                    <circle
                        key={cx + "-" + cy}
                        className="nd"
                        style={{ animationDelay: `${DELAYS[i]}s` }}
                        cx={cx}
                        cy={cy}
                        r={13}
                    />
                ))}
            </g>
        </svg>
    );
}
