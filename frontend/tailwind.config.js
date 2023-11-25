/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'hsl(27, 78%, 82%)',
        'secondary': 'hsl(29, 100%, 96%)',
      }

    },
  },
  plugins: [],
}