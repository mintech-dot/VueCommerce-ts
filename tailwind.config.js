/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
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
}