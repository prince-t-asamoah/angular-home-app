/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#605dc8",
        "secondary-color": "#8b89e6",
        "accent-color": "#e8e7fa",
        "shadow-color": "#e8e8e8",
      },
    },
  },
  plugins: [],
};
