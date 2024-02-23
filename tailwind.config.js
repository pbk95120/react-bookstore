/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#A52A2A",
        lightgray: "#D3D3D3",
        blue: "#0000FF",
        green: "#008000",
      },
      fontSize: {
        Csm: "1rem",
        Cmd: "1.5rem",
        Clg: "2rem",
      },
    },
  },
  plugins: [],
};
