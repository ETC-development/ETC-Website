"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { createClientSupabaseClient } from "@/lib/supabase/client";
import { Arrow, Check, Icon, Lockup, Social } from "@/components/ui";
import { APPLY_CELLS, LEVELS } from "@/data/cells";
import { REGISTRATION, SITE } from "@/data/club";

type Form = {
    fullname: string;
    email: string;
    level: string;
    github: string;
    ranks: number[];
    mot: Record<number, string>;
    about: string;
    why: string;
    agreed: boolean;
};
const EMPTY: Form = {
    fullname: "",
    email: "",
    level: "",
    github: "",
    ranks: [],
    mot: {},
    about: "",
    why: "",
    agreed: false,
};
const DRAFT_KEY = "etc-applicant-draft";

const words = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;
const okName = (s: string) => /^[A-Za-zÀ-ÿ\s'-]+$/.test(s) && s.trim().length > 2;
const okEmail = (s: string) => /^[a-zA-Z0-9._%+-]+@ensia\.edu\.dz$/.test(s.trim());
const okPara = (s: string) => words(s) >= 5;

const STEPS = [
    ["Identity", "Discord, name, level"],
    ["Cells", "Rank your top three"],
    ["About you", "Two short answers"],
    ["Review", "Check and send"],
];
const TIPS = [
    "Hi! Connect Discord first, and join the community.",
    "Your first choice counts most, but we read all three.",
    "No essays needed. Be specific about something you made.",
    "Last check. You can still go back and edit before you send.",
];
const BOTS = [
    "/mascots/bot-hi.svg",
    "/mascots/bot-card.svg",
    "/mascots/bot-phone.svg",
    "/mascots/bot-card.svg",
];

const supabaseReady = () =>
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export function RegisterFlow({ discordInvite }: { discordInvite: string }) {
    const [step, setStep] = useState(1);
    const [f, setF] = useState<Form>(EMPTY);
    const [tried, setTried] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [sending, setSending] = useState(false);
    const [sendError, setSendError] = useState("");

    useEffect(() => {
        try {
            const saved = localStorage.getItem(DRAFT_KEY);
            if (saved) setF({ ...EMPTY, ...JSON.parse(saved) });
        } catch {
            /* private mode: start empty */
        }
        if (!supabaseReady()) return;
        createClientSupabaseClient()
            .auth.getUser()
            .then(({ data }) => setUser(data.user))
            .catch(() => setUser(null));
    }, []);
    useEffect(() => {
        try {
            localStorage.setItem(DRAFT_KEY, JSON.stringify(f));
        } catch {
            /* ignore */
        }
    }, [f]);

    const set = <K extends keyof Form>(k: K, v: Form[K]) => setF((p) => ({ ...p, [k]: v }));
    const discordName = (user?.user_metadata?.full_name ||
        user?.user_metadata?.name ||
        "") as string;

    const err = {
        discord: tried && !user,
        fullname: tried && !okName(f.fullname),
        email: tried && !okEmail(f.email),
        level: tried && !f.level,
        ranks: tried && f.ranks.length < 3,
        mot: (i: number) => tried && !okPara(f.mot[f.ranks[i]] ?? ""),
        about: tried && !okPara(f.about),
        why: tried && !okPara(f.why),
        agreed: tried && !f.agreed,
    };
    const valid = (s: number) =>
        s === 1
            ? Boolean(user) && okName(f.fullname) && okEmail(f.email) && Boolean(f.level)
            : s === 2
              ? f.ranks.length === 3 && f.ranks.every((r) => okPara(f.mot[r] ?? ""))
              : s === 3
                ? okPara(f.about) && okPara(f.why)
                : f.agreed;

    async function connectDiscord() {
        if (!supabaseReady()) return setSendError("Sign-in is not configured on this environment.");
        await createClientSupabaseClient().auth.signInWithOAuth({
            provider: "discord",
            options: { redirectTo: `${location.origin}/auth/callback` },
        });
    }
    async function disconnect() {
        if (supabaseReady()) await createClientSupabaseClient().auth.signOut();
        setUser(null);
    }

    async function submit() {
        setSending(true);
        setSendError("");
        const dep = (i: number) => APPLY_CELLS[f.ranks[i]].key;
        const row = {
            fullname: f.fullname.trim(),
            email: f.email.trim(),
            level: f.level,
            discord: discordName,
            discord_id: user?.user_metadata?.provider_id
                ? parseInt(user.user_metadata.provider_id, 10)
                : null,
            self_description: f.about.trim(),
            dep_first_choice: dep(0),
            dep_second_choice: dep(1),
            dep_third_choice: dep(2),
            first_choice_motivation: (f.mot[f.ranks[0]] ?? "").trim(),
            second_choice_motivation: (f.mot[f.ranks[1]] ?? "").trim(),
            third_choice_motivation: (f.mot[f.ranks[2]] ?? "").trim(),
            selection_justification: f.why.trim(),
            github_portfolio: f.github.trim() || null,
        };
        try {
            const supabase = createClientSupabaseClient();
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const { error } = await supabase.from(REGISTRATION.table as any).insert(row as any);
            if (error) {
                setSendError(
                    error.code === "23505"
                        ? "You have already registered this season."
                        : "We could not send your application. Please try again.",
                );
                console.error("Registration error:", error);
            } else {
                localStorage.removeItem(DRAFT_KEY);
                setStep(5);
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        } catch (e) {
            console.error(e);
            setSendError("We could not reach the server. Check your connection and try again.");
        }
        setSending(false);
    }

    function next() {
        if (!valid(step)) {
            setTried(true);
            return;
        }
        setTried(false);
        if (step === 4) submit();
        else {
            setStep(step + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }
    const go = (s: number) => {
        setTried(false);
        setStep(s);
    };

    if (step === 5) return <Done email={f.email} discordInvite={discordInvite} />;

    const sidx = step - 1;
    return (
        <div className="rg-grid">
            <aside className="aside" aria-label="Registration progress">
                <img
                    src="/brand/etc-emblem.webp"
                    alt=""
                    aria-hidden="true"
                    style={{
                        position: "absolute",
                        right: -140,
                        bottom: -120,
                        width: 420,
                        opacity: 0.06,
                    }}
                />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 36,
                        position: "relative",
                    }}
                >
                    <div
                        className="intro"
                        style={{ display: "flex", flexDirection: "column", gap: 10 }}
                    >
                        <span className="az" style={{ fontSize: 30 }}>
                            Join <span className="gtext">ETC</span>
                        </span>
                        <span className="fog" style={{ fontSize: 15 }}>
                            About 8 minutes. Your answers save on this device as you go.
                        </span>
                    </div>
                    <ol className="steps">
                        {STEPS.map(([t, s], i) => (
                            <li
                                key={t}
                                className="st"
                                data-state={i < sidx ? "done" : i === sidx ? "now" : "todo"}
                                aria-current={i === sidx ? "step" : undefined}
                            >
                                <span className="bar" aria-hidden="true" />
                                <span className="dot" aria-hidden="true">
                                    {i < sidx && <Check />}
                                </span>
                                <span style={{ display: "flex", flexDirection: "column" }}>
                                    <span className="t">{t}</span>
                                    <span className="s">{s}</span>
                                </span>
                            </li>
                        ))}
                    </ol>
                </div>
                <div
                    className="bot-zone"
                    style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        gap: 14,
                        alignItems: "flex-start",
                    }}
                >
                    <p className="tip">{TIPS[sidx]}</p>
                    <img
                        className="bot bob"
                        src={BOTS[sidx]}
                        alt=""
                        style={{ width: 170, height: "auto", marginLeft: 12 }}
                    />
                </div>
            </aside>

            <main id="main" className="rg-main">
                {step === 1 && (
                    <div
                        className="rise"
                        style={{ display: "flex", flexDirection: "column", gap: 32 }}
                    >
                        <Heading n={1} a="Who are" b="you?" />
                        <div className="fld">
                            <span className="lbl">Discord account</span>
                            {user ? (
                                <div className="connect" data-ok="true">
                                    <span
                                        style={{ display: "flex", alignItems: "center", gap: 14 }}
                                    >
                                        {user.user_metadata?.avatar_url ? (
                                            <img
                                                src={user.user_metadata.avatar_url}
                                                alt=""
                                                width={44}
                                                height={44}
                                                style={{ borderRadius: "50%" }}
                                            />
                                        ) : (
                                            <span
                                                style={{
                                                    width: 44,
                                                    height: 44,
                                                    borderRadius: "50%",
                                                    background: "var(--grad)",
                                                }}
                                            />
                                        )}
                                        <span style={{ display: "flex", flexDirection: "column" }}>
                                            <b>{discordName}</b>
                                            <span
                                                className="help"
                                                style={{ color: "var(--signal)" }}
                                            >
                                                Connected
                                            </span>
                                        </span>
                                    </span>
                                    <button
                                        className="btn btn-line"
                                        style={{ minHeight: 44 }}
                                        onClick={disconnect}
                                    >
                                        Disconnect
                                    </button>
                                </div>
                            ) : (
                                <div className="connect">
                                    <span
                                        style={{ display: "flex", flexDirection: "column", gap: 4 }}
                                    >
                                        <b>Connect Discord</b>
                                        <span className="help">
                                            We use it to send interview times and add you to the
                                            server.
                                        </span>
                                    </span>
                                    <button className="btn btn-discord" onClick={connectDiscord}>
                                        <Social name="discord" size={20} />
                                        Connect
                                    </button>
                                </div>
                            )}
                            {err.discord && (
                                <span className="err" role="alert">
                                    Connect Discord to continue.
                                </span>
                            )}
                        </div>
                        <div className="g2">
                            <Field
                                id="f-name"
                                label="Full name"
                                value={f.fullname}
                                onChange={(v) => set("fullname", v)}
                                bad={err.fullname}
                                error="Enter your full name, letters only."
                                placeholder="As on your student card"
                                autoComplete="name"
                            />
                            <Field
                                id="f-email"
                                label="ENSIA email"
                                type="email"
                                value={f.email}
                                onChange={(v) => set("email", v)}
                                bad={err.email}
                                error="Use your @ensia.edu.dz address."
                                help="Only @ensia.edu.dz addresses are accepted."
                                placeholder="name@ensia.edu.dz"
                                autoComplete="email"
                            />
                        </div>
                        <div className="fld">
                            <span className="lbl" id="lvl-l">
                                Your level
                            </span>
                            <div
                                role="radiogroup"
                                aria-labelledby="lvl-l"
                                style={{ display: "flex", flexWrap: "wrap", gap: 8 }}
                            >
                                {LEVELS.map((l) => (
                                    <button
                                        key={l}
                                        className="lv"
                                        role="radio"
                                        aria-checked={f.level === l}
                                        onClick={() => set("level", l)}
                                    >
                                        {l}
                                    </button>
                                ))}
                            </div>
                            {err.level && (
                                <span className="err" role="alert">
                                    Pick your level.
                                </span>
                            )}
                        </div>
                        <Field
                            id="f-gh"
                            label="GitHub or portfolio (optional)"
                            value={f.github}
                            onChange={(v) => set("github", v)}
                            help="Not only for developers: Behance, Dribbble or a YouTube channel work too."
                            placeholder="github.com/yourname"
                        />
                    </div>
                )}

                {step === 2 && (
                    <div
                        className="rise"
                        style={{ display: "flex", flexDirection: "column", gap: 32 }}
                    >
                        <Heading
                            n={2}
                            a="Pick your"
                            b="cells"
                            sub="Tap three in order of preference. Tap again to remove one."
                        />
                        <div className="dgrid">
                            {APPLY_CELLS.map((d, i) => {
                                const r = f.ranks.indexOf(i);
                                return (
                                    <button
                                        key={d.key}
                                        className="dc"
                                        aria-pressed={r >= 0}
                                        aria-label={`${d.name}${r >= 0 ? `, choice ${r + 1}` : ""}`}
                                        onClick={() =>
                                            set(
                                                "ranks",
                                                r >= 0
                                                    ? f.ranks.filter((x) => x !== i)
                                                    : f.ranks.length < 3
                                                      ? [...f.ranks, i]
                                                      : f.ranks,
                                            )
                                        }
                                    >
                                        <Icon name={d.icon} variant="g" size={36} />
                                        <span
                                            style={{
                                                fontWeight: 800,
                                                fontSize: 17,
                                                fontStretch: "110%",
                                            }}
                                        >
                                            {d.name}
                                        </span>
                                        <span className="help" style={{ fontSize: 13 }}>
                                            {d.tag}
                                        </span>
                                        {r >= 0 && <span className="rk">{r + 1}</span>}
                                    </button>
                                );
                            })}
                        </div>
                        {err.ranks && (
                            <span className="err" role="alert">
                                Rank three cells to continue.
                            </span>
                        )}
                        {f.ranks.map((di, k) => (
                            <Field
                                key={di}
                                id={`mot-${di}`}
                                area
                                label={`Choice ${k + 1}: why ${APPLY_CELLS[di].name}?`}
                                value={f.mot[di] ?? ""}
                                onChange={(v) => set("mot", { ...f.mot, [di]: v })}
                                bad={err.mot(k)}
                                error="Write at least five words."
                                placeholder={`What would you like to do in ${APPLY_CELLS[di].name}?`}
                                help="A few honest sentences beat a long essay."
                                count
                            />
                        ))}
                    </div>
                )}

                {step === 3 && (
                    <div
                        className="rise"
                        style={{ display: "flex", flexDirection: "column", gap: 32 }}
                    >
                        <Heading n={3} a="Tell us" b="about you" />
                        <Field
                            id="f-about"
                            area
                            label="Describe yourself"
                            value={f.about}
                            onChange={(v) => set("about", v)}
                            bad={err.about}
                            error="Write at least five words."
                            placeholder="What do you like making? What have you built, organized or broken lately?"
                            help="Projects, clubs, hobbies: all of it counts."
                            count
                        />
                        <Field
                            id="f-why"
                            area
                            label="Why should we pick you?"
                            value={f.why}
                            onChange={(v) => set("why", v)}
                            bad={err.why}
                            error="Write at least five words."
                            placeholder="What will you bring to ETC this season?"
                            help="Be specific. Name an event, a project or a skill."
                            count
                        />
                    </div>
                )}

                {step === 4 && (
                    <div
                        className="rise"
                        style={{ display: "flex", flexDirection: "column", gap: 28 }}
                    >
                        <Heading n={4} a="One last" b="look" />
                        <div style={{ borderTop: "1px solid var(--line)" }}>
                            <Review label="Identity" onEdit={() => go(1)}>
                                <b>{f.fullname}</b>
                                <span className="fog">
                                    {f.email}, {f.level}
                                </span>
                                <span className="fog">Discord: {discordName}</span>
                            </Review>
                            <Review label="Cells" onEdit={() => go(2)}>
                                <span style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                    {f.ranks.map((di, k) => (
                                        <span
                                            key={di}
                                            className="chip"
                                            style={{ fontSize: 14, minHeight: 36 }}
                                        >
                                            <span
                                                className="az gtext"
                                                style={{ fontSize: 13, marginRight: 8 }}
                                            >
                                                {k + 1}
                                            </span>
                                            {APPLY_CELLS[di].name}
                                        </span>
                                    ))}
                                </span>
                            </Review>
                            <Review label="About you" onEdit={() => go(3)}>
                                <span
                                    className="fog"
                                    style={{
                                        display: "-webkit-box",
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                    }}
                                >
                                    {f.about}
                                </span>
                            </Review>
                        </div>
                        <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                            <button
                                className="box"
                                role="checkbox"
                                aria-checked={f.agreed}
                                aria-labelledby="agree-l"
                                onClick={() => set("agreed", !f.agreed)}
                            >
                                {f.agreed && <Check />}
                            </button>
                            <span id="agree-l" style={{ fontSize: 15, paddingTop: 3 }}>
                                I understand ETC will contact me on Discord and by email about my
                                application.
                            </span>
                        </div>
                        {err.agreed && (
                            <span className="err" role="alert">
                                Tick the box to send your application.
                            </span>
                        )}
                        {sendError && (
                            <p className="alert" role="alert">
                                {sendError}
                            </p>
                        )}
                    </div>
                )}

                <div className="rg-foot">
                    {step > 1 ? (
                        <button className="btn btn-line" onClick={() => go(step - 1)}>
                            Back
                        </button>
                    ) : (
                        <Link className="btn btn-line" href="/">
                            Cancel
                        </Link>
                    )}
                    <button className="btn btn-glow chamfer" onClick={next} disabled={sending}>
                        {step === 4 ? (sending ? "Sending" : "Send application") : "Continue"}{" "}
                        <Arrow color="#04140D" />
                    </button>
                </div>
            </main>
        </div>
    );
}

