/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-text': 'hsl(229, 25%, 31%)',
        'score-text': 'hsl(229, 64%, 46%)',
        'header-outline': 'hsl(217, 16%, 45%)',
        'scissors': 'hsl(39, 89%, 49%)',
        'paper': 'hsl(230, 89%, 62%)',
        'rock': 'hsl(349, 71%, 52%)',
        'lizard': 'hsl(261, 73%, 60%)',
        'spock': 'hsl(189, 59%, 53%)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
        'scissors-gradient': 'linear-gradient(to bottom, hsl(39, 89%, 49%), hsl(40, 84%, 53%))',
        'paper-gradient': 'linear-gradient(to bottom, hsl(230, 89%, 62%), hsl(230, 89%, 65%))',
        'rock-gradient': 'linear-gradient(to bottom, hsl(349, 71%, 52%), hsl(349, 70%, 56%))',
        'lizard-gradient': 'linear-gradient(to bottom, hsl(261, 73%, 60%), hsl(261, 72%, 63%))',
        'spock-gradient': 'linear-gradient(to bottom, hsl(189, 59%, 53%), hsl(189, 58%, 57%))',
      },
      fontFamily: {
        'barlow': ['"Barlow Semi Condensed"', 'sans-serif'],
      },
      fontWeight: {
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
}
