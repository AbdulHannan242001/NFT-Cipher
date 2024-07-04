/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins', sans-serif"],
        roboto: ["Roboto", "monospace"],
      },
      colors: {
        primary: "#2E2E2E", // Dark Grey (base color)
        accent: "#00A3E0", // Bright Blue (for accents and highlights)
        secondary: "#3B3B3B", // Lighter Grey (for backgrounds and less prominent text)
        lightBlue: "#B3E5FC", // Light Blue (for backgrounds and secondary accents)
        darkBlue: "#01579B", // Dark Blue (for buttons and important elements)
        white: "#FFFFFF", // White (for text and clean areas)
        grey: "#9E9E9E", // Neutral Grey (for borders and subtle elements)
      },
    },
  },
  plugins: [],
};
