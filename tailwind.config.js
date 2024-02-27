/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#A52A2A",
        orange: "#FFA500",
        lightgray: "#D3D3D3",
        blue: "#0000FF",
        green: "#008000",
        midnightblue: "#191970",
        grey: "#808080",
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
    },
  },
  plugins: [],
};
