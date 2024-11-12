/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ["Epilogue", "sans-serif"],
      },
      colors: {
        brand: "#014DFE",
        primaryBlack: "#151515",
      },
      backgroundImage: {
        'contactImage': "url('/public/images/Rectangle 752.png')"
      },
    },
  },
  plugins: [],
};

