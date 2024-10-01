/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Make sure this path matches your project
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Define Inter as a custom font family
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #E6F4FF 20%, #FFFFFF 80%)',
      },
      boxShadow: {
        'top': '0 -4px 6px -1px rgba(0, 0, 0, 0.1)', // Custom top shadow
      },
    },
  },
  plugins: [],
}


