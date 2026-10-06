/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F5F0E6',
          light: '#FAF7F0',
          dark: '#ECE4D4',
          muted: '#E2D9C8',
        },
        espresso: {
          DEFAULT: '#382B25',
          dark: '#251C17',
          light: '#4A3B34',
          muted: '#6D594F',
          border: 'rgba(56, 43, 37, 0.14)',
          subtle: 'rgba(56, 43, 37, 0.06)',
        },
        ys: {
          yellow: '#FFE600',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Didot', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Didot', 'Georgia', 'serif'],
        script: ['"Alex Brush"', '"Pinyon Script"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.28em',
      },
      lineHeight: {
        tightest: '1.05',
      }
    },
  },
  plugins: [],
}
