/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
          center: true,
          padding: "15px"
      },

      colors: {
        accent: "#FF8F9C",
        blackish: "#1b1b1b",
      }
    },
  },
  plugins: [],
}