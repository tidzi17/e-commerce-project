/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        m450: { min: "450px" },
        min375: { max: "376px" },
        },
      colors: {
        beigeBanner: '#A0816C', //banner
        primaryBeige: '#D1C0A8', //navabar circles
        secondaryBeige: '#D3CBBF', //cammercial
        black: '#222222', //text
        primaryGrey: '#F2F2F2', //cards bg
        primaryBrown: '#434040',
        secondaryGrey: '#5F5959',
        secondaryBrown: '#413A3A',
      },
      fontFamily: {
        inter: [ 'Inter' ],
        italiana: [ 'Italiana' ],
        junge: [ 'Junge' ],
      },
    },
  },
  plugins: [],
}

