/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{njk,html,js}", "./*.{njk,html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
