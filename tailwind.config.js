/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'disabled': '#BCBCBC',
        'disabled2': '#BFBFBF',
        'sky-blue': '#40B6FD',
        'sky-blue2': '#069FFF',
        'black': '#000000',
        'black2': '#202020',
        'gray': '#3A3A3A',
        'gray2': '#898989',
        'red': '#C10404',
        'green': '#58BD58',
      }
    },
  },
  plugins: [],
}

