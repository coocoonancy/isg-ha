/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'lnl-',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        theme: '#007FFF',
        divider: '#808695',
        background: '#FFFFFF',
        'body-background': '#F1F1F1',
        primary: '#409EFF',
        success: '#01C281',
        warning: '#FABC20',
        danger: '#FF4929',
        info: '#909399',
        text: '#515A6E',
        'text-primary': '#17233D',
        secondary: '#808695',
        placeholder: '#B6BAC4',
        border: '#DCDEE2',
        'border-light': '#E8EAEC',
        'border-lighter': '#EFEFEF',
        'border-extralight': '#F8F8F9'
      }
    }
  },
  plugins: []
};
