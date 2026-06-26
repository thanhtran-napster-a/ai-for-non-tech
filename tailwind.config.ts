import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ["var(--font-caveat)", "cursive"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        cream: "#FFF8F0",
        coral: "#FF6B47",
        "coral-light": "#FFE0D6",
        "coral-dark": "#E04E2C",
        teal: "#2DD4BF",
        "teal-light": "#CCFBF1",
        amber: "#F59E0B",
        "amber-light": "#FEF3C7",
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 2s infinite",
        "pulse-slow": "pulse 3s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
