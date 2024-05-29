/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor:{
        mainColor: "#E2BC2C",
        secondColor: "#332E33",
        whiteColor: "#ffffff",
        blackColor: "#000000",
        gray300: "#C2D2E3",
        gray400: "#92A4BB",
        gray500: "#63768D"
      },
      backgroundColor:{
        mainColor: "#E2BC2C",
        secondColor: "#332E33",
        whiteColor: "#ffffff",
        blackColor: "#000000",
        bgColor: "#ffffff",
        gray300: "#C2D2E3",
        gray400: "#92A4BB",
        gray500: "#63768D"
      },
      colors:{
        mainColor: "#E2BC2C",
        secondColor: "#332E33",
        whiteColor: "#ffffff",
        blackColor: "#000000",
        gray300: "#C2D2E3",
        gray400: "#92A4BB",
        gray500: "#63768D"
      }
    },
  },
  plugins: [],
}

