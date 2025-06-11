/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        accent: "#F59E0B",
        background: "#F9FAFB"
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(to right, #e0f2fe, #fff)",
        'code-bg': "url('/pexels-goumbik-574071.jpg')"  // 🌠 added your background image
      }
    }
  },
  plugins: []
};
