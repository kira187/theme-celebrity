/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"]
    },
    extend: {
      backgroundImage: {
        'hero': "url('/src/img/background.jpg')"
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