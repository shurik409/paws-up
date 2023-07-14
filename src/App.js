import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import { Main } from "./pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1024,
      xl: 1200,
      bg: 1700,
    },
  },
});

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/auction/lot/:id" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
}

export default React.memo(App);
