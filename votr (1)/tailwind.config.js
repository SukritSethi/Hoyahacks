module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "550px" },
      md: { min: "551px", max: "1050px" },
    },
    extend: {
      colors: {
        black_900_7f: "#0a09117f",
        black_900: "#0a0911",
        black_901: "#0a0811",
        deep_purple_A100: "#a67cfe",
        amber_300: "#fdda5f",
        white_A700: "#ffffff",
        gray_100: "#f4f4f4",
      },
      borderRadius: { radius8: "8px" },
      fontFamily: { arial: "Arial", manrope: "Manrope" },
      letterSpacing: { ls1: "1px", ls125: "1.25px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
