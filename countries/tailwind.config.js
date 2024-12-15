/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        elements: {
          light: 'hsl(0, 0%, 100%)',
          dark: 'hsl(209, 23%, 22%)'
        },
        background: {
          light: 'hsl(0, 0%, 98%)',
          dark: 'hsl(207, 26%, 17%)'
        },
        text: {
          light: 'hsl(200, 15%, 8%)',
          dark: 'hsl(0, 0%, 100%)'
        },
        input: {
          light: 'hsl(0, 0%, 52%)'
        }
      },
      fontSize: {
        'home': '14px',
        'detail': '16px'
      },
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif'], 
        'iransans': ['iransans', 'sans-serif']
      },
      fontWeight: {
        light: 300,
        semibold: 600,
        extrabold: 800
      }
    },
  },
  plugins: [],
}
