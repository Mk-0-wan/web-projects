/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./dist2/*.html",
      "./dist/*.html"
  ],
  theme: {
    extend: {},
      fontFamily:{
          'normal':'Poppins',
          'based':'Nunito',
          'simple':'Work'
      }
  },
  plugins: [],
}
