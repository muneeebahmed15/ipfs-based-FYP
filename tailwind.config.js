/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    colors: {
    'layout-color':'#101011',
    'sidebar-color' : '#202021',
    'buttons-color' : '#1d1d1e',
    'active-color' : '#5542f6'
      }
    },
    },
  plugins: [ ],
}

