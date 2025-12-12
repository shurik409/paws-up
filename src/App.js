import React from "react";
import "./App.css";
import { Box } from "@mui/material";
import {
  Main,
  Admin,
  All,
  Music,
  Count,
  Giveaway,
  GiveawayResults,
} from "./pages";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
            <Route path="/auction/results/:id" element={<Admin />} />
            <Route path="/auction/" element={<All />} />
            <Route path="/music/:id" element={<Music />} />
            <Route path="/count/" element={<Count />} />
            <Route path="/giveaway/" element={<Giveaway />} />
            <Route path="/giveaway/results" element={<GiveawayResults />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
}

export default React.memo(App);
