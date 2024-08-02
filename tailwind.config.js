/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        barlow: "barlow condensed, sans-serif",
      },
      backgroundImage: {
        bgHomeDesktop:
          "url('/src/components/assets/home/background-home-desktop.jpg')",
        bgHomeMobile:
          "url('/src/components/assets/home/background-home-mobile.jpg')",
        bgHomeTablet:
          "url('/src/components/assets/home/background-home-tablet.jpg')",
      },
    },
  },
  plugins: [],
};
