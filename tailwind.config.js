/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif'
        ],
        onest: ['Onest', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        karma: ['Karma', 'serif'],
        bree: ['Bree Serif', 'serif']
      },

      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900'
      },
      colors: {
        limeSoft: '#e0ff82' // 👈 Custom light green color
      },
      zIndex: {
        '-1': '-1' // 👈 Now you can use z-[-1]
      },
      skew: {
        '-2': '-2deg',
        '-3': '-3deg'
      }
    }
  },
  plugins: []
}
