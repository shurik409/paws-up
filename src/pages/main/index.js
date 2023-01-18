import React, { useState, useEffect } from "react";
import { MainScreen, Place, About, Help } from "../../components";
import { Box, Typography } from "@mui/material";

const Main = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [MainScreen, Place, MainScreen, About, Help];

  const getCurrentScreen = () => {
    return React.createElement(screens[currentScreen]);
  };

  const increaseScreen = () => {
    console.log(currentScreen)
    const newScreen = currentScreen !== 4 ? currentScreen + 1 : 0;
    setCurrentScreen((prevScreen) => prevScreen !== 4 ? prevScreen + 1 : 0);
    console.log(10, newScreen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      increaseScreen();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
              cursor: "pointer",
            }}
          ></Box>
        ))}
      </Box>
      <React.Fragment>{getCurrentScreen()}</React.Fragment>
    </Box>
  );
};
export default Main;
