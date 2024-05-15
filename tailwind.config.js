/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        '336' : '21rem',
        '304' : '19rem',
      },
      colors: {
        'color-header': '#FFD700',
        'red-color': '#DC0714',
        'headerbg' : '#B71515',
        'btn-color' : '#B71515',
        'card-color-green' : '#00634D',
        'button-black' : '#0c0c0c',
        'button-yellow' : '#FFD700',
        'black-one' : '#0c0c0c',
        'border-color' : 'rgba(12, 12, 12, 0.17)',
        'gray-color' : '#F6F6F6',
        'bg-color-shop': 'rgb(246, 246, 246)',
        'shop-color-button' : 'rgb(12, 12, 12)',
        'border-color-hover' : 'rgb(220, 7, 20)',
        'color-shop' : 'rgba(12, 12, 12, 0.3)',
        'gray-cup' : '(12, 12, 12, 0.7)',
        'footer-color' : '#911712',
        'footer-bottom-color' : 'rgba(255, 255, 255, 0.75)',

      },
      fontFamily: { 
        "roboto": ['Roboto', 'sans-serif'],
      },
    

    },
  },
  plugins: [],
}