function Heading({ n, a, b, sub }: { n: number; a: string; b: string; sub?: string }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span className="mono" style={{ color: "var(--cyan)" }}>
                Step {n} of 4
            </span>
            <h1 className="az" style={{ margin: 0, fontSize: "clamp(30px, 3.6vw, 52px)" }}>
                {a} <span className="gtext">{b}</span>
            </h1>
            {sub && (
                <p className="fog" style={{ margin: 0, maxWidth: "56ch" }}>
                    {sub}
                </p>
            )}
        </div>
    );
}

function Field({
    id,
    label,
    value,
    onChange,
    bad,
    error,
    help,
    placeholder,
    type = "text",
    autoComplete,
    area,
    count,
}: {
    id: string;
    label: string;
    value: string;
    onChange: (v: string) => void;
    bad?: boolean;
    error?: string;
    help?: string;
    placeholder?: string;
    type?: string;
    autoComplete?: string;
    area?: boolean;
    count?: boolean;
}) {
    const describedBy = bad ? `${id}-err` : help ? `${id}-help` : undefined;
    const common = {
        id,
        className: "inp",
        value,
        placeholder,
        "aria-invalid": bad || undefined,
        "aria-describedby": describedBy,
    };
    return (
        <div className="fld">
            <label className="lbl" htmlFor={id}>
                {label}
            </label>
            {area ? (
                <textarea {...common} onChange={(e) => onChange(e.target.value)} />
            ) : (
                <input
                    {...common}
                    type={type}
                    autoComplete={autoComplete}
                    onChange={(e) => onChange(e.target.value)}
                />
            )}
            {bad && error && (
                <span id={`${id}-err`} className="err" role="alert">
                    {error}
                </span>
            )}
            {!bad && help && (
                <span
                    id={`${id}-help`}
                    className="help"
                    style={{ display: "flex", justifyContent: "space-between", gap: 12 }}
                >
                    <span>{help}</span>
                    {count && <span>{words(value)} words</span>}
                </span>
            )}
        </div>
    );
}

