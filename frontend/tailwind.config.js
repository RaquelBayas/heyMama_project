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
        secondary: '#DDBEA9',
        'green':'#affc41',
        'piel-claro': '#fff1e5',
        'marron':'#543C2E',
        'shade-bg': 'rgba(255, 244, 234, 0.8)',        
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
