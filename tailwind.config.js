/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarydark: '#0d1b2a',   
        secondarydark: '#1b263b', 
        accent: '#415a77',    
        primarylight: '#778da9',   
        secondarylight: '#e0e1dd', 

      },
    },
  },
  plugins: [],
}

