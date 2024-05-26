/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor:{
        mainColor: "#E2BC2C",
        secondColor: "#332E33"
      },
      backgroundColor:{
        mainColor: "#E2BC2C",
        secondColor: "#332E33"
      },
      
    },
  },
  plugins: [],
}

