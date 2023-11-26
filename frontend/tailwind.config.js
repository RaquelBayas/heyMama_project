/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anybody': ['Anybody', 'sans-serif'],
      },
      colors: {
        background: '#FFF4EA',
        primary: '#F5CEAF',
<<<<<<< HEAD
        secondary: '#DDBEA9',
        'shade-bg': 'rgba(255, 244, 234, 0.8)',
        'piel-claro': '#fff1e5',
        'marron':'#543C2E',
      }, 
      backgroundImage:{
        'img-mom': "url('./assets/img-mujer.png')"
      },
      backgroundSize:{
        '30%':'30%',
        '120%': '120%',
      }, 
=======
        secondary: '#DDBEA9',        
      }
>>>>>>> 59764ddd1dfcc27db97549b47f8e5ff9242e63a8
    },
  },
  plugins: [],
}
