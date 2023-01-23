/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        'quicksand': ['Quicksand', 'sans-serif'],
        'dancing-script': ['"Dancing Script"', 'cursive'],
        'poiret-one': ['"Poiret One"', 'cursive'],
      },
      backgroundImage: {
        'hero': "url('../src/img/background.jpg')",
        'hero-pattern': "url('../src/img/glamorous.svg')",
      },
      scale: {
        '175': '1.75',
        '200': '2',
      },
      colors: {
        'primary-color': '#7B4433',
        'secondary-color': '#F38A8C',
      },
    },
  },
  plugins: [],
}