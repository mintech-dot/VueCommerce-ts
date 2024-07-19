/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
    colors: {
      primary: "#141718",
      secondary: "#6C7275",
      tertiary: "#FEFEFE",
      white: "#FEFEFE",
      black: "#000000",
      transparent : "transparent"
    },
  },
  plugins: [],
};
