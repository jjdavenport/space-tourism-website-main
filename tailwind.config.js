import fluid, { extract, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
    extract,
  },
  theme: {
    screens,
    extend: {
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spinPlanet: "rotate 500s linear infinite",
      },
      fontFamily: {
        barlow: ["barlow condensed", "sans-serif"],
        belleFair: ["bellefair", "sans-serif"],
      },
      backgroundImage: {
        bgHomeDesktop:
          "url('/src/components/assets/home/background-home-desktop.jpg')",
        bgHomeMobile:
          "url('/src/components/assets/home/background-home-mobile.jpg')",
        bgHomeTablet:
          "url('/src/components/assets/home/background-home-tablet.jpg')",
        bgDestinationDesktop:
          "url('/src/components/assets/destination/background-destination-desktop.jpg')",
        bgDestinationMobile:
          "url('/src/components/assets/destination/background-destination-mobile.jpg')",
        bgDestinationTablet:
          "url('/src/components/assets/destination/background-destination-tablet.jpg'",
        bgCrewDesktop:
          "url('/src/components/assets/crew/background-crew-desktop.jpg')",
        bgCrewMobile:
          "url('/src/components/assets/crew/background-crew-mobile.jpg')",
        bgCrewTablet:
          "url('/src/components/assets/crew/background-crew-tablet.jpg')",
        bgTechnologyDesktop:
          "url('/src/components/assets/technology/background-technology-desktop.jpg')",
        bgTechnologyMobile:
          "url('/src/components/assets/technology/background-technology-mobile.jpg')",
        bgTechnologyTablet:
          "url('/src/components/assets/technology/background-technology-tablet.jpg')",
      },
      colors: {
        lightBlue: "hsl(233, 92%, 91%)",
      },
    },
  },
  plugins: [fluid],
};
