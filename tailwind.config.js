/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        blue: "#4F9CF9",
        yellow: "#FFE492",
        darkBlue: "#043873",
        primary: "#212529",
      },
      fontFamily: {
        primary: "Inter",
        secondary: "DM Sans",
      },
      backgroundColor: {
        primary: "#4F9CF9",
        secondary: "#FFE492",
        lightBlue: "#C4DEFD",
        darkBlue: "#043873",
      },
    },
  },
  plugins: [],
};
