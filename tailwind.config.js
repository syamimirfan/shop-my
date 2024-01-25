module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
      },
    },
    extend: {
      colors: {
        primary: {
          100: '#DDE84D',
          200: '#C9D435'
        },
        secondary: '#FF693A'
      }
    },
  },
  variants: {
  },
  plugins: [],
}
