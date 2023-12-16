/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        brightBlue: "hsl(220, 98%, 61%)",
      },
      lightTheme: {
        veryLightGray: "hsl(0, 0%, 98%)",
        veryLightGrayishBlue: "hsl(236, 33%, 92%)",
        lightGrayishBlue: "hsl(233, 11%, 84%)",
        darkGrayishBlue: "hsl(236, 9%, 61%)",
        veryDarkGrayishBlue: "hsl(235, 19%, 35%)",
      },
      darkTheme: {
        veryDarkBlue: "hsl(235, 21%, 11%)",
        veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        lightGrayishBlue: "hsl(234, 39%, 85%)",
        lightGrayishBlueHover: "hsl(236, 33%, 92%)",
        darkGrayishBlue: "hsl(234, 11%, 52%)",
        veryDarkGrayishBlue: {
          default: "hsl(233, 14%, 35%)",
          hover: "hsl(237, 14%, 26%)", // Define separate hue for hover if needed
        },
      },
    },
    extend: {
      fontFamily: {
        josefinSans: ["Josefin Sans", "sans-serif"],
      },
      fontSize: {
        base: ["18px", "1.25"], // Base size and line height
      },
      fontWeight: {
        bold: 700,
      },
      backgroundImage: {
        darkThemeImage: "url(./src/assets/images/bg-desktop-dark.jpg)",
        lightThemeImage: "url(./src/assets/images/bg-desktop-light.jpg)",
      },
    },
  },
  plugins: [require("daisyui")],
};
