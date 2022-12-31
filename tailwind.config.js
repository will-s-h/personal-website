/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,css,ts,jsx,tsx}",
    "./components/**/*.{html,js,css,ts,jsx,tsx}",
    "./lib/**/*.{html,js,css,ts,jsx,tsx}",
    "./styles/**/*.{html,js,css,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'black': '#000000',
      'yellow': '#FFBE0B',
      'orange': '#FB5607',
      'red': '#FF006E',
      'purple': '#8338EC',
      'blue': '#3A86FF'
    },

    extend: {
      
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],

}
