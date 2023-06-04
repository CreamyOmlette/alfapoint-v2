/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "420px",
      md: "900px",
      lg: "1200px",
    },
    extend: {
      colors: {
        "regal-blue": "#2C67FF",
        "grey-1": "rgba(204, 214, 229, 0.4)",
        "grey-2": "rgba(223, 229, 239, 0.53)",
        "grey-3": "rgba(204, 214, 229, 1)",
      },
      backgroundImage: {
        "footer-arrow": "url('../public/footer-arrow.svg')",
      },
    },
  },
  plugins: [],
};
