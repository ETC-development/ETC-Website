/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function NotFound() {
    return (
        <main id="main" className="split" style={{ minHeight: "100vh" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <span className="mono" style={{ color: "var(--cyan)" }}>
                    404, too deep
                </span>
                <h1 className="az" style={{ margin: 0, fontSize: "clamp(40px, 6vw, 80px)" }}>
                    Nothing <span className="gtext">down here</span>
                </h1>
                <p className="fog" style={{ margin: 0, maxWidth: "42ch", fontSize: 19 }}>
                    This page does not exist, or it moved. The jellyfish can take you back to the
                    surface.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    <Link className="btn btn-glow chamfer" href="/">
                        Back to ETC
                    </Link>
                    <Link className="btn btn-line" href="/#universe">
                        See the events
                    </Link>
                </div>
            </div>
            <div className="botcol" style={{ display: "flex", justifyContent: "center" }}>
                <img
                    className="bot bob"
                    src="/mascots/bot-card.svg"
                    alt=""
                    style={{ width: "min(300px, 70%)", height: "auto" }}
                />
            </div>
        </main>
    );
}
