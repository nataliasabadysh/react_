import { createTheme } from "@mui/material/styles";
import "modern-normalize";

import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";

export const theme = createTheme({
  components: {
    MuiContainer: {
      defaultProps: {
        // maxWidth: 'laptop',
      },
    },
  },
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
