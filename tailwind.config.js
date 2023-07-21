/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**.{html,css}"],
  screen:{
    sm: '480px',
    md: '798px',
    lg: '976px',
    xl: '1440px',
  },
  theme: {
    extend: {
      colors: {
        VeryDarkGrayishBlue: "hsl(217, 19%, 35%)",
        DesaturatedDarkBlue: "hsl(214, 17%, 51%)",
        GrayishBlue: "hsl(212, 23%, 69%)",
        LightGrayishBlue: "hsl(210, 46%, 95%)",
      },
      fontFamily:{
        sans: ['Manrope', 'sans-serif']
      },
    },
  },
  plugins: [],
}
