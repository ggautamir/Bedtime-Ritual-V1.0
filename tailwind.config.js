/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#F5F5DC",
        primary: "#1A237E",
      },
      boxShadow: {
        story: "0 18px 40px -24px rgba(26, 35, 126, 0.35)",
      },
    },
  },
  plugins: [],
};

module.exports = config;
