/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/*
  Make sure you build your Tailwind CSS before serving your site.
  Run: npm run build
  Then serve the ./dist directory:
  npx serve ./dist
*/