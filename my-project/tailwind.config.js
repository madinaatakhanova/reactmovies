/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nav: "#1A1A1A",
        btn: "#E50000",
        tree: "#141414",
        br:'#262626'
      },
    },
  },
  plugins: [],
};
