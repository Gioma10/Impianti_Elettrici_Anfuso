/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        scrollleft:{
          '100%': { left: '-200px'}
        }
      }
    },
  },
  plugins: [],
}

