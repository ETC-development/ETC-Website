import type { Config } from "tailwindcss";

// Tokens mirror the CSS variables in src/app/globals.css (identity system v2).
const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                abyss: "#040D12",
                deep: "#0A1A21",
                trench: "#10252E",
                foam: "#E9F3F1",
                fog: "#8FA3A6",
                signal: "#19F08B",
                cyan: "#12C2F0",
                ink: "#04140D",
                etcode: "#FF8A2A",
                danger: "#FF6B5E",
            },
            fontFamily: {
                azonix: ["var(--font-azonix)", "Archivo", "sans-serif"],
                archivo: ["var(--font-archivo)", "ui-sans-serif", "system-ui", "sans-serif"],
                mono: ["var(--font-mono)", "ui-monospace", "monospace"],
            },
            maxWidth: {
                wrap: "1320px",
            },
        },
    },
    plugins: [],
};
export default config;
