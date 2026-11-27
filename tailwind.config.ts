import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0A1628", 800: "#0F1F38", 700: "#16294A", 600: "#1F3560" },
        gold: { DEFAULT: "#C8A44E", light: "#E2C77F", dark: "#9C7C2C" },
        paper: "#F7F5EF",
      },
      fontFamily: {
        display: ['"Playfair Display"', "Tajawal", "serif"],
        sans: ["Inter", "Tajawal", "system-ui", "sans-serif"],
        arabic: ["Tajawal", "Inter", "sans-serif"],
      },
      maxWidth: { content: "1200px" },
    },
  },
  plugins: [],
};
export default config;
