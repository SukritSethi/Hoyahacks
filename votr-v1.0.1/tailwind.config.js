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
        black_900: "#0a0911",
        black_902: "#000000",
        black_901: "#0a0811",
        deep_purple_A100: "#a67cfe",
        amber_300: "#fdda5f",
        white_A700: "#ffffff",
      },
      borderRadius: { radius8: "8px" },
      fontFamily: {
        arial: "Arial",
        manrope: "Manrope",
        montserrat: "Montserrat",
      },
      letterSpacing: { ls1: "1px", ls025: "0.25px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
