/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ad2507',    // Brand red
        secondary: '#f0b900',  // Brand yellow
      },
    },
  },
  plugins: [],
}