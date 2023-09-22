/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'farmacy-dark': '#0A1223',
        'farmacy-red': '#FF6161',
        'farmacy-blue': '#3A37C4',
        'farmacy-light-blue': '#11182C',
        'farmacy-gray': '#43465C',
        'farmacy-light-gray': '#8D92B8',
        'farmacy-deep-gray': '#11182C',
      },
    },
  },
  plugins: [],
}