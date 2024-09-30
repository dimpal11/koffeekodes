/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        dark: '#1A1B2F', // Dark background
        teal: {
          300: '#34D399', // For headings
        },
        red: {
          400: '#EF4444', // For subheadings
        },
      },
    },
  },
  plugins: [],
}

