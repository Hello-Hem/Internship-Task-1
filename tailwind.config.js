// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"], // Overrides default sans
        heading: ["var(--font-playfair)"], // Creates font-heading class
      },
    },
  },
};
