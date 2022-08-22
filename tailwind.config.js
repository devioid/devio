/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
      colors: {
        primary: '#223F81',
        'primary-light': '#4970CB',
      },
      fontSize: {
        '5hxl': '3.5rem',
      },
    },
  },
  plugins: [],
}
