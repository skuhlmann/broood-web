import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  base: "320px",
  md: "580px",
  lg: "900px",
  xl: "1075px",
};

export const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: "#272b23",
        color: "#c7cac2",
      },
    },
  },
  components: {
    Text: {
      textAlign: "left",
    },
  },
  colors: {
    transparent: "transparent",
    blackDark: "rgba(10, 10, 10, 0.960784)",
    blackLight: "#2b2c34",
    blackLighter: "#16161a",
    greyLight: "#a7a9be",
    greyDark: "#4a4a4a",
    white: "#fffffe",
    purple: "#822EA6",
    purpleLight: "#B66AD6",
    red: "#ff3864",
    yellow: "#F2E857",
    yellowDark: "#DCCF11",
    broodBlack: "#272b23",
    bodyHorrorGreen: "#6deec0",
    bodyHorrorRed: "#f25480",
    sicklyWhite: "#c7cac2",
  },
  fonts: {
    heading: `'Revue', sans-serif`,
    text: `'EB Garamond', serif`,
    body: `'EB Garamond', serif`,
    texturina: `'Nanum Gothic', sans-serif`,
    uncial: `'Revue', sans-serif`,
    sourceSansPro: `'EB Garamond', serif`,
    garamond: `'EB Garamond', serif`,
  },
  breakpoints,
});
