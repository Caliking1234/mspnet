/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      customised1: ["Poppins"],
      customised2: ["Cormorant Garamond"],
    },
    variants: {
      extend: {
        backgroundColor: ["active"],
      },
    },
  },
  plugins: [],
};
