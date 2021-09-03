module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        kam: 
            {
              50: '#fff2db',
              100: '#ffd9af',
              200: '#fec27f',
              300: '#fdaa4e',
              400: '#fb911d',
              500: '#e27804',
              600: '#b05d00',
              700: '#7e4200',
              800: '#4d2700',
              900: '#1f0b00',
            },
        navCol:
            {
              50: '#f5effb',
              100: '#dad5df',
              200: '#2b3148',
              300: '#a69fad',
              400: '#8c8394',
              500: '#736a7b',
              600: '#595260',
              700: '#403b46',
              800: '#27222b',
              900: '#100a15',
            }

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
