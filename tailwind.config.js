

  /** @type {import('tailwindcss').Config} */
  export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],




    theme: {
      extend: {
        colors: {
          'primaryColor': '#FACC15',
        },
      }
    },
    plugins: [require("daisyui")],}