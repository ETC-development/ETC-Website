/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import {
    Arrow,
    Icon,
    Jelly,
    Lockup,
    Social,
    type IconName,
    type SocialName,
} from "@/components/ui";
import {
    Cells,
    CrewSection,
    MobileMenu,
    NewsletterForm,
    Universe,
} from "@/components/interactive";
import { CELLS } from "@/data/cells";
import { CREDITS, NAV, SITE, type Club } from "@/data/club";
import { CREW_SEASON } from "@/data/crew";
import type { EventMeta, OtherEvent } from "@/data/events";
import { FEED } from "@/data/feed";
import { PARTNERS } from "@/data/partners";
import { ETCAST_EPISODE, TECH_DAYS, type ProjectMeta } from "@/data/projects";
import type { Crew } from "@/lib/data";

/* ------------------------------------------------------------ chrome */
export function Header({ club, current }: { club: Club; current?: string }) {
    return (
        <header className="header">
            <div className="wrap header-in">
                <Lockup />
                <nav aria-label="Primary" className="nav-links">
                    {NAV.map((l) => (
                        <a
                            key={l.href}
                            className="navlink"
                            href={l.href}
                            aria-current={current === l.label ? "page" : undefined}
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Link
                        className="btn btn-glow chamfer"
                        href="/registrations"
                        style={{ minHeight: 44, padding: "0 20px", fontSize: 15 }}
                    >
                        Join ETC
                    </Link>
                    <MobileMenu
                        discord={club.discord_link}
                        instagram={club.insta_link}
                        github={club.github_link}
                    />
                </div>
            </div>
        </header>
    );
}

const GAUGE = [
    ["top", "#top", "Surface"],
    ["uni", "#universe", "Universe"],
    ["work", "#work", "Shipped"],
    ["div", "#cells", "Cells"],
    ["crew", "#crew", "Crew"],
    ["feed", "#feed", "Feed"],
    ["join", "#join", "Join"],
] as const;

/** Scroll progress as a dive: fixed depth gauge on desktop, gradient bar on phones, page darkens as you go. */
export function ScrollChrome() {
    return (
        <>
            <div className="shade" aria-hidden="true" />
            <div className="topbar" aria-hidden="true" />
            <nav className="gauge" aria-label="Sections">
                <span className="read" aria-hidden="true">
                    <span className="depth" /> M
                </span>
                <div className="rail">
                    <div className="rail-fill" />
                    {GAUGE.map(([k, href, label], i) => (
                        <a
                            key={k}
                            className={`gn gn-${k}`}
                            href={href}
                            style={{ top: `${(i / (GAUGE.length - 1)) * 100}%` }}
                        >
                            <span className="gl">{label}</span>
                            <span className="dot" />
                        </a>
                    ))}
                </div>
            </nav>
        </>
    );
}

const SOCIALS: { key: keyof Club; name: SocialName; label: string }[] = [
    { key: "insta_link", name: "instagram", label: "Instagram" },
    { key: "github_link", name: "github", label: "GitHub" },
    { key: "discord_link", name: "discord", label: "Discord" },
    { key: "youtube_link", name: "youtube", label: "YouTube" },
    { key: "linkedin_link", name: "linkedin", label: "LinkedIn" },
    { key: "twitter_link", name: "x", label: "X" },
    { key: "facebook_link", name: "facebook", label: "Facebook" },
];

export function Footer({ club }: { club: Club }) {
    return (
        <footer
            style={{
                position: "relative",
                zIndex: 2,
                borderTop: "1px solid var(--line)",
                background: "var(--abyss)",
            }}
        >
            <div
                className="wrap"
                style={{
                    paddingTop: 72,
                    paddingBottom: 40,
                    display: "flex",
                    flexDirection: "column",
                    gap: 56,
                }}
            >
                <div className="g-foot">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 20,
                            maxWidth: "36ch",
                        }}
                    >
                        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                            <img
                                src="/brand/etc-emblem.webp"
                                alt="ETC emblem"
                                width={84}
                                height={84}
                            />
                            <img
                                src="/brand/etc-wordmark.svg"
                                alt="ETC Club"
                                style={{ height: 20, width: "auto" }}
                            />
                        </div>
                        <p className="fog" style={{ margin: 0, fontSize: 15 }}>
                            The first scientific club of ENSIA, the National School of Artificial
                            Intelligence, and its largest, since
                            its creation on {SITE.founded}. Sidi Abdellah, Algiers.
                        </p>
                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                            {SOCIALS.filter((s) => club[s.key]).map((s) => (
                                <a
                                    key={s.name}
                                    className="sq"
                                    href={String(club[s.key])}
                                    aria-label={s.label}
                                >
                                    <Social name={s.name} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <nav
                        aria-label="Footer"
                        style={{ display: "flex", flexDirection: "column", gap: 10 }}
                    >
                        <span className="mono">Explore</span>
                        {NAV.slice(0, 4).map((l) => (
                            <a key={l.href} className="flink" href={l.href}>
                                {l.label}
                            </a>
                        ))}
                        <Link className="flink" href="/registrations">
                            Registrations
                        </Link>
                    </nav>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        <span className="mono">Projects</span>
                        <a className="flink" href="https://ensia-hub.netlify.app">
                            ENSIA Hub
                        </a>
                        <a className="flink" href={club.youtube_link}>
                            ETCast
                        </a>
                        <a className="flink" href="/#foss">
                            FOSS Flash
                        </a>
                        <Link className="flink" href="/events/etcode">
                            ETCode
                        </Link>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                        <span className="mono">Contact</span>
                        <a className="flink" href={`mailto:${club.email}`}>
                            {club.email}
                        </a>
                        <a className="flink" href={`tel:${club.phone.replace(/[^+\d]/g, "")}`}>
                            {club.phone}
                        </a>
                        <a className="flink" href={club.address_link}>
                            ENSIA, {club.address_text}
                        </a>
                    </div>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 16,
                        flexWrap: "wrap",
                        paddingTop: 24,
                        borderTop: "1px solid var(--line)",
                    }}
                >
                    <span className="mono fog">
                        © {new Date().getFullYear()} {SITE.fullName}
                    </span>
                    {CREDITS.name && (
                        <span className="mono credit">
                            Site by{" "}
                            {CREDITS.url ? <a href={CREDITS.url}>{CREDITS.name}</a> : CREDITS.name}
                        </span>
                    )}
                    <span className="mono gtext">{SITE.hashtag}</span>
                </div>
            </div>
        </footer>
    );
}

/* ------------------------------------------------------------- home */
export function Hero({ club }: { club: Club }) {
    const plankton = Array.from({ length: 26 }, (_, i) => {
        const r = (n: number) => (Math.sin(i * 97.13 + n * 13.7) + 1) / 2;
        return {
            left: `${(r(1) * 100).toFixed(1)}%`,
            top: `${(30 + r(2) * 70).toFixed(1)}%`,
            size: `${(2 + r(3) * 4).toFixed(1)}px`,
            dur: `${(9 + r(4) * 12).toFixed(1)}s`,
            delay: `${(-r(5) * 20).toFixed(1)}s`,
        };
    });
    const stats = [
        { n: club.num_members, label: "Members" },
        { n: club.num_participants, label: "Event participants" },
        { n: club.num_events, label: "Events run" },
        { n: club.num_projects, label: "Projects" },
        { n: club.num_stands, label: "Stands held" },
    ];
    return (
        <section
            id="top"
            className="hero"
            style={{ viewTimelineName: "--t-top" } as React.CSSProperties}
        >
            <div className="surface" aria-hidden="true" />
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    inset: 0,
                    overflow: "hidden",
                    pointerEvents: "none",
                }}
            >
                {plankton.map((p, i) => (
                    <span
                        key={i}
                        className="pk"
                        style={{
                            left: p.left,
                            top: p.top,
                            width: p.size,
                            height: p.size,
                            animationDuration: p.dur,
                            animationDelay: p.delay,
                        }}
                    />
                ))}
            </div>
            <div className="wrap g-hero" style={{ position: "relative" }}>
                <div className="rise" style={{ display: "flex", flexDirection: "column", gap: 30 }}>
                    <div
                        style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}
                    >
                        <img
                            src="/brand/ensia-light.webp"
                            alt="ENSIA"
                            style={{ height: 22, width: "auto" }}
                        />
                        <span style={{ width: 1, height: 22, background: "var(--line-2)" }} />
                        <span className="mono fog">ENSIA&apos;s first scientific club · since 2022</span>
                    </div>
                    <h1
                        className="az"
                        style={{
                            margin: 0,
                            fontSize: "clamp(52px, 7.4vw, 112px)",
                            lineHeight: 0.92,
                        }}
                    >
                        Make it
                        <br />
                        <span className="exist">exist.</span>
                    </h1>
                    <p
                        style={{
                            margin: 0,
                            maxWidth: "36ch",
                            fontSize: "clamp(17px, 1.45vw, 21px)",
                            lineHeight: 1.5,
                            color: "var(--fog)",
                        }}
                    >
                        ENSIA's central location for technology and computer science.
                        Join us for projects, courses, and events geared toward tech enthusiasts of all skill levels. Together, let's unleash your potential and create a world driven by technology.
                    </p>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <Link className="btn btn-glow chamfer" href="/registrations">
                            Join ETC <Arrow color="#04140D" />
                        </Link>
                        <a className="btn btn-line" href="#universe">
                            Explore the universe
                        </a>
                    </div>
                </div>
                <div className="hero-jelly" style={{ display: "flex", justifyContent: "center" }}>
                    <div className="bob" style={{ width: "min(560px, 100%)" }}>
                        <Jelly />
                    </div>
                </div>
            </div>
            <div className="wrap" style={{ paddingBottom: 80, position: "relative" }}>
                <div className="g-stats">
                    <div className="bus" aria-hidden="true" />
                    {stats.map((s, i) => (
                        <div key={s.label} className="stat">
                            <span
                                className="snode"
                                aria-hidden="true"
                                style={{ animationDelay: `${0.6 + i * 0.25}s` }}
                            />
                            <span
                                className="az count gtext stat-n"
                                role="img"
                                aria-label={String(s.n)}
                                style={{ "--to": s.n } as React.CSSProperties}
                            />
                            <span className="mono fog">{s.label}</span>
                        </div>
                    ))}
                    <div className="stat">
                        <span
                            className="snode"
                            aria-hidden="true"
                            style={{ animationDelay: "1.85s" }}
                        />
                        <span className="az gtext stat-n">{SITE.instagramFollowers}</span>
                        <span className="mono fog">Instagram followers</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Manifesto({ club }: { club: Club }) {
    return (
        <section aria-label="What ETC stands for" className="manifesto">
            <img
                className="manifesto-mark"
                src="/brand/etc-emblem.webp"
                alt=""
                aria-hidden="true"
            />
            <div
                className="wrap sec"
                style={{ position: "relative", display: "flex", flexDirection: "column", gap: 40 }}
            >
                <h2
                    className="az"
                    style={{ margin: 0, fontSize: "clamp(40px, 6.4vw, 104px)", lineHeight: 1 }}
                >
                    <span className="line-fill" style={{ display: "block" }}>
                        Class teaches the theory.
                    </span>
                    <span className="line-fill" style={{ display: "block" }}>
                        ETC is where you use it.
                    </span>
                </h2>
                <p
                    style={{
                        margin: 0,
                        maxWidth: "52ch",
                        fontSize: 19,
                        lineHeight: 1.5,
                        fontWeight: 500,
                    }}
                >
                    You learn by building, breaking things, trying again, and working with people who are just as curious as you are.
                    Whether it&apos;s your first project or something you&apos;ve been working on for months, ETC gives you the space to turn what you know into something real.
                </p>
            </div>
        </section>
    );
}

export function UniverseSection({
    events,
    other,
    club,
}: {
    events: EventMeta[];
    other: OtherEvent[];
    club: Club;
}) {
    return (
        <section id="universe" style={{ viewTimelineName: "--t-uni" } as React.CSSProperties}>
            <div className="wrap sec">
                <div
                    className="reveal"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 16,
                        alignItems: "center",
                        textAlign: "center",
                    }}
                >
                    <h2 className="az h2">
                        The ETC <span className="gtext">universe</span>
                    </h2>
                    <p className="lead" style={{ margin: 0 }}>
                        {events.length} events come back every season, and ETCode is the one we
                        are known for. Each tentacle is one of them: pick it to see what happens
                        there.
                    </p>
                </div>
                <Universe events={events} discord={club.discord_link} />
                {other.length > 0 && <OtherEvents events={other} />}
            </div>
        </section>
    );
}

