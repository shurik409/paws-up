import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Noise from "../../img/noise.png";
import FoodImg from "../../img/food.png";
import FoodImgMobile from "../../img/food_mobile.png";
import Star from "../../img/star.svg";

const Food = () => {
  const [activeFood, setActiveFood] = useState("");
  const foodsWithoutDescription = [
    {
      name: "Масло подсолнечное",
    },
    {
      name: "Геркулесовая каша",
    },
    {
      name: "Ливерка",
    },
    {
      name: "Консервы для собак",
    },
    {
      name: "Переноска",
    },
    {
      name: "Дирофен-паста 60",
    },
    {
      name: "Зоошампунь «Луговой»",
    },
    {
      name: "Ватные палочки",
    },
    {
      name: "Туалеты для котиков",
    },
  ];
  const foodWithDescription = [
    {
      name: "Сухой корм для котов",
      description: "Любой, кроме «Whiskas», «Kitekat» и «Felix».",
    },
    {
      name: "Лекарства",
      description: (
        <>
          «Дронтал» для котов на вес 4 кг.; «Амит Форте» - капли для ушей;
          <br />
          «Эритромицин» - мазь для глаз; Миконазол."
        </>
      ),
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "calc(100vh + 200px)", lg: "100vh" },
        backgroundColor: "#2176C9",
        position: "relative",
        zIndex: 0,
        overflow: "hidden",
        paddingBottom: { xs: "60px", lg: 0 },
      }}
    >
      <Box
        sx={{
          background: `url(${Noise})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          mixBlendMode: "hard-light",
          opacity: 0.16,
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          zIndex: -1,
        }}
      ></Box>
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          position: "absolute",
          right: 0,
          bottom: "-10px",
          height: "80%",
          zIndex: -1,
          img: {
            height: "100%",
          },
        }}
      >
        <img src={FoodImg} alt="food"></img>
      </Box>
      <Box
        sx={{
          marginLeft: { xs: "16px", lg: "80px" },
          marginTop: { xs: "40px", lg: "100px" },
          ".headline": {
            fontSize: { xs: "24px", lg: "50px", bg: "80px" },
          },
        }}
      >
        <Typography
          fontFamily="Manrope"
          fontWeight="700"
          lineHeight="120%"
          className="headline"
        >
          Будем рады, если сможете принести:
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: "60px",
          marginLeft: { xs: "16px", lg: "80px" },
          display: "flex",
          flexWrap: "wrap",
          gap: { xs: "8px", lg: "20px" },
          maxWidth: { lg: "auto", bg: "70%" },
        }}
      >
        {foodsWithoutDescription.map((item, index) => (
          <Box
            sx={{
              position: "relative",
              border: {
                xs: "1px solid #EFEFEF",
                lg: "2px solid #EFEFEF",
                bg: "3px solid #EFEFEF",
              },
              borderRadius: "126px",
              padding: { xs: "12px 24px", lg: "10px 20px", bg: "20px 40px" },
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              backgroundColor: activeFood === item.name ? "#EFEFEF" : "unset",
              "& .foodName": {
                color: activeFood === item.name ? "#2176C9" : "EFEFEF",
                fontSize: { xs: "16px", lg: "26px", bg: "32px" },
              },
              transition: "background-color 0.4s ease-in-out",
              marginLeft: { xs: index % 2 ? "auto" : "unset", lg: "0" },
              marginRight: { xs: index % 2 ? "16px" : "auto", lg: "0" },
            }}
            // onClick={() => setActiveFood(item.name)}
            // onMouseOver={(e) => {
            //   e.preventDefault();
            //   e.target.id !== "btn_line" && setActiveFood(item.name);
            // }}
            // onMouseLeave={() => setActiveFood("")}
          >
            <Typography
              fontFamily="Manrope"
              fontWeight="500"
              lineHeight="120%"
              className="foodName"
            >
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          marginTop: { xs: "8px", lg: "20px" },
          marginLeft: { xs: "0", lg: "80px" },
          paddingX: { xs: "16px", lg: 0 },
        }}
      >
        {foodWithDescription.map((item, index) => (
          <Box
            sx={{
              position: "relative",
              border: {
                xs: "1px solid #EFEFEF",
                lg: "2px solid #EFEFEF",
                bg: "3px solid #EFEFEF",
              },
              borderRadius: "126px",
              padding: { xs: "12px 24px", lg: "10px 20px", bg: "20px 40px" },
              cursor: "pointer",
              display: { xs: "block", lg: "flex" },
              alignItems: "center",
              marginBottom: { xs: "8px", lg: "20px" },
              backgroundColor: activeFood === item.name ? "#EFEFEF" : "unset",
              "& .foodName": {
                color: activeFood === item.name ? "#2176C9" : "EFEFEF",
                fontSize: { xs: "16px", lg: "26px", bg: "32px" },
                whiteSpace: "nowrap",
                textAlign: "center",
              },
              transition: "background-color 0.4s ease-in-out",
              width: "fit-content",
              marginX: { xs: "auto", lg: "0" },
              maxWidth: "max-content",
            }}
            onClick={() => setActiveFood(item.name)}
            onMouseOver={(e) => {
              e.preventDefault();
              e.target.id !== "btn_line" && setActiveFood(item.name);
            }}
            onMouseLeave={() => setActiveFood("")}
          >
            <Typography
              fontFamily="Manrope"
              fontWeight="500"
              lineHeight="120%"
              className="foodName"
            >
              {item.name}
            </Typography>
            {item.description && item.name !== activeFood && (
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  img: {
                    width: { xs: "12px", lg: "auto" },
                  },
                }}
              >
                <img src={Star} alt="star" />
              </Box>
            )}
            <Box sx={{ display: { xs: "none", lg: "block" } }}>
              {item.description && (
                <Box
                  sx={{
                    display: "flex",
                    marginLeft: activeFood === item.name ? "24px" : "0px",
                    gap: "24px",
                    maxWidth: activeFood === item.name ? "510px" : "0px",
                    maxHeight: "48px",
                    transition: "all 0.4s ease-in-out",
                    overflow: "hidden",
                    alignItems: "center",
                    opacity: activeFood === item.name ? 1 : 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  <Typography
                    fontFamily="Manrope"
                    fontWeight="500"
                    fontSize="40px"
                    lineHeight="120%"
                    color="rgba(7, 20, 33, 0.7)"
                  >
                    /
                  </Typography>
                  <Typography
                    fontFamily="Manrope"
                    fontWeight="500"
                    fontSize="20px"
                    lineHeight="120%"
                    color="rgba(7, 20, 33, 0.7);"
                  >
                    {item.description}
                  </Typography>
                </Box>
              )}
            </Box>
            <Box sx={{ display: { xs: "block", lg: "none" } }}>
              {item.description && (
                <Box
                  sx={{
                    gap: "24px",
                    maxHeight: activeFood === item.name ? "110px" : "0px",
                    transition: "all 0.4s ease-in-out",
                    overflow: "hidden",
                    alignItems: "center",
                    opacity: activeFood === item.name ? 1 : 0,
                  }}
                >
                  <Typography
                    fontFamily="Manrope"
                    fontWeight="500"
                    fontSize="12px"
                    lineHeight="120%"
                    color="rgba(7, 20, 33, 0.7);"
                  >
                    {item.description}
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: { xs: "block", lg: "none" },
          position: "absolute",
          right: 0,
          bottom: "-100px",
          width: "100%",
          zIndex: -1,
          img: {
            width: "100%",
          },
        }}
      >
        <img src={FoodImgMobile} alt="food"></img>
      </Box>
    </Box>
  );
};

export default Food;
