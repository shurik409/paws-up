import React, { useState, useRef, useEffect } from "react";
import { MainScreen, Place, Food, About, Help } from "../../components";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import "swiper/css";
import "swiper/css/effect-flip";

const Main = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const swiperRef = useRef(null);
  const helpRef = useRef(null);
  console.log(helpRef);
  const screens = [
    { Component: MainScreen, name: "Киновечер", id: "main" },
    { Component: Place, name: "Место", id: "place" },
    { Component: Food, name: "Что нужно?", id: "food" },
    { Component: About, name: "О нас", id: "about" },
    { Component: Help, name: "Помощь", id: "help" },
  ];

  useEffect(() => {
    let hash = window.location.hash;
    if (hash === "#help") {
      setCurrentScreen(4);
      swiperRef.current.swiper.slideTo(5);
      const section = document.querySelector("#help");
      section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          display: { xs: "none", lg: "flex" },
          gap: "40px",
          justifyContent: "center",
          position: "absolute",
          top: "40px",
          left: 0,
          width: "100%",
          height: "8px",
          zIndex: 100,
          transition: "all 0.2s ease-in-out",
          ".menu-name": {
            transition: "all 0.2s ease-in-out",
            maxHeight: "0",
            overflow: "hidden",
          },
          ":hover": {
            height: "40px",
            ".menu": {
              height: "40px",
            },
            ".menu-name": {
              maxHeight: "25px",
            },
          },
        }}
      >
        {screens.map(({ name }, index) => (
          <Box
            className="menu"
            sx={{
              transition: "all 0.2s ease-in-out, opacity 0.4s ease-in-out",
              width: `calc((100% - 160px - ${40 * (screens.length - 1)}px) / ${
                screens.length
              })`,
              height: "8px",
              borderRadius: "4px",
              background: "#EFEFEF",
              opacity: index === currentScreen ? 1 : 0.3,
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              ":hover": {
                opacity: 1,
              },
            }}
            onClick={() => {
              setCurrentScreen(index);
              swiperRef.current.swiper.slideTo(index + 1);
            }}
          >
            <Typography
              fontFamily="Manrope"
              fontWeight="500"
              fontSize="20px"
              lineHeight="120%"
              color="rgba(7, 20, 33, 0.7);"
              className="menu-name"
            >
              {name}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
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
          ref={swiperRef}
        >
          {screens.map(({ Component }, index) => (
            <SwiperSlide>
              <Component />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <Box sx={{ display: { xs: "block", lg: "none" } }}>
        {screens.map(({ Component, id }, index) => (
          <Box id={id}>
            <Component />
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Main;
