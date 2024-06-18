/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans-seif"],
      },
      colors: {
        primary: "#F62682",
      },
    },
  },
  plugins: [],
};
