/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        mainColor: "#F74D00",
        secondColor: "#ffece3",
        whiteColor: "#ffffff",
        blackColor: "#000000",
        gray300: "#C2D2E3",
        gray400: "#92A4BB",
        gray500: "#63768D",
        lightColor: "#f1f5f9"
      },
      backgroundColor: {
        mainColor: "#F74D00",
        secondColor: "#ffece3",
        whiteColor: "#ffffff",
        blackColor: "#000000",
        bgColor: "#ffffff",
        gray300: "#C2D2E3",
        gray400: "#92A4BB",
        gray500: "#63768D",
        lightColor: "#f1f5f9"
      },
      colors: {
        mainColor: "#F74D00",
        secondColor: "#ffece3",
        whiteColor: "#ffffff",
        blackColor: "#000000",
        gray300: "#C2D2E3",
        gray400: "#92A4BB",
        gray500: "#63768D",
        lightColor: "#f1f5f9"
      },
      fontFamily: {
        rubikLight: ["rubik-light"],
        rubikRegular: ["rubik-regular"],
        rubikMedium: ["rubik-medium"],
        rubikBlack: ["rubik-black"],
        rubikSemiBold: ["rubik-semi-bold"],
        rubikBold: ["rubik-bold"],
        rubikExtraBold: ["rubik-extra-bold"],
      }
    },
  },
  plugins: [],
}