/** What the three phone screens on the Tech Reels card show. */
const REEL_SCREENS: { tag: string; icon: IconName; variant: "f" | "g" }[] = [
    { tag: "Explainer", icon: "chip", variant: "g" },
    { tag: "Challenge", icon: "bolt", variant: "g" },
    { tag: "Competition", icon: "trophy", variant: "f" },
];

function OtherEvents({ events }: { events: OtherEvent[] }) {
    return (
        <div className="others">
            <div
                className="reveal"
                style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}
            >
                <span className="mono" style={{ color: "var(--cyan)" }}>
                    Other events
                </span>
                <h3 className="az" style={{ margin: 0, fontSize: "clamp(28px, 3vw, 44px)" }}>
                    Beyond the <span className="gtext">season</span>
                </h3>
                <p className="fog" style={{ margin: 0, maxWidth: "52ch" }}>
                    National datathons we ran with partners, and formats we tried once.
                </p>
            </div>
            <div className="g-others">
                {events.map((e) => (
                    <article key={e.key} className="oev reveal">
                        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                            <span className="ring" aria-hidden="true">
                                {e.logo ? (
                                    <img src={e.logo} alt="" className="oev-logo" />
                                ) : (
                                    <Icon name={e.icon ?? "events"} variant="g" size={28} />
                                )}
                            </span>
                            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                <h4 className="xp" style={{ margin: 0, fontSize: 24 }}>
                                    {e.name}
                                </h4>
                                <span className="mono fog">{e.kind}</span>
                            </div>
                        </div>
                        {e.partner && (
                            <span style={{ fontWeight: 700, color: "var(--cyan)", fontSize: 15 }}>
                                {e.partner}
                            </span>
                        )}
                        <p className="fog" style={{ margin: 0, fontSize: 15 }}>
                            {e.desc}
                        </p>
                        {e.tags && (
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                {e.tags.map((t) => (
                                    <span key={t} className="chip">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        )}
                        <div className="figs">
                            {e.figures.map(([v, l]) => (
                                <span key={l} style={{ display: "flex", flexDirection: "column" }}>
                                    <span className="az gtext" style={{ fontSize: 34 }}>
                                        {v}
                                    </span>
                                    <span className="mono fog">{l}</span>
                                </span>
                            ))}
                        </div>
                        {e.href && (
                            <a className="oev-link" href={e.href}>
                                See the {e.name} site <Icon name="arrow-ne" size={16} />
                            </a>
                        )}
                    </article>
                ))}
            </div>
        </div>
    );
}

function Eq() {
    const hs = [
        30, 62, 45, 88, 54, 100, 40, 76, 60, 92, 50, 70, 36, 84, 58, 96, 44, 66, 80, 48, 90, 56, 72,
        38,
    ];
    return (
        <div className="eq" aria-hidden="true">
            {hs.map((h, i) => (
                <span
                    key={i}
                    style={{ height: `${h}%`, animationDelay: `${(i * 0.06).toFixed(2)}s` }}
                />
            ))}
        </div>
    );
}

function Bloch() {
    return (
        <svg
            viewBox="0 0 240 240"
            width="210"
            height="210"
            aria-hidden="true"
            style={{ flex: "none", overflow: "visible" }}
        >
            <defs>
                <linearGradient
                    id="qg"
                    x1="0"
                    y1="0"
                    x2="240"
                    y2="240"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#19F08B" />
                    <stop offset="1" stopColor="#12C2F0" />
                </linearGradient>
            </defs>
            <circle cx="120" cy="120" r="96" fill="none" stroke="url(#qg)" strokeWidth="2.5" />
            <ellipse
                cx="120"
                cy="120"
                rx="96"
                ry="30"
                fill="none"
                stroke="url(#qg)"
                strokeWidth="2"
                strokeDasharray="5 6"
                opacity=".7"
            />
            <path d="M120 14V226" stroke="#8FA3A6" strokeWidth="1.5" strokeDasharray="3 5" />
            <text x="128" y="12" fill="#8FA3A6" fontFamily="monospace" fontSize="13">
                |0⟩
            </text>
            <text x="128" y="236" fill="#8FA3A6" fontFamily="monospace" fontSize="13">
                |1⟩
            </text>
            <g className="spin">
                <path d="M120 120L176 58" stroke="#E9F3F1" strokeWidth="3" strokeLinecap="round" />
                <circle cx="180" cy="54" r="9" fill="#040D12" stroke="url(#qg)" strokeWidth="3" />
            </g>
            <circle cx="120" cy="120" r="5" fill="#12C2F0" />
        </svg>
    );
}

function CellHead({
    kind,
    name,
    dark = true,
    right,
}: {
    kind: string;
    name: string;
    dark?: boolean;
    right?: React.ReactNode;
}) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 16,
            }}
        >
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <span className={`mono${dark ? " fog" : ""}`}>{kind}</span>
                <h3 className="az" style={{ margin: 0, fontSize: "clamp(26px, 2.4vw, 36px)" }}>
                    {name}
                </h3>
            </div>
            {right}
        </div>
    );
}

