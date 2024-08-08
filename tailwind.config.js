/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
      'primary' : '#1E2125',
      'secondary' : '#E5E5E0',
    },
      fontFamily: {
        'myFont': ['myFont', 'sans-serif'],
        'myFont2': ['myFont2', 'sans-serif'],
        'myFont3': ['myFont3', 'sans-serif'],
      },
      backgroundImage: {
        'achmadsuryas': "url('/public/assets/images/achmadsuryas.jpg')",
      },
    },
  },
  plugins: [],
}

