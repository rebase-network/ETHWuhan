/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'grid-flow': 'grid-flow 20s linear infinite',
      },
      keyframes: {
        'grid-flow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
    },
    screens: {
      sm: '640px',
      md: '960px',
      lg: '1280px',
      xl: '1920px',
    },
  },
  plugins: [],
};
