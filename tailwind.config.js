/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      customised1: ["Poppins"],
      customised2: ["Cormorant Garamond"],
    },
    transitionProperty: {
      width: "width",
    },
    keyframes: {
      progress1: {
        "0%": { width: "0%" },
        "100%": { width: "82%" },
      },
      progress2: {
        "0%": { width: "0%" },
        "100%": { width: "90%" },
      },
      progress3: {
        "0%": { width: "0%" },
        "100%": { width: "84%" },
      },
    },
    animation: {
      bar1: "progress1 1.5s linear forwards",
      bar2: "progress2 1.5s linear forwards",
      bar3: "progress3 1.5s linear forwards",
      wigglee: "wiggle 1.5s ease-in infinite",
    },
    variants: {
      extend: {
        backgroundColor: ["active"],
      },
    },
  },
  plugins: [],
};