export function Shipped({ projects }: { projects: ProjectMeta[] }) {
    const by = (k: string) => projects.find((p) => p.key === k);
    const hub = by("ensiahub"),
        foss = by("fossflash"),
        cast = by("etcast"),
        train = by("trainingsessions"),
        ai = by("aijourney"),
        days = by("techdays"),
        reels = by("techreels"),
        quant = by("quantumcorner"),
        read = by("readit");
    const rest = projects.filter(
        (p) => ![hub, foss, cast, train, ai, days, reels, quant, read].includes(p),
    );
    return (
        <section
            id="work"
            style={
                {
                    viewTimelineName: "--t-work",
                    borderTop: "1px solid var(--line)",
                } as React.CSSProperties
            }
        >
            <div className="wrap sec">
                <div
                    className="reveal"
                    style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 56 }}
                >
                    <h2 className="az h2">
                        Between the <span className="gtext">events</span>
                    </h2>
                    <p className="lead" style={{ margin: 0 }}>
                        Events last a few days. These run all year, and every one of them is run by
                        members.
                    </p>
                </div>
                <div className="g-bento">
                    {hub && (
                        <article
                            className="cell b-hub reveal"
                            style={{
                                background:
                                    "radial-gradient(70% 60% at 60% 40%, rgba(18,194,240,.16), transparent 70%), var(--deep)",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    gap: 16,
                                }}
                            >
                                <span className="mono fog">{hub.kind}</span>
                                <span className="mono fog">{hub.byline}</span>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <img
                                    className="hub-logo"
                                    src="/brand/ensia-hub.svg"
                                    alt="ENSIA Hub logo"
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                <h3
                                    className="xp"
                                    style={{
                                        margin: 0,
                                        fontSize: "clamp(28px, 2.6vw, 40px)",
                                        lineHeight: 1.05,
                                    }}
                                >
                                    {hub.name}
                                </h3>
                                <p className="fog" style={{ margin: 0, maxWidth: "44ch" }}>
                                    {hub.desc}
                                </p>
                                {hub.href && (
                                    <a
                                        className="btn btn-line"
                                        href={hub.href}
                                        style={{ alignSelf: "flex-start", marginTop: 6 }}
                                    >
                                        Open {hub.name} <Icon name="arrow-ne" size={18} />
                                    </a>
                                )}
                            </div>
                        </article>
                    )}
                    {foss && (
                        <article
                            id="foss"
                            className="cell b-foss reveal"
                            style={{ background: "var(--grad)", color: "var(--ink)" }}
                        >
                            <CellHead
                                kind={foss.kind}
                                name={foss.name}
                                dark={false}
                                right={
                                    <svg
                                        width="48"
                                        height="48"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#04140D"
                                        strokeWidth="1.6"
                                        aria-hidden="true"
                                    >
                                        <path d="M13.5 3 5.5 13.5h6l-1 7.5 8-10.5h-6z" />
                                    </svg>
                                }
                            />
                            <p style={{ margin: 0, maxWidth: "38ch", fontWeight: 500 }}>
                                {foss.desc}
                            </p>
                            <NewsletterForm />
                        </article>
                    )}
                    {cast && (
                        <article
                            className="cell b-cast reveal"
                            style={{ background: "var(--deep)" }}
                        >
                            <CellHead
                                kind={cast.kind}
                                name={cast.name}
                                right={<Icon name="mic" variant="g" size={44} />}
                            />
                            <a
                                className="cast-ep cut"
                                href={ETCAST_EPISODE.href}
                                aria-label={`Watch ETCast episode ${ETCAST_EPISODE.number} on YouTube`}
                            >
                                <Image
                                    src={ETCAST_EPISODE.thumb}
                                    alt=""
                                    fill
                                    sizes="(max-width: 900px) 100vw, 520px"
                                    style={{ objectFit: "cover" }}
                                />
                                <span className="play" aria-hidden="true">
                                    <svg width="22" height="22" viewBox="0 0 24 24">
                                        <path d="M7 4.5v15l13-7.5z" fill="#04140D" />
                                    </svg>
                                </span>
                            </a>
                            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                <span className="mono" style={{ color: "var(--cyan)" }}>
                                    Episode {String(ETCAST_EPISODE.number).padStart(2, "0")} ·{" "}
                                    {ETCAST_EPISODE.subtitle}
                                </span>
                                <p
                                    lang="ar"
                                    dir="rtl"
                                    style={{
                                        margin: 0,
                                        fontWeight: 700,
                                        fontSize: 19,
                                        textAlign: "start",
                                    }}
                                >
                                    {ETCAST_EPISODE.title}
                                </p>
                            </div>
                            <p className="fog" style={{ margin: 0, maxWidth: "44ch" }}>
                                {cast.desc}
                            </p>
                        </article>
                    )}
                    {train && (
                        <article
                            className="cell b-train reveal"
                            style={{
                                background:
                                    "radial-gradient(60% 80% at 100% 0%, rgba(25,240,139,.12), transparent 70%), var(--deep)",
                            }}
                        >
                            <CellHead
                                kind={train.kind}
                                name={train.name}
                                right={<Icon name="workshop" variant="g" size={44} />}
                            />
                            <div className="tsteps" aria-hidden="true">
                                <span>
                                    <b className="az gtext">01</b> Theory
                                </span>
                                <span className="tline" />
                                <span>
                                    <b className="az gtext">02</b> Practice
                                </span>
                                <span className="tline" />
                                <span>
                                    <b className="az gtext">03</b> Real task
                                </span>
                            </div>
                            <p className="fog" style={{ margin: 0, maxWidth: "52ch" }}>
                                {train.desc}
                            </p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                {CELLS.map((c) => (
                                    <span key={c.key} className="chip">
                                        {c.name}
                                    </span>
                                ))}
                            </div>
                        </article>
                    )}
                    {ai && (
                        <article
                            className="cell b-ai reveal"
                            style={{ background: "var(--grad)", color: "var(--ink)" }}
                        >
                            <CellHead kind={ai.kind} name={ai.name} dark={false} />
                            <svg
                                viewBox="0 0 320 90"
                                width="100%"
                                height="90"
                                aria-hidden="true"
                                style={{ overflow: "visible" }}
                            >
                                <path
                                    className="ai-path"
                                    d="M8 70C60 70 70 20 120 20S180 70 230 70 290 20 312 20"
                                    fill="none"
                                    stroke="#04140D"
                                    strokeWidth="2.5"
                                    strokeDasharray="6 7"
                                />
                                {[
                                    [8, 70],
                                    [120, 20],
                                    [230, 70],
                                    [312, 20],
                                ].map(([x, y], i) => (
                                    <circle
                                        key={x}
                                        cx={x}
                                        cy={y}
                                        r={i === 3 ? 9 : 6}
                                        fill={i === 3 ? "#04140D" : "#E9F3F1"}
                                        stroke="#04140D"
                                        strokeWidth="2.5"
                                    />
                                ))}
                            </svg>
                            <p style={{ margin: 0, maxWidth: "40ch", fontWeight: 500 }}>
                                {ai.desc}
                            </p>
                        </article>
                    )}
                    {days && (
                        <article
                            className="cell b-days reveal"
                            style={{ background: "var(--deep)" }}
                        >
                            <CellHead
                                kind={days.kind}
                                name={days.name}
                                right={<Icon name="calendar" size={40} />}
                            />
                            <p className="fog" style={{ margin: 0, maxWidth: "52ch" }}>
                                {days.desc}
                            </p>
                            <div className="tsteps" aria-hidden="true">
                                <span>
                                    <b className="az gtext">01</b> Presentations
                                </span>
                                <span className="tline" />
                                <span>
                                    <b className="az gtext">02</b> Workshops
                                </span>
                            </div>
                            <div className="g-days">
                                {TECH_DAYS.map((d) => (
                                    <div key={d.name} className="day">
                                        {d.by && (
                                            <span className="mono" style={{ color: "var(--cyan)" }}>
                                                {d.by}
                                            </span>
                                        )}
                                        <span
                                            className="xp"
                                            style={{ fontSize: 22, lineHeight: 1.1 }}
                                        >
                                            {d.name}
                                        </span>
                                        {d.desc && (
                                            <span className="fog" style={{ fontSize: 15 }}>
                                                {d.desc}
                                            </span>
                                        )}
                                        {d.figure && (
                                            <span
                                                style={{
                                                    display: "flex",
                                                    alignItems: "baseline",
                                                    gap: 10,
                                                    marginTop: "auto",
                                                }}
                                            >
                                                <span className="az gtext" style={{ fontSize: 30 }}>
                                                    {d.figure[0]}
                                                </span>
                                                <span className="mono fog">{d.figure[1]}</span>
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </article>
                    )}
                    {reels && (
                        <article
                            className="cell b-reels reveal"
                            style={{ background: "var(--trench)" }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-start",
                                    gap: 16,
                                }}
                            >
                                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                    <span className="mono fog">{reels.kind}</span>
                                    <h3
                                        className="az"
                                        style={{ margin: 0, fontSize: "clamp(26px, 2.4vw, 36px)" }}
                                    >
                                        {reels.name}
                                    </h3>
                                </div>
                                {reels.upcoming && <span className="soon">Coming this season</span>}
                            </div>
                            <div className="reel" aria-hidden="true">
                                {REEL_SCREENS.map((r) => (
                                    <span key={r.tag} className="reel-f">
                                        <span className="reel-tag">{r.tag}</span>
                                        <span className="reel-art">
                                            <Icon name={r.icon} variant={r.variant} size={38} />
                                        </span>
                                        <span className="reel-side">
                                            <svg width="14" height="14" viewBox="0 0 24 24">
                                                <path
                                                    d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"
                                                    fill="#19F08B"
                                                />
                                            </svg>
                                            <svg width="14" height="14" viewBox="0 0 24 24">
                                                <path
                                                    d="M4 5h16v11H9l-5 4z"
                                                    fill="none"
                                                    stroke="#E9F3F1"
                                                    strokeWidth="2"
                                                />
                                            </svg>
                                            <svg width="14" height="14" viewBox="0 0 24 24">
                                                <path
                                                    d="M4 12l16-8-6 16-3-6z"
                                                    fill="none"
                                                    stroke="#E9F3F1"
                                                    strokeWidth="2"
                                                />
                                            </svg>
                                        </span>
                                        <span className="reel-cap">
                                            <b />
                                            <b />
                                        </span>
                                        <span className="reel-bar" />
                                    </span>
                                ))}
                            </div>
                            <p className="fog" style={{ margin: 0, maxWidth: "40ch" }}>
                                {reels.desc}
                            </p>
                        </article>
                    )}
                    {quant && (
                        <article
                            className="cell b-quant reveal"
                            style={{
                                background: "var(--deep)",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 12,
                                    maxWidth: "30ch",
                                }}
                            >
                                <span className="mono fog">{quant.kind}</span>
                                <h3
                                    className="az"
                                    style={{ margin: 0, fontSize: "clamp(24px, 2.2vw, 32px)" }}
                                >
                                    {quant.name}
                                </h3>
                                <p className="fog" style={{ margin: 0 }}>
                                    {quant.desc}
                                </p>
                            </div>
                            <Bloch />
                        </article>
                    )}
                    {read && (
                        <article
                            className="cell b-read reveal"
                            style={{ background: "var(--foam)", color: "var(--ink)" }}
                        >
                            <span className="mono">{read.kind}</span>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "flex-end",
                                    gap: 24,
                                }}
                            >
                                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                    <h3
                                        className="az"
                                        style={{ margin: 0, fontSize: "clamp(34px, 3.4vw, 52px)" }}
                                    >
                                        {read.name}
                                    </h3>
                                    <p style={{ margin: 0, maxWidth: "40ch", fontWeight: 500 }}>
                                        {read.desc}
                                    </p>
                                </div>
                                <svg
                                    width="96"
                                    height="96"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#04140D"
                                    strokeWidth="1.2"
                                    aria-hidden="true"
                                    style={{ flex: "none" }}
                                >
                                    <path d="M4 5.5c3-1 6-1 8 1 2-2 5-2 8-1v13c-3-1-6-1-8 1-2-2-5-2-8-1zM12 6.5v13" />
                                </svg>
                            </div>
                        </article>
                    )}
                    {rest.map((p) => (
                        <article
                            key={p.key}
                            className="cell b-any reveal"
                            style={{ background: "var(--deep)" }}
                        >
                            <CellHead
                                kind={p.kind}
                                name={p.name}
                                right={<Icon name="jelly" variant="g" size={44} />}
                            />
                            <p className="fog" style={{ margin: 0, maxWidth: "44ch" }}>
                                {p.desc}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function CellsSection() {
    return (
        <section
            id="cells"
            style={
                {
                    viewTimelineName: "--t-div",
                    borderTop: "1px solid var(--line)",
                } as React.CSSProperties
            }
        >
            <div className="wrap sec">
                <div
                    className="reveal"
                    style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 48 }}
                >
                    <h2 className="az h2">
                        {CELLS.length} cells. <span className="gtext">Pick yours.</span>
                    </h2>
                    <p className="lead" style={{ margin: 0 }}>
                        Every member belongs to a cell. It is where you train, where you get your
                        first real responsibilities, and who you work with all season. You rank
                        three when you apply.
                    </p>
                </div>
                <Cells />
            </div>
        </section>
    );
}

export function Crew({ crew }: { crew: Crew }) {
    return (
        <section
            id="crew"
            style={
                {
                    viewTimelineName: "--t-crew",
                    borderTop: "1px solid var(--line)",
                } as React.CSSProperties
            }
        >
            <div className="wrap sec" style={{ display: "flex", flexDirection: "column", gap: 40 }}>
                <div
                    className="reveal"
                    style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                    <h2 className="az h2">
                        The <span className="gtext">crew</span>
                    </h2>
                    <p className="lead" style={{ margin: 0 }}>
                        The {CREW_SEASON} managers. They interview applicants, lead the cells and
                        run every event on this page, while sitting the same exams as you.
                    </p>
                </div>
                <CrewSection crew={crew} />
                <Link className="seat" href="/registrations">
                    <span style={{ display: "flex", alignItems: "center", gap: 18 }}>
                        <img src="/mascots/bot-hi.svg" alt="" width={56} height={66} />
                        <span style={{ display: "flex", flexDirection: "column" }}>
                            <span className="az gtext" style={{ fontSize: 18 }}>
                                Your seat
                            </span>
                            <span style={{ fontWeight: 600 }}>Next season, this could be you.</span>
                        </span>
                    </span>
                    <span className="btn btn-glow chamfer" style={{ minHeight: 44 }}>
                        Join ETC
                    </span>
                </Link>
            </div>
        </section>
    );
}

export function Feed({ club }: { club: Club }) {
    return (
        <section
            id="feed"
            style={
                {
                    viewTimelineName: "--t-feed",
                    borderTop: "1px solid var(--line)",
                } as React.CSSProperties
            }
        >
            <div
                className="wrap"
                style={{
                    paddingTop: "var(--sec)",
                    paddingBottom: 64,
                    display: "flex",
                    flexDirection: "column",
                    gap: 40,
                }}
            >
                <div
                    className="reveal"
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        gap: 24,
                        flexWrap: "wrap",
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <h2 className="az h2">
                            Live from <span className="gtext">the deep</span>
                        </h2>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                            <Social name="instagram" size={22} />
                            <b>{SITE.instagramHandle}</b>
                            <span className="fog">{SITE.instagramFollowers} followers</span>
                        </div>
                    </div>
                    <a className="btn btn-line" href={club.insta_link}>
                        Follow on Instagram <Icon name="arrow-ne" size={18} />
                    </a>
                </div>
                <div className="feed">
                    {FEED.map((f) => (
                        <a
                            key={f.src}
                            className={`wipe${f.tall ? " tall" : ""}`}
                            href={club.insta_link}
                            aria-label={`On Instagram: ${f.alt}`}
                        >
                            <Image
                                src={f.src}
                                alt={f.alt}
                                fill
                                sizes="(max-width: 900px) 50vw, 25vw"
                            />
                        </a>
                    ))}
                </div>
            </div>
            <div
                aria-hidden="true"
                style={{
                    overflow: "hidden",
                    padding: "24px 0",
                    borderTop: "1px solid var(--line)",
                    borderBottom: "1px solid var(--line)",
                }}
            >
                <div className="marq">
                    {[0, 1].map((k) => (
                        <span key={k} style={{ display: "contents" }}>
                            <span className="mq">{SITE.hashtag}</span>
                            <span className="mq solid">Make it exist</span>
                        </span>
                    ))}
                </div>
            </div>
            <div
                className="wrap"
                style={{
                    paddingTop: 72,
                    paddingBottom: "var(--sec)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 32,
                    alignItems: "center",
                }}
            >
                <h2 className="az h2" style={{ textAlign: "center" }}>
                    They trusted <span className="gtext">us</span>
                </h2>
                <p className="fog" style={{ margin: 0, textAlign: "center", maxWidth: "48ch" }}>
                    Companies that sponsored, hosted or partnered with ETC events.
                </p>
                <ul className="trusted">
                    {PARTNERS.map((p) => (
                        <li key={p.name} className="tlogo chamfer reveal">
                            <Image
                                src={p.src}
                                alt={p.name}
                                fill
                                sizes="(max-width: 560px) 45vw, (max-width: 900px) 30vw, 200px"
                                style={{ objectFit: "contain" }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export function Join({ club }: { club: Club }) {
    return (
        <section
            id="join"
            style={
                {
                    viewTimelineName: "--t-join",
                    borderTop: "1px solid var(--line)",
                    background:
                        "radial-gradient(50% 70% at 75% 60%, rgba(18,194,240,.14), transparent 70%)",
                } as React.CSSProperties
            }
        >
            <div className="wrap sec g-join">
                <div
                    className="reveal"
                    style={{ display: "flex", flexDirection: "column", gap: 28 }}
                >
                    <h2
                        className="az"
                        style={{ margin: 0, fontSize: "clamp(52px, 8vw, 128px)", lineHeight: 0.92 }}
                    >
                        Join
                        <br />
                        <span className="gtext">the crew</span>
                    </h2>
                    <p
                        style={{
                            margin: 0,
                            maxWidth: "44ch",
                            fontSize: "clamp(18px, 1.6vw, 22px)",
                            lineHeight: 1.45,
                        }}
                    >
                        Open to every university student. You don&apos;t need experience in
                        your cell: Training Sessions start from zero. You need to show up.
                    </p>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                        <Link className="btn btn-glow chamfer" href="/registrations">
                            Join ETC <Arrow color="#04140D" />
                        </Link>
                        <a className="btn btn-line" href={club.discord_link}>
                            <Social name="discord" />
                            Ask us on Discord
                        </a>
                    </div>
                </div>
                <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                    <img
                        className="bot bob"
                        src="/mascots/bot-hi.svg"
                        alt="The ETC robot mascot waving hello"
                        style={{ width: "min(380px, 80%)", height: "auto" }}
                    />
                </div>
            </div>
        </section>
    );
}
