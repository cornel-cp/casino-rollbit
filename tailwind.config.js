/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
