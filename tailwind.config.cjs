const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', 'src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      colors: {
        'amzl-blue': {
          50: '#d7fdff',
          100: '#aaf0ff',
          200: '#7ae6ff',
          300: '#48daff',
          400: '#1acfff',
          500: '#00b6e6',
          600: '#008eb4',
          700: '#006582',
          800: '#003e50',
          900: '#001620',
        },
        'amzl-lime': '#D4D94E',
        'amzl-orange': {
          50: '#fff4da',
          100: '#ffe0ae',
          200: '#ffcc7d',
          300: '#ffb84b',
          400: '#ffa31a',
          500: '#e68a00',
          600: '#b36b00',
          700: '#814d00',
          800: '#4f2d00',
          900: '#1f0d00',
        },
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        serif: ['Trirong', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
