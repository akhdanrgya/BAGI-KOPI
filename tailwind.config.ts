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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0076F8",
        "primary-foreground": "var(--primary-foreground)",
      },
      fontFamily: {
        "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
        "open-sans": ["var(--font-open-sans)", "sans-serif"],
        "manrope": ["var(--font-manrope)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
