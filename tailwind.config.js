/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/index.html", "./src/**/*.{js,ts,jsx,tsx,mjs,cjs}"],
  theme: {
    extend: {
      screens: {
        xsm: "300px",
      },
    },
  },
  plugins: [],
};
