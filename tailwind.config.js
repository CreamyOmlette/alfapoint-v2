/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

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
        "lime-green": "#3DFFAE",
      },
      backgroundImage: {
        "footer-arrow": "url('/footer-arrow.svg')",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".icon-qa": {
          mask: "url('/services/qa.svg') no-repeat center/contain",
        },
        ".icon-devops": {
          mask: "url('/services/devops.svg') no-repeat center/contain",
        },
        ".icon-web": {
          mask: "url('/services/web-development.svg') no-repeat center/contain",
        },
        ".icon-mobile": {
          mask: "url('/services/mobile.svg') no-repeat center/contain",
        },
      });
    }),
  ],
};
