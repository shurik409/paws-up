import React, { useState } from "react";
import { MainScreen } from "../../components";
import { Box, Typography } from "@mui/material";

const Main = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [MainScreen, MainScreen, MainScreen, MainScreen, MainScreen];

  const getCurrentScreen = () => {
    return React.createElement(screens[currentScreen]);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          display: "flex",
          gap: "40px",
          justifyContent: "center",
          position: "absolute",
          top: "40px",
          left: 0,
          width: "100%",
          height: "8px",
          zIndex: 100,
        }}
      >
        {screens.map((value, index) => (
          <Box
            sx={{
              width: `calc((100% - 160px - ${40 * (screens.length - 1)}px) / ${
                screens.length
              })`,
              height: "8px",
              borderRadius: "4px",
              background: "#EFEFEF",
              opacity: index === currentScreen ? 1 : 0.3,
              cursor: 'pointer',
            }}
          ></Box>
        ))}
      </Box>
      <React.Fragment>{getCurrentScreen()}</React.Fragment>
    </Box>
  );
};
export default Main;
