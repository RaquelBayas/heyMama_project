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
        'Montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        background: '#FFF4EA',
        primary: '#F5CEAF',
        secondary: '#DDBEA9',
        dark_brown: '#543C2E',
        'piel-claro': '#fff1e5',
        'marron': '#543C2E',
        'marron2': '#684b39',
        'shade-bg': 'rgba(255, 244, 234, 0.8)',
      },
      backgroundImage: {
        'img-mom': "url('/assets/img-mujer.png')",
        'img-login': "url('/assets/img-login.png')"
      },
      backgroundSize: {
        '30%': '30%',
        '120%': '120%',
      },
      spacing: {
        '250': '250px',
        '350': '350px',
        '450': '450px',
        '400': '400px',
        '550': '550px',
      },
      screens: {
        "s": "500px",
        "2xl": "1536px",
        "3xl": "2000px",
        'mw150': { 'raw': '(max-width: 1150px)' },
        'mw24': { 'raw': '(min-width: 1024px)' },
        'mw68': { 'raw': '(max-width: 680px)' },
        '-mw68': { 'raw': '(min-width: 680px)' },
        'mh150': { 'raw': '(max-height: 1050px)' },
        'mw45': { 'raw': '(max-width: 450px)' },
        'mw16': { 'raw': '(max-width: 1600px)' },
        '-mw16': { 'raw': '(min-width: 1600px)' },

        // => @media (min-height: 800px) { ... }
        '650': '650px',
      },
      gridTemplateColumns: {
        '200': 'minmax(200px, 300px),1fr'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
