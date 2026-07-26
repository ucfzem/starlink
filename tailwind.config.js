/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        iss: '#ff4444',
        starlink: '#44ff44',
        weather: '#ffaa00',
        science: '#4444ff',
        other: '#aaaaaa',
      },
    },
  },
  plugins: [],
};
