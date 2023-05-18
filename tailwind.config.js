/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      flexBasis: {
        nesf: "47%",
      },
      height: {
        "1/10": "10%",
        "8/10": "80%",
      },
    },
  },
  plugins: [],
};
