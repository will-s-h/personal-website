/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,css,ts,jsx,tsx}",
    "./components/**/*.{html,js,css,ts,jsx,tsx}",
    "./lib/**/*.{html,js,css,ts,jsx,tsx}",
    "./styles/**/*.{html,js,css,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#FFFFFF',
        'black': '#000000',
        'yellow': {
          DEFAULT: '#FFBE0B',
          '50': '#FFEFC3',
          '100': '#FFE9AE',
          '200': '#FFDF85',
          '300': '#FFD45D',
          '400': '#FFC934',
          '500': '#FFBE0B',
          '600': '#D29A00',
          '700': '#9A7100',
          '800': '#624800',
          '900': '#2A1F00'
        },
        'orange': {
          DEFAULT: '#FB5607',
          '50': '#FED1BC',
          '100': '#FEC3A8',
          '200': '#FDA87F',
          '300': '#FC8D57',
          '400': '#FC712F',
          '500': '#FB5607',
          '600': '#C74203',
          '700': '#8F3002',
          '800': '#581E01',
          '900': '#210B01'
        },
        'red': {
          DEFAULT: '#FF006E',
          '50': '#FFB8D6',
          '100': '#FFA3CB',
          '200': '#FF7AB4',
          '300': '#FF529C',
          '400': '#FF2985',
          '500': '#FF006E',
          '600': '#C70056',
          '700': '#8F003E',
          '800': '#570025',
          '900': '#1F000D'
        },
        'purple': {
          DEFAULT: '#8338EC',
          '50': '#EBE0FC',
          '100': '#E0CDFA',
          '200': '#C9A8F7',
          '300': '#B182F3',
          '400': '#9A5DF0',
          '500': '#8338EC',
          '600': '#6615D7',
          '700': '#4E10A4',
          '800': '#350B71',
          '900': '#1D063E'
        },
        'blue': {
          DEFAULT: '#3A86FF',
          '50': '#F2F7FF',
          '100': '#DDEAFF',
          '200': '#B4D1FF',
          '300': '#8CB8FF',
          '400': '#639FFF',
          '500': '#3A86FF',
          '600': '#0264FF',
          '700': '#004DC9',
          '800': '#003891',
          '900': '#002259'
        },
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

// suggestions for picking a custom color scheme:
//   1) pick a color palette using https://coolors.co/
//   2) generate shades using https://www.tailwindshades.com/