const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './contexts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      lightBlue: '#1E3F66',
      darkBlue: '#528AAE',
      greenToken: '#63A8A4',
      editorGray: '#2B3137',
      previewContentBg: '#FAFAFA',
      current: 'currentColor',
      black: '#333333',
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      pink: colors.pink,
      standardGreen: colors.green,
      standardPurple: colors.purple,
      red: '#FB3D62',
      yellow: '#D1A24E',
      blue: '#7096FF',
      purple: '#B677E3',
      green: '#ABD56F',
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontWeight: 700,
          fontSize: theme('fontSize.4xl'),
        },
        h2: {
          fontWeight: 600,
          fontSize: theme('fontSize.xl'),
        },
        h3: {
          fontWeight: 500,
          fontSize: theme('fontSize.xl'),
        },
        h4: {
          fontWeight: 300,
          fontSize: theme('fontSize.lg'),
        },
        h5: {
          fontWeight: 300,
          fontSize: theme('fontSize.tiny'),
        },
        p: {
          fontWeight: 300,
          fontSize: theme('fontSize.tiny'),
        },
        li: {
          fontWeight: 300,
          fontSize: theme('fontSize.tiny'),
        },
      })
    }),
  ],
}
