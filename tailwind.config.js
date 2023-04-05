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
        'hero': "url('/src/img/galery/item_6.jpg')",
        'flower': "url('/src/img/flower-medium.svg')",
        'pattern-diamond': "url('/src/img/glamorous.svg')",
      },
      scale: {
        '175': '1.75',
        '200': '2',
      },
      colors: {
        'primary': '#DF2E38',
        'secondary': '#E19991',
        'default': '#F3EED',
        'altern': '#85AEE1'
      },
    },
  },
  plugins: [
  ],
}