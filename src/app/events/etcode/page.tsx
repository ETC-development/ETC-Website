/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/interactive";
import { Footer, Header } from "@/components/sections";
import { Arrow, Icon, Social } from "@/components/ui";
import { CLUB } from "@/data/club";

export const metadata: Metadata = {
    title: "ETCode",
    description:
        "ETCode: competitive programming at ENSIA, three to a team, any language. An ETC event since June 2023.",
};

const EDITIONS = [
    {
        year: "2023",
        photo: "/photos/night-timer.webp",
        alt: "A competitor watches the clock at the first ETCode",
        text: "First edition, June 15 to 20. 18 teams of three, one long night of problems.",
    },
    {
        year: "2024",
        logo: "/brand/covers/etcode24.jpg",
        text: "ETCode 2k24. [Recap: teams, theme and winners.]",
    },
    {
        year: "2025",
        photo: "/photos/hall-wide.webp",
        alt: "A packed hall of teams coding during ETCode 2025",
        text: "June 17 to 18. A hackathon on AI and programming, supported by Ramy.",
    },
    {
        year: "2026",
        logo: "/brand/etcode4/e4-orange.svg",
        text: "The orange edition, with Turkinvest. [Recap: teams and champions.]",
        hot: true,
    },
];

const STEPS = [
    {
        icon: "users" as const,
        title: "Team up",
        text: "Three students per team. Still missing teammates? Ask on the ETC Discord.",
    },
    {
        icon: "dev" as const,
        title: "Solve",
        text: "Problem sets climb from easy to hard. Write them in whatever language you code best.",
    },
    {
        icon: "trophy" as const,
        title: "Play for hints",
        text: "Between rounds, mini-games against other teams win hints, and a lot of fun!",
    },
];

const GALLERY = [
    ["/photos/winners.webp", "First-place team holding their prize at ETCode 2025"],
    ["/photos/yellow-team.webp", "A team in yellow ETCode shirts working at their table"],
    ["/photos/orange-team.webp", "A team in orange and red working together on laptops"],
    ["/photos/group-huddle.webp", "A team discussing their solution"],
    ["/photos/awards-line.webp", "Finalists lined up on stage for the awards"],
    ["/photos/stand.webp", "The ETCode registration desk"],
];

const FAQ = [
    {
        q: "Who can take part?",
        a: "[Eligibility for this edition: ENSIA students only, or open to other schools.]",
    },
    {
        q: "Do I need a full team?",
        a: "Yes, teams are three students. If you are still looking, ask on the ETC Discord before registrations close.",
    },
    {
        q: "Which languages can we use?",
        a: "Any language you like. Pick the one your team writes fastest.",
    },
    {
        q: "Is AI assistance allowed?",
        a: "[Rule for this edition. In 2023, AI help was only available as timed minutes won in the mini-games.]",
    },
    { q: "What do winners get?", a: "[Prizes for this edition.]" },
];

