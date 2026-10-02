"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Application error:", error);
    }, [error]);
    return (
        <main id="main" className="split" style={{ minHeight: "100vh" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <span className="mono" style={{ color: "var(--danger)" }}>
                    Signal lost
                </span>
                <h1 className="az" style={{ margin: 0, fontSize: "clamp(40px, 6vw, 80px)" }}>
                    Something <span className="gtext">broke</span>
                </h1>
                <p className="fog" style={{ margin: 0, maxWidth: "42ch", fontSize: 19 }}>
                    The page hit an error on our side. Try again, and if it keeps happening tell us
                    on Discord.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <button className="btn btn-glow chamfer" onClick={reset}>
                        Try again
                    </button>
                    <Link className="btn btn-line" href="/">
                        Back to ETC
                    </Link>
                </div>
            </div>
            <div className="botcol" style={{ display: "flex", justifyContent: "center" }}>
                <img
                    className="bot bob"
                    src="/mascots/bot-phone.svg"
                    alt=""
                    style={{ width: "min(300px, 70%)", height: "auto" }}
                />
            </div>
        </main>
    );
}
