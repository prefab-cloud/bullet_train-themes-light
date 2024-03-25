const tailwindBase = require("./tailwind.light.config");

module.exports = Object.assign(tailwindBase, {
  darkMode: null,
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
});
