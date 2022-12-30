/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,css,ts,jsx,tsx}",
    "./components/**/*.{html,js,css,ts,jsx,tsx}",
    "./lib/**/*.{html,js,css,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'black': '#000000',
      'mauve': {
        DEFAULT: '#AA78A6',
        '50': '#F1E9F0',
        '100': '#E9DCE8',
        '200': '#D9C3D8',
        '300': '#CAAAC7',
        '400': '#BA91B7',
        '500': '#AA78A6',
        '600': '#905A8B',
        '700': '#6D456A',
        '800': '#4B2F48',
        '900': '#281927'
      },
      'gold': {
        DEFAULT: '#E6AF2E',
        '50': '#FAEED2',
        '100': '#F7E7C0',
        '200': '#F3D99B',
        '300': '#EFCB77',
        '400': '#EABD52',
        '500': '#E6AF2E',
        '600': '#C49117',
        '700': '#926C11',
        '800': '#60470C',
        '900': '#2E2206'
      },
      'cobalt': {
        DEFAULT: '#3D348B',
        '50': '#A39CDA',
        '100': '#958ED5',
        '200': '#7970C9',
        '300': '#5D52BE',
        '400': '#4A3FA9',
        '500': '#3D348B',
        '600': '#2B2562',
        '700': '#191539',
        '800': '#070611',
        '900': '#000000'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    //...
  ],

}