function Review({
    label,
    onEdit,
    children,
}: {
    label: string;
    onEdit: () => void;
    children: React.ReactNode;
}) {
    return (
        <div className="rv">
            <span className="mono fog rvl">{label}</span>
            <span style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
                {children}
            </span>
            <button
                className="btn btn-line"
                style={{ minHeight: 44, padding: "0 16px" }}
                onClick={onEdit}
            >
                Edit
            </button>
        </div>
    );
}

function Done({ email, discordInvite }: { email: string; discordInvite: string }) {
    return (
        <main
            id="main"
            className="split"
            style={{
                gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)",
                background:
                    "radial-gradient(45% 60% at 25% 50%, rgba(25,240,139,.14), transparent 70%)",
            }}
        >
            <div className="botcol" style={{ display: "flex", justifyContent: "center" }}>
                <img
                    className="bot bob"
                    src="/mascots/bot-hi.svg"
                    alt="The ETC robot mascot waving"
                    style={{ width: "min(340px, 70%)", height: "auto" }}
                />
            </div>
            <div className="rise" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                <span className="mono" style={{ color: "var(--signal)" }}>
                    Application received
                </span>
                <h1
                    className="az"
                    style={{ margin: 0, fontSize: "clamp(38px, 5.4vw, 80px)", lineHeight: 0.95 }}
                >
                    You&apos;re in
                    <br />
                    the <span className="gtext">signal</span>
                </h1>
                <p className="fog" style={{ margin: 0, maxWidth: "44ch", fontSize: 19 }}>
                    We received your application{email ? ` for ${email}` : ""}. Here is what happens
                    next.
                </p>
                <ol
                    style={{
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: 22,
                    }}
                >
                    {[
                        ["Application sent", "Today", "done"],
                        ["Interview invite on Discord", REGISTRATION.interviewWindow, "next"],
                        ["Results, then your first Training Session", REGISTRATION.resultsDate, "todo"],
                    ].map(([t, d, s]) => (
                        <li
                            key={t}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "28px minmax(0,1fr)",
                                gap: 16,
                            }}
                        >
                            <span
                                style={{
                                    width: 28,
                                    height: 28,
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: s === "done" ? "var(--grad)" : "transparent",
                                    boxShadow:
                                        s === "done"
                                            ? "none"
                                            : `inset 0 0 0 2px ${s === "next" ? "var(--cyan)" : "var(--line-2)"}`,
                                }}
                            >
                                {s === "done" && <Check />}
                            </span>
                            <span>
                                <b style={{ display: "block" }}>{t}</b>
                                <span className="fog" style={{ fontSize: 15 }}>
                                    {d}
                                </span>
                            </span>
                        </li>
                    ))}
                </ol>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <a className="btn btn-discord" href={discordInvite}>
                        <Social name="discord" size={20} />
                        Join the Discord
                    </a>
                    <Link className="btn btn-line" href="/">
                        Back to ETC
                    </Link>
                </div>
            </div>
        </main>
    );
}

