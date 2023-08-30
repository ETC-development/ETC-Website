import type { Config } from "tailwindcss";

const config: Config = {
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "#00B1E5",
        green: "#00F186",
        "dark-green": "#10221B",
        "less-dark-green": "#074F57",
        "black-carbon": "#0C0A00",
        "silver-white": "#DADBDD",
        "bg-color": "#002529",
      },
      fontFamily: {
        azonix: ["var(--font-azonix)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans"],
        comfortaa: ["var(--font-comfortaa)", "sans"],
      },
    },
  },
  plugins: [],
};
export default config;
