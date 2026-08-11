import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#0B0B0C",
        "bg-surface": "#16171A",
        "bg-surface-hover": "#1E2023",
        "border-hairline": "rgba(255,255,255,0.08)",
        accent: "#BAFF26",
        "accent-dim": "rgba(186,255,38,0.12)",
        "text-primary": "#F5F6F0",
        "text-secondary": "#9A9CA3",
        "text-tertiary": "#5C5E64",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        card: "20px",
        inner: "10px",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.35)",
        "card-hover": "0 16px 40px rgba(0,0,0,0.5)",
        "card-lit": "0 20px 48px rgba(0,0,0,0.55), 0 0 24px rgba(186,255,38,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
