import React, { useState, useEffect } from "react";
import { MainScreen, Place, Food, About, Help } from "../../components";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip, Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/effect-flip";

const Main = () => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [MainScreen, Place, Food, About, Help];

  // const getCurrentScreen = () => {
  //   return React.createElement(screens[currentScreen]);
  // };

  // const increaseScreen = () => {
  //   setCurrentScreen((prevScreen) => (prevScreen !== 4 ? prevScreen + 1 : 0));
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     increaseScreen();
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);

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
              transition: 'opacity 0.4s ease-in-out',
            }}
          ></Box>
        ))}
      </Box>
      <Swiper
        grabCursor={false}
        simulateTouch={false}
        className="mySwiper"
        slidesPerView={1}
        mousewheel={true}
        modules={[Mousewheel]}
        draggable={false}
        loop={true}
        onSlideChange={({ activeIndex }) => setCurrentScreen(activeIndex - 1)}
      >
        {screens.map((Component, index) => (
          <SwiperSlide>
            <Component />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <React.Fragment>{getCurrentScreen()}</React.Fragment> */}
    </Box>
  );
};
export default Main;
