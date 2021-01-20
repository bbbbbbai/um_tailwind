const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  important: true,
  theme: {
    extend: {
      colors: {
        custom: {
          primary: '#1890ff',
        },
      },
      fontFamily: {
        han: ['Source Han Serif', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
  purge: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.js', './src/**/*.jsx'],
  variants: {},
};
