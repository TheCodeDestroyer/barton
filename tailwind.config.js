/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E1E1E',
        'theme-blue': {
          100: '#F7F8FB',
          200: '#D3D7E1',
          300: '#233869'
        }
      },
      fontFamily: {
        sans: ['var(--font-nunito)', ...fontFamily.sans],
        indie: ['var(--font-indie-flower)']
      },
      aspectRatio: {
        shipImage: '65 / 32'
      }
    }
  },
  plugins: []
};
