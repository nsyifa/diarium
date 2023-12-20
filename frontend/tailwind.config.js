/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
      colors: {
        themeblack: "#313638",
        lightcreme: "#EFE8E1",
      },
      gridTemplateRows: {
        11: "repeat(11, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
