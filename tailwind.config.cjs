/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-blue': 'hsl(235, 24%, 19%)',
      },
      fontFamily: {
        sans: ['Josefin Sans', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'mobile-light': 'url(./src/images/bg-mobile-light.jpg)',
        'mobile-dark': 'url(./src/images/bg-mobile-dark.jpg)',
        'desktop-light': 'url(./src/images/bg-desktop-light.jpg)',
        'desktop-dark': 'url(./src/images/bg-desktop-dark.jpg)',
      },
    },
  },
  plugins: [],
}
