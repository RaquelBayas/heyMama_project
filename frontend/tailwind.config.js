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
        dark_brown: '#543C2E',     
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
      },
      spacing: {
        '450': '450px',
        '400': '400px',
        '550': '550px',
      }, 
      gridTemplateColumns: {
        '200':'minmax(200px, 300px),1fr'
      }
    },
  },
  plugins: [],
}
