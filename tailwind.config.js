/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#062a4d',
          navy: '#0b325b',
          blue: '#0062cc',
          sky: '#0284c7',
          lightBlue: '#f0f7ff',
          green: '#16a34a',
          emerald: '#10b981',
          greenLight: '#ebfdf2',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
