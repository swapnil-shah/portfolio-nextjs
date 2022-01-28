const { default: link } = require('next/link');

module.exports = {
  mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  content: [
    './public/**/*.html',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans']
    }
  },
  variants: {
    extend: {
      screens: {
        lg: '992px'
        // => @media (min-width: 992px) { ... }
      }
    }
  },
  plugins: []
};
