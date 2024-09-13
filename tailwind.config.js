/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'lnl-',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      blue: '#378DF1',
      purple: '#5C5AE3'
    },
    extend: {}
  },
  plugins: []
};
