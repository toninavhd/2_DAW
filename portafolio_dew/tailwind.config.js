/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'brutal-black': '#000000',
        'brutal-white': '#ffffff',
        'brutal-red': '#ff0000',
        'brutal-yellow': '#ffff00',
        'brutal-blue': '#0000ff',
        'brutal-green': '#00ff00',
        'brutal-pink': '#ff00ff',
        'brutal-orange': '#ff6600',
        'brutal-purple': '#9900ff',
      },
      boxShadow: {
        brutal: '4px 4px 0px 0px #000000',
        'brutal-lg': '8px 8px 0px 0px #000000',
      },
      borderWidth: {
        3: '3px',
      },
    },
  },
  plugins: [],
}
