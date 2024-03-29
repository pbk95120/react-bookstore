/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#A52A2A",
        orange: "#ea672a",
        lightgray: "#a9a9a9",
        blue: "#0000FF",
        green: "#008000",
        midnightblue: "#191970",
        grey: "#808080",
        coral: "#ff4500",
      },
      fontSize: {
        small: "1rem",
        medium: "1.5rem",
        large: "2rem",
      },
      width: {
        small: "320px",
        medium: "760px",
        large: "1020px",
      },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
      },
    },
  },
  plugins: [],
};
