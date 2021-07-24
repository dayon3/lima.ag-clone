const plugin = require('tailwindcss/plugin');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.js', './components/**/*.js', './layouts/**/*.js'],
  darkMode: 'false', // or 'media' or 'false' or "class"
  theme: {
    extend: {
      colors: {
        'blue-opaque': 'rgb(13 42 148 / 18%)',
        'github-green': '#6cc644',
        'twitter-blue': '#1da1f2',
        'linkedin-blue': ' #00a0dc'
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      fill: (theme) => ({
        ...theme('colors')
      })
    }
  },
  variants: {
    fill: ['hover', 'focus']
  }
};
