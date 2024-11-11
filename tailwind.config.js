/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        peach: '#FFDADB', 
        ash:'#253237',
        green:'#54AB00',
        pro:'#FAFAFA',
        reds:'#D44241',
        foot:'#F7F7F7'
    },
    padding: {
      container: '0px 40px 0px 40px', 
  },}

  },
  plugins: [],
}