/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        retro: {
          bg: '#121212',
          surface: '#1E1E1E',
          border: '#2E2E2E',
          text: '#EDEDED',
          muted: '#A1A1AA',
          accent: '#F59E0B',
          accentHover: '#D97706'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['"Inter"', '"Space Grotesk"', 'sans-serif']
      }
    }
  },
  plugins: []
};
