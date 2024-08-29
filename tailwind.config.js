/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "white",
      black: "black",
      primary: "#9290C3",
      secondary: "#535C91",
      neutral: "#1B1A55",
      accent: "#070F2B",
      gray: {
        200: "#E2E8F0",
        400: "#94A3B8",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
