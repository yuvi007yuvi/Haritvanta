import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1440px" },
    extend: {
      colors: {
        bhagwa: { DEFAULT: "#E98228", dark: "#C96A17", light: "#F6C9A0" },
        forest: { DEFAULT: "#173F32", deep: "#0F2C23", soft: "#2A5646", mist: "#DDE5DF" },
        paper: "#F6F7F3",
        charcoal: "#202722",
        muted: "#777F79",
        line: "#E2E5DF",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        eyebrow: ["0.75rem", { lineHeight: "1rem", letterSpacing: "0.16em" }],
      },
      maxWidth: { site: "1360px" },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
        quart: "cubic-bezier(0.76, 0, 0.24, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
