/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0072bc',
          white: '#ffffff',
          black: '#000000',
          gray: '#F6F6F6',
        },
        neutral: {
          gray: '#838383',
        },
      },
    },
  },
  plugins: [],
}
