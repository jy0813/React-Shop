/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand:'#F96162',
      },
      backgroundImage:{
        banner:`url('https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80')`
      }
    },
  },
  plugins: [],
}