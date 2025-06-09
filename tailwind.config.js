/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Tell Tailwind where to scan for class usage
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Tailored blue
        accent: "#F59E0B",  // Amber/gold
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};

