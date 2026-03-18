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
          dark: '#0a0a0c',
          card: '#111114',
          accent: '#3b82f6',
          border: '#1f2937'
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}