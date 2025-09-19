import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        pulse: {
          light: "#35E67F",
          DEFAULT: "#0BB54E",
          dark: "#0AA247"
        },
        graybg: "#F6F7F8"
      },
      fontFamily: {
        sans: ['"SF Pro Display"', "Inter", "ui-sans-serif", "system-ui", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.06)"
      }
    }
  },
  plugins: []
} satisfies Config;
