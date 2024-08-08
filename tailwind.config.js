/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#8d8d8f",
          "200": "rgba(0, 0, 0, 0.76)",
          "300": "rgba(144, 138, 148, 0.13)",
        },
        dimgray: "#697074",
        aliceblue: "#e7f1ff",
        darkslategray: "#263238",
        "black-white-900": "#000",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
      },
      borderRadius: {
        xl: "20px",
        "31xl": "50px",
        "10xs-5": "2.5px",
        "8xs-3": "4.3px",
      },
    },
    fontSize: {
      sm: "14px",
      "5xs": "8px",
      mini: "15px",
      "3xl": "22px",
      inherit: "inherit",
    },
    screens: {
      mq400: {
        raw: "screen and (max-width: 400px)",
      },
      mq330: {
        raw: "screen and (max-width: 330px)",
      },
      mq321: {
        raw: "screen and (max-width: 321px)",
      },
      mq313: {
        raw: "screen and (max-width: 313px)",
      },
      mq310: {
        raw: "screen and (max-width: 310px)",
      },
      mq299: {
        raw: "screen and (max-width: 299px)",
      },
      mq288: {
        raw: "screen and (max-width: 288px)",
      },
      mq272: {
        raw: "screen and (max-width: 272px)",
      },
      mq271: {
        raw: "screen and (max-width: 271px)",
      },
      mq265: {
        raw: "screen and (max-width: 265px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
