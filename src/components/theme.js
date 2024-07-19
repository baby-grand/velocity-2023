import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import {
  pxToRem,
  convertHtmlListToArray,
  calculatePercentage,
  createClassName,
  kebobToCamelCase,
  randomNumber,
} from "../utils/helpers";
const theme = createTheme({
  // button defaults
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
        disableTouchRipple: true,
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          borderRadius: "0px",
          textTransform: "none",
          fontWeight: "bold",
          fontSize: {
            xl: pxToRem(18),
            lg: pxToRem(18),
            md: pxToRem(18),
            sm: pxToRem(18),
            xs: pxToRem(18),
          },
          padding: {
            xl: pxToRem(16),
            lg: pxToRem(16),
            md: pxToRem(16),
            sm: pxToRem(16),
            xs: pxToRem(16),
          },
          lineHeight: {
            xl: pxToRem(24),
            lg: pxToRem(24),
            md: pxToRem(24),
            sm: pxToRem(24),
            xs: pxToRem(24),
          },
          letterSpacing: {
            xl: pxToRem(0.5),
            lg: pxToRem(0.5),
            md: pxToRem(0.5),
            sm: pxToRem(0.5),
            xs: pxToRem(0.5),
          },
        },
        outlined: {
          boxShadow: "none",
          border: "2px solid #000000",
        },
        outlinedPrimary: {
          backgroundColor: "#000000",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#000000",
            color: "#ffffff",
          },
        },
        outlinedSecondary: {
          backgroundColor: "#ffffff",
          color: "#000000",
          "&:hover": {
            backgroundColor: "#ffffff",
            color: "#000000",
          },
        },
      },
    },
  },
  // palette
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#cccccc",
    },
  },

  typography: {
    fontFamily: [
      "acumin-variable",
      '"SF Pro Display"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1400px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontStyle: "normal",
          lineHeight: "113%",
        },
        h2: {
          fontStyle: "normal",
          lineHeight: "97%",
        },
        h4: {
          fontStyle: "normal",
          lineHeight: "146%",
        },
        body1: {
          fontStyle: "normal",
          fontSize: {xs: "16px", sm: "17px", md: "18px", lg: "18px", xl: "18px"},
          lineHeight: "167%",
        },
      },
    },
  },
  palette: {
    primary: {
      main: red[500],
    },
  },
  extraColors: {
    bgSofter: "#F5F5F5",
    bgSoft: "#efefef",
    yellow: "#fbc02d",
    seafoam: "#03ffda",
    seafoamLight: "#CBFFFC",
    magenta: "#ff24a1",
    magentaLight: "#FFD9E1",
    purple: "#450ADF",
    purpleLight: "#E3DDF1",
    red: "#F91B48",
    black: "#000000",
    white: "#FFFFFF",
  },
});
export default theme;
