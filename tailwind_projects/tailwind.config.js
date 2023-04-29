/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./dist4/*.html",
      "./dist3/*.html",
      "./dist2/*.html",
      "./dist/*.html"
  ],
  theme: {
    extend: {
        backgroundImage:{
            'home': 'url("/img/home.jpg")',
            'hero': 'url("/img/hero.jpg")',
        },
        fontFamily:{
          'normal':'Poppins',
          'based':'Nunito',
          'simple':'Work'
        },
        animation: {
            blob: "blob 15s infinite",
        },
        keyframes: {
            blob: {
                "0%":{
                    transform:"translate(0px, 0px) scale(1)",
                },
                "33%": {
                    transform:"translate(30px, -50px) scale(1.1)",
                },
                "66%": {
                    transform:"translate(-20px, 22px) scale(0.9)",
                },
                "100%": {
                    transform:"translate(0px, 0px) scale(1)",
                }
            },
        },
    },
  },
  plugins: [],
}
