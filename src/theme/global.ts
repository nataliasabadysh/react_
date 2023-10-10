import { createGlobalStyle } from "styled-components";
import "modern-normalize";

import "@fontsource/manrope/300.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/700.css";

export const theme = {
  colors: {
    black: "#212121",
    white: "#fff",
    accent: "orangered",
  },
  radii: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
};

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: "Manrope", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p {
  margin: 0;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
`;
