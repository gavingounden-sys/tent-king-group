import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        king: { red: "#E31E24", ink: "#111111", grey: "#F5F5F5", charcoal: "#333333" },
      },
      maxWidth: { site: "1440px" },
    },
  },
  plugins: [],
} satisfies Config;
