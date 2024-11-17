/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#4CAF50",
        secondary:"#ffffff",
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      container:{
        center: true,
        padding:{
          default:"1rem",
          sm:"3rem",
        },
      },
    },
  },
  plugins: [],
}