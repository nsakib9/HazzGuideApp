/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#047857", // Soft green
        secondary: "#D97706", // Soft gold
      },
    },
  },
  plugins: [],
};