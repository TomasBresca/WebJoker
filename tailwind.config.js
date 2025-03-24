/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        joker: {
          dark: '#121212',
          black: '#1E1E1E',
          purple: '#c929ff',
          violet: '#b707f2',
          red: '#B22222',
        },
        whatsapp: '#25D366',
      },
      fontFamily: {
        display: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'slide-left': 'slide-left 35s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'slide-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.animation-pause': {
          'animation-play-state': 'paused',
        },
      });
    },
  ],
}