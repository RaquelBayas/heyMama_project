/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg1': '#FFF4EA',
        'bg2':'#F5CEAF',
        'piel-claro': '#fff1e5',
        'marron':'#543C2E',
        'shade-bg': 'rgba(255, 244, 234, 0.8)',
      },
      fontFamily: {
        'anybody': ['Anybody', 'sans-serif'],
      },
      backgroundImage:{
        'img-mom': "url('./assets/img-mujer.png')"
      }, 
      backgroundSize:{
        '30%':'30%',
        '120%': '120%',
      }
    },
  },
  plugins: [],
}

