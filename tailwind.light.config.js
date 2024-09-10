const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/views/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
    "./app/javascript/**/*.js",
    "./tmp/gems/*/app/views/**/*.html.erb",
    "./tmp/gems/*/app/helpers/**/*.rb",
    "./tmp/gems/*/app/assets/stylesheets/**/*.css",
    "./tmp/gems/*/app/javascript/**/*.js",
    "./app/react-ui/**/*.tsx",
    "./app/react-ui/**/*.ts",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        xs: ".81rem",
      },
      colors: {
        red: {
          400: "#ee8989",
          500: "#e86060",
          900: "#652424",
        },

        yellow: {
          400: "#fcedbe",
          500: "#fbe6a8",
          900: "#6e6446",
        },

        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          950: "var(--primary-950)",
        },

        darkPrimary: {
          300: "var(--dark-primary-300)",
          400: "var(--dark-primary-400)",
          500: "var(--dark-primary-500)",
          600: "var(--dark-primary-600)",
          700: "var(--dark-primary-700)",
          800: "var(--dark-primary-800)",
          900: "var(--dark-primary-900)",
        },

        // This is a weird one-off for dark-mode.
        darkAccent: {
          200: "var(--dark-accent-200)",
        },

        black: {
          100: "#000000",
          200: "#101112",
          300: "#171818",
          400: "#292b2c",
          DEFAULT: "#000000",
        },

        "navigation-background-bottom": "#040035",
        "navigation-background-top": "#181B4C",
      },
      fontFamily: {
        // "Avenir Next W01", "Proxima Nova W01", "", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
        sans: ["Golos Text", ...defaultTheme.fontFamily.sans],
        display: ["Barlow"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes so we can turn on as needed to avoid conflicts
    }),
    require("@tailwindcss/typography"),
    require("tailwindcss-react-aria-components"),
    require("tailwindcss-animate"),
  ],
};
