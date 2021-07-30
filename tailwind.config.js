const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      cyan: colors.cyan,
      rose: colors.rose,
      lime: colors.lime,
      blue: colors.blue,
      indigo: colors.indigo,
      warmGray: colors.warmGray,
      green: colors.green,
      amber: colors.amber,
      transparent: colors.transparent
    },
    fontFamily: {
      body: ['Satisfy'],
      test: ['Lobster'],
      merienda: ['Merienda'],
      lato: ['Lato'],
    },
    textShadow: {
      'default': '0 2px 0 #000',
      'md': '0 2px 2px #000',
      'h2': '0 0 3px #FF0000, 0 0 5px #0000FF',
      'h1': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
      '2xl': '1px 1px 5px rgb(33 34 43 / 20%)',
      '3xl': '0 0 3px rgba(0, 0, 0, .8), 0 0 5px rgba(0, 0, 0, .9)',
   },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
       }
    },
  },
  variants: {
    textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    extend: {
      tableLayout: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
