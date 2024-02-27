/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      colors: {
        50: "#f4f8ed",
        100: "#e4efd8",
        200: "#c1d9a5",
        300: "#accc8a",
        400: "#8eb665",
        500: "#709b47",
        600: "#567a36",
        700: "#435f2c",
        800: "#384c28",
        900: "#324225",
        950: "#182310",
      },
    },
  },
  plugins: [],
};
