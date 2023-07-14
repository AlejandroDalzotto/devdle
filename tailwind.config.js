/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        "crimson": {
          50: "#FDE8EC",
          100: "#FACCD5",
          200: "#F69DAF",
          300: "#F16985",
          400: "#ED3B5E",
          500: "#DC143C",
          600: "#B21030",
          700: "#830C24",
          800: "#590818",
          900: "#2A040B",
          950: "#170206"
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
};
