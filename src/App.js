import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import { Main } from "./pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
});

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </Box>
  );
}

export default React.memo(App);