export default function ETCodePage() {
    const club = CLUB;
    return (
        <>
            <Header club={club} current="Events" />
            <main id="main">
                <section
                    style={{
                        background:
                            "radial-gradient(55% 60% at 80% 10%, rgba(255,138,42,.18), transparent 70%), radial-gradient(40% 40% at 10% 30%, rgba(18,194,240,.10), transparent 70%)",
                    }}
                >
                    <div
                        className="wrap"
                        style={{
                            paddingTop: 48,
                            paddingBottom: 64,
                            display: "flex",
                            flexDirection: "column",
                            gap: 44,
                        }}
                    >
                        <nav
                            aria-label="Breadcrumb"
                            className="mono fog"
                            style={{ display: "flex", gap: 10 }}
                        >
                            <Link href="/#universe" style={{ textDecoration: "none" }}>
                                ETC universe
                            </Link>
                            <span aria-hidden="true">/</span>
                            <span style={{ color: "var(--foam)" }} aria-current="page">
                                ETCode
                            </span>
                        </nav>
                        <div className="g-ehero">
                            <div
                                className="rise"
                                style={{ display: "flex", flexDirection: "column", gap: 30 }}
                            >
                                <h1 style={{ margin: 0 }}>
                                    <img
                                        src="/brand/etcode.svg"
                                        alt="ETCode"
                                        style={{
                                            width: "min(680px, 100%)",
                                            height: "auto",
                                            display: "block",
                                            filter: "drop-shadow(0 0 40px rgba(255,138,42,.25))",
                                        }}
                                    />
                                </h1>
                                <p
                                    style={{
                                        margin: 0,
                                        maxWidth: "32ch",
                                        fontSize: "clamp(21px, 2vw, 28px)",
                                        lineHeight: 1.3,
                                    }}
                                >
                                    Competitive programming, three to a team. Any language. Problems
                                    from easy to brutal.
                                </p>
                                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                                    <a className="btn btn-ev chamfer" href="#register">
                                        Register for ETCode <Arrow color="#04140D" />
                                    </a>
                                    <a className="btn btn-line" href="#faq">
                                        Read the rules
                                    </a>
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                    <span className="live" aria-hidden="true" />
                                    <span className="mono">Next edition</span>
                                </div>
                                <div
                                    role="timer"
                                    aria-label="Countdown starts when the date is announced"
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "repeat(3, minmax(0,1fr))",
                                        gap: 8,
                                    }}
                                >
                                    {["Days", "Hours", "Minutes"].map((u) => (
                                        <div
                                            key={u}
                                            style={{
                                                background: "var(--deep)",
                                                padding: "20px 18px 14px",
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 8,
                                                boxShadow: "inset 0 2px 0 var(--etcode)",
                                            }}
                                        >
                                            <span className="az evtext" style={{ fontSize: 56 }}>
                                                --
                                            </span>
                                            <span className="mono fog">{u}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div
                            className="g-meta"
                            style={{ paddingTop: 28, borderTop: "1px solid var(--line)" }}
                        >
                            {(
                                [
                                    ["calendar", "Date", "[NEXT EDITION DATE]"],
                                    ["pin", "Where", "ENSIA, Sidi Abdellah"],
                                    ["users", "Teams", "3 students"],
                                    ["trophy", "Editions", "4, since June 2023"],
                                ] as const
                            ).map(([ic, k, v]) => (
                                <div
                                    key={k}
                                    style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
                                >
                                    <Icon name={ic} size={24} style={{ marginTop: 2 }} />
                                    <span
                                        style={{ display: "flex", flexDirection: "column", gap: 2 }}
                                    >
                                        <span className="mono fog">{k}</span>
                                        <span style={{ fontWeight: 700, fontSize: 18 }}>{v}</span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="wrap">
                    <div
                        className="cut"
                        style={{ position: "relative", height: "clamp(300px, 38vw, 540px)" }}
                    >
                        <Image
                            src="/photos/etcode-night.webp"
                            alt="A hall full of ETCode teams coding at night under purple light"
                            fill
                            priority
                            sizes="(max-width: 1320px) 100vw, 1320px"
                            style={{ objectFit: "cover", objectPosition: "50% 58%" }}
                        />
                    </div>
                </div>

                <section className="wrap sec">
                    <h2
                        className="az"
                        style={{ margin: "0 0 64px", fontSize: "clamp(32px, 4.2vw, 60px)" }}
                    >
                        How it <span className="evtext">works</span>
                    </h2>
                    <div className="g-steps">
                        <div className="ebus" aria-hidden="true" />
                        {STEPS.map((s) => (
                            <div
                                key={s.title}
                                style={{ display: "flex", flexDirection: "column", gap: 20 }}
                            >
                                <span className="sring">
                                    <Icon name={s.icon} size={28} />
                                </span>
                                <h3
                                    className="xp"
                                    style={{ margin: 0, fontSize: 30, lineHeight: 1.05 }}
                                >
                                    {s.title}
                                </h3>
                                <p className="fog" style={{ margin: 0, maxWidth: "34ch" }}>
                                    {s.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section style={{ borderTop: "1px solid var(--line)" }}>
                    <div className="wrap sec">
                        <h2
                            className="az"
                            style={{ margin: "0 0 56px", fontSize: "clamp(32px, 4.2vw, 60px)" }}
                        >
                            Four <span className="evtext">editions</span>
                        </h2>
                        <div className="g-ed">
                            {EDITIONS.map((e) => (
                                <article
                                    key={e.year}
                                    style={{ display: "flex", flexDirection: "column", gap: 18 }}
                                >
                                    <div
                                        className="cut"
                                        style={{
                                            position: "relative",
                                            aspectRatio: "3 / 4",
                                            background:
                                                "radial-gradient(60% 50% at 50% 50%, rgba(255,60,60,.18), transparent 70%), var(--deep)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {e.photo ? (
                                            <Image
                                                className={e.hot ? undefined : "ink-photo"}
                                                src={e.photo}
                                                alt={e.alt ?? ""}
                                                fill
                                                sizes="(max-width: 900px) 50vw, 320px"
                                                style={{ objectFit: "cover" }}
                                            />
                                        ) : (
                                            <img
                                                src={e.logo}
                                                alt={`ETCode ${e.year} logo`}
                                                style={
                                                    e.logo?.endsWith(".svg")
                                                        ? {
                                                              width: "50%",
                                                              filter: "drop-shadow(0 0 40px rgba(255,138,42,.35))",
                                                          }
                                                        : {
                                                              // Raster logos are 150px; never upscale them.
                                                              width: "min(62%, 150px)",
                                                              borderRadius: "50%",
                                                          }
                                                }
                                            />
                                        )}
                                    </div>
                                    <span
                                        className={`az${e.hot ? " evtext" : ""}`}
                                        style={{ fontSize: 44 }}
                                    >
                                        {e.year}
                                    </span>
                                    <p className="fog" style={{ margin: 0, fontSize: 16 }}>
                                        {e.text}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section aria-label="Photos from ETCode" style={{ paddingBottom: "var(--sec)" }}>
                    <div
                        className="wrap"
                        style={{ display: "flex", flexDirection: "column", gap: 20 }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: 16,
                            }}
                        >
                            <span className="mono fog">From @etc_.club</span>
                            <a
                                href={club.insta_link}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    textDecoration: "none",
                                    fontWeight: 600,
                                }}
                            >
                                <Social name="instagram" />
                                More on Instagram
                            </a>
                        </div>
                        <div
                            className="strip"
                            tabIndex={0}
                            aria-label="Photo gallery, scroll sideways"
                        >
                            {GALLERY.map(([src, alt]) => (
                                <div key={src}>
                                    <Image
                                        src={src}
                                        alt={alt}
                                        fill
                                        sizes="340px"
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="faq" style={{ borderTop: "1px solid var(--line)" }}>
                    <div className="wrap sec g-2">
                        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
                            <h2
                                className="az"
                                style={{ margin: 0, fontSize: "clamp(32px, 4.2vw, 60px)" }}
                            >
                                Before you <span className="evtext">register</span>
                            </h2>
                            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                <span className="mono fog">Previously supported by</span>
                                <div
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "repeat(2, minmax(0,1fr))",
                                        gap: 8,
                                    }}
                                >
                                    {[
                                        ["Turkinvest", "/companies/turkinvest.webp"],
                                        ["Ramy", "/companies/ramy-logo.webp"],
                                    ].map(([name, src]) => (
                                        <div key={name} className="tlogo chamfer">
                                            <Image
                                                src={src}
                                                alt={name}
                                                fill
                                                sizes="240px"
                                                style={{ objectFit: "contain" }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Faq items={FAQ} />
                    </div>
                </section>

                <section
                    id="register"
                    style={{
                        position: "relative",
                        overflow: "hidden",
                        background: "var(--evgrad)",
                        color: "var(--ink)",
                    }}
                >
                    <img
                        className="manifesto-mark"
                        src="/brand/etc-emblem.webp"
                        alt=""
                        aria-hidden="true"
                        style={{ width: 520, right: -80 }}
                    />
                    <div
                        className="wrap sec g-2"
                        style={{ position: "relative", alignItems: "end" }}
                    >
                        <h2
                            className="az"
                            style={{
                                margin: 0,
                                fontSize: "clamp(38px, 5vw, 80px)",
                                lineHeight: 0.98,
                            }}
                        >
                            Bring two friends. Bring your A-game.
                        </h2>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 20,
                                alignItems: "flex-start",
                            }}
                        >
                            <p
                                style={{
                                    margin: 0,
                                    fontSize: 20,
                                    lineHeight: 1.45,
                                    maxWidth: "36ch",
                                    fontWeight: 500,
                                }}
                            >
                                Registrations open on [DATE] and close when the [N] team slots are
                                full.
                            </p>
                            <a className="btn btn-ink chamfer" href={club.discord_link}>
                                Get notified on Discord <Arrow />
                            </a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer club={club} />
        </>
    );
}
