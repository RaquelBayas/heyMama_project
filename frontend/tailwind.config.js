/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFF4EA',
        primary: '#F5CEAF',
        secondary: '#DDBEA9',        
      }
    },
  },
  plugins: [],
}
