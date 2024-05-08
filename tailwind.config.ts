import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pr: "#0F172A",
        se: "#1E293B",
        pr2: "#020617",
        white: "#FFFFFF",
        vaiolet: "#6366F1",
        blue: "#38BDF8",
        slatee: "#3E4E59",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        promt: "url('/assets/img/section-bg.svg')",
        about: "url('/assets/img/aboutBG.png')",
      },
    },
  },
  plugins: [],
};
export default config;
