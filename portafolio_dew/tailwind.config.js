/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        display: ['Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif'],
        mono: ['Courier New', 'Courier', 'monospace'],
      },
      colors: {
        // Colores base
        'brutal-black': '#000000',
        'brutal-white': '#ffffff',
        'brutal-gray': '#1a1a1a',
        'brutal-gray-light': '#2d2d2d',
        'brutal-gray-dark': '#0d0d0d',

        // Colores vivos - Paleta vibrante
        'brutal-red': '#FF3333',
        'brutal-yellow': '#FFE600',
        'brutal-blue': '#0066FF',
        'brutal-green': '#00FF66',
        'brutal-orange': '#FF6600',
        'brutal-pink': '#FF00FF',
        'brutal-cyan': '#00FFFF',
        'brutal-magenta': '#FF0080',
      },
      boxShadow: {
        brutal: '4px 4px 0px 0px #000000',
        'brutal-lg': '8px 8px 0px 0px #000000',
        'brutal-hover': '6px 6px 0px 0px #000000',
        'brutal-hover-lg': '12px 12px 0px 0px #000000',
      },
      borderWidth: {
        3: '3px',
        4: '4px',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s infinite',
        'rotate-slow': 'rotate 10s linear infinite',
        float: 'float 3s ease-in-out infinite',
        glitch: 'glitch 1s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
    },
  },
  plugins: [],
}
