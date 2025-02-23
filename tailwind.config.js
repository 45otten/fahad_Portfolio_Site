/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors : {
        FBlack : '#222',
        FBlackContent: '#151515',
        FRed: '#8E1616',
        FRedLighter: '#D84040',
        FText: '#D84040',
        FText1: '#c9f422',
        ChangedThemeColor : '#c9f422',
      },

      fontFamily : {
        Poppins : ['Poppins','sans-serif'],
        LogoFont : ['UnifrakturMaguntia','sans-serif'],
        HeadingFonts:['Teko','sans-serif'],
      },
      boxShadow : {
        'customRed': 'inset 0px 0px 15px 10px rgba(255, 0, 0, 0.2)',
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}

