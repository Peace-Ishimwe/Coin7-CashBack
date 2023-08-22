/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {screens:{
      'div' : '1760px',
      'text' : '1694px',
      'res':'477px',
      'fit':'500px',
      'menu':'930px'
    }},
    
  },
  plugins: [],
}