export function RegisterClosed({ discordInvite }: { discordInvite: string }) {
    return (
        <main
            id="main"
            className="split"
            style={{
                background:
                    "radial-gradient(50% 60% at 75% 50%, rgba(18,194,240,.14), transparent 70%)",
            }}
        >
            <div className="rise" style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                <span className="mono" style={{ color: "var(--cyan)" }}>
                    Registrations closed for now
                </span>
                <h1
                    className="az"
                    style={{ margin: 0, fontSize: "clamp(40px, 6vw, 88px)", lineHeight: 0.95 }}
                >
                    The doors
                    <br />
                    open <span className="gtext">soon</span>
                </h1>
                <p className="fog" style={{ margin: 0, maxWidth: "42ch", fontSize: 19 }}>
                    The {SITE.season} recruitment opens{" "}
                    {REGISTRATION.opensAt
                        ? `on ${new Date(REGISTRATION.opensAt).toLocaleDateString("en-GB", { day: "numeric", month: "long" })}`
                        : "soon"}
                    . Turn on Discord notifications and you will hear it first.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <a className="btn btn-discord" href={discordInvite}>
                        <Social name="discord" size={20} />
                        Notify me on Discord
                    </a>
                    <Link className="btn btn-line" href="/">
                        Explore ETC meanwhile
                    </Link>
                </div>
            </div>
            <div className="botcol" style={{ display: "flex", justifyContent: "center" }}>
                <img
                    className="bot bob"
                    src="/mascots/bot-phone.svg"
                    alt="The ETC robot mascot checking its phone"
                    style={{ width: "min(320px, 70%)", height: "auto" }}
                />
            </div>
        </main>
    );
}

export function RegisterHeader() {
    return (
        <header
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                height: 72,
                padding: "0 clamp(16px,3vw,40px)",
                borderBottom: "1px solid var(--line)",
            }}
        >
            <Lockup emblem={42} word={15} label="Back to ETC home" />
            <span className="mono fog top-meta">Registrations, season {SITE.season}</span>
            <Link
                href="/"
                className="fog"
                style={{ fontWeight: 600, fontSize: 15, textDecoration: "none", padding: "12px 0" }}
            >
                Save and exit
            </Link>
        </header>
    );
}
