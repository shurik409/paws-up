import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import { Main } from "./pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
        <Router>
          <Switch>
            <Route path="auction/lot/:id" children={<Main />} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Box>
  );
}

export default React.memo(App);
