/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        'light-bg': 'rgb(var(--light-bg) / <alpha-value>)',
        'light-card': 'rgb(var(--light-card) / <alpha-value>)',
        'light-text': 'rgb(var(--light-text) / <alpha-value>)',
        'light-border': 'rgb(var(--light-border) / <alpha-value>)',
        'light-accent': 'rgb(var(--light-accent) / <alpha-value>)',
        'dark-bg': 'rgb(var(--dark-bg) / <alpha-value>)',
        'dark-card': 'rgb(var(--dark-card) / <alpha-value>)',
        'dark-text': 'rgb(var(--dark-text) / <alpha-value>)',
        'dark-border': 'rgb(var(--dark-border) / <alpha-value>)',
        'dark-accent': 'rgb(var(--dark-accent) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'monospace'],
        pixel: ['"Press Start 2P"', 'cursive'],
      },
      boxShadow: {
        'pixel': '3px 3px 0 0 rgba(var(--primary) / 0.8)',
      },
      animation: {
        'pixel-bounce': 'pixel-bounce 1s infinite alternate',
      },
      keyframes: {
        'pixel-bounce': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};