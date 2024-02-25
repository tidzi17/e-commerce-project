/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beigeBanner: '#A0816C', //banner
        primaryBeige: '#D1C0A8', //navabar circles
        secondaryBeige: '#D3CBBF', //cammercial
        black: '#222222', //text
        primaryGrey: '#F2F2F2', //cards bg
      },
      fontFamily: {
        inter: [ 'Inter' ],
      },
    },
  },
  plugins: [],
}

