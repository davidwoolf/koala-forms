import { createStitches } from "@stitches/react";

const spaces = {
  0: "0",
  "0-5": ".125rem",
  1: ".25rem",
  "1-5": ".375rem",
  2: ".5rem",
  "2-5": ".675rem",
  3: ".75rem",
  "3-5": ".875rem",
  4: "1rem",
  "4-5": "1.125rem",
  5: "1.25rem",
  "5-5": "1.375rem",
  6: "1.5rem",
  "6-5": "1.625rem",
  7: "1.75rem",
  "7-5": "1.875rem",
  8: "2rem",
  "8-5": "2.125rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  56: "14rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
};

const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: "#fff",
      black: "#1A1A1A",
      black300: "#595959",
      black600: "#C1C1C1",
      primary: "#0D6CF2",
      primary_hover: "#094DAE",
      primary_focus: "#0762EB",
      primary_pressed: "#094D9A",
      secondary: "#5D6E86",
      secondary_hover: "#536277",
      secondary_pressed: "#475365",
      critical: "#D82C0D",
      warning: "#FFC453",
      success: "#008060",
      highlight: "#5BCDDA",
    },
    space: spaces,
    fontSizes: {
      text700: "2.5rem",
      text600: "2rem",
      text500: "1.5rem",
      text400: "1.25rem",
      text300: "1rem",
      text200: "0.875rem",
      text100: ".75rem",
    },
    fonts: {
      body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif",
    },
    lineHeights: {
      none: 1,
      tighter: 1.1,
      tight: 1.25,
      snug: 1.35,
      normal: 1.5,
      loose: 1.65,
      looser: 2,
    },
    letterSpacings: {
      none: 0,
      tight: "-0.025em",
      snug: "-0.0125em",
      loose: "0.025em",
      wide: "0.05em",
      wider: "0.075em",
    },
    sizes: {
      ...spaces,
      sm: "20rem",
      md: "28rem",
      lg: "36rem",
      xl: "40rem",
      "2xl": "48rem",
      "3xl": "56rem",
      "4xl": "64rem",
      "5xl": "72rem",
      "6xl": "80rem",
      full: "100%",
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      sm: "0.25rem",
      md: "0.5rem",
      lg: "0.75rem",
      xl: "1rem",
      "2xl": "1.25rem",
      "3xl": "1.5rem",
      "4xl": "1.75rem",
      "5xl": "2rem",
      full: "100%",
    },
    shadows: {},
    zIndices: {
      "-1": -1,
      100: 100,
      1001: 1001,
    },
    transitions: {},
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)",
  },
  utils: {
    inset: (value) => ({
      left: value,
      right: value,
      top: value,
      bottom: value,
    }),
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
    marginY: (value) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value) => ({ paddingTop: value, paddingBottom: value }),
    reset: () => ({ margin: 0, padding: 0, boxSizing: "border-box" }),
  },
});

export {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
};

export const HappyHale = () => {
  // config object
  return new Promise((res, rej) => {
    // setTimeout(() => {
    res(
      createTheme("happy-and-hale", {
        // insert config object
        colors: {
          primary: "rgb(6, 64, 54)",
        },
      })
    );
    // }, 3000);
  });
};
