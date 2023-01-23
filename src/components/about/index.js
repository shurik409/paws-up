import React from "react";
import { Box, Typography } from "@mui/material";
import Noise from "../../img/noise.png";
import First from "../../img/about/first.png";
import Second from "../../img/about/second.png";
import Third from "../../img/about/third.png";

const About = () => {
  const aboutText = [
    {
      text: "Как можно помогать приютам и просто дворовым животным.",
      img: First,
    },
    {
      text: "Где можно познакомиться с пушистыми друзьями и забрать их к себе домой.",
      img: Second,
    },
    {
      text: "На какие crazy тусовки с нами можно попасть, а заодно и помочь животным.",
      img: Third,
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#2176C9",
        position: "relative",
        zIndex: 0,
        overflow: "hidden",
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
          display: "flex",
          flexDirection: "column",
          height: { lg: "100vh" },
        }}
      >
        <Box
          sx={{
            marginLeft: { xs: "16px", lg: "80px" },
            marginTop: { xs: "40px", lg: "100px" },
            flexGrow: { lg: 1 },
            ".headline": {
              fontSize: { xs: "24px", lg: "32px", bg: "80px" },
            },
            ".description": {
              fontSize: { xs: "14px", lg: "32px", bg: "40px" },
              marginTop: { xs: "24px", lg: "40px" },
            },
          }}
        >
          <Typography
            fontFamily="Manrope"
            fontWeight="700"
            fontSize="80px"
            lineHeight="120%"
            className="headline"
          >
            О нас
          </Typography>
          <Typography
            fontFamily="Manrope"
            fontWeight="500"
            fontSize="40px"
            lineHeight="120%"
            maxWidth="1500px"
            letterSpacing="0"
            className="description"
          >
            Мы хотим сделать 2023 год чуточку добрее и поэтому создали проект
            для помощи бездомным животным «Paws Up!». В нём мы попытаемся
            рассказать:
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", lg: "row" },
            gap: { xs: "12px", lg: "24px" },
            justifyContent: "center",
            marginTop: "20px",
            paddingX: { xs: "16px", lg: "0" },
            marginBottom: { xs: "77px", lg: 0 },
            flexWrap: { xs: "wrap", lg: "nowrap" },
          }}
        >
          {aboutText.map((item, index) => (
            <Box
              sx={{
                width: { xs: "288px", lg: "calc((100% - 160px - 48px) / 3)" },
                height: { xs: 285, lg: 670 },
                border: {
                  xs: "1px solid rgba(239, 239, 239, 0.45)",
                  lg: "3px solid rgba(239, 239, 239, 0.45)",
                },
                borderRadius: { xs: "16px", lg: "16px  16px 0 0" },
                background: "#2176C9",
                overflow: "hidden",
                position: "relative",
                borderBottom: { lg: "none" },
                ".text": {
                  fontWeight: { xs: 500, bg: 700 },
                  marginTop: { xs: "24px", lg: "56px" },
                  fontSize: { xs: "16px", lg: "24px", bg: "32px" },
                  paddingX: { lg: "20px", bg: "40px" },
                  maxWidth: { xs: 246, lg: "unset" },
                },
              }}
            >
              <Typography
                fontFamily="Manrope"
                fontWeight="700"
                lineHeight="120%"
                letterSpacing="0"
                marginTop="56px"
                marginX="auto"
                style={{ position: "relative", zIndex: 1 }}
                className="text"
              >
                {item.text}
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  right: "0",
                  top: { xs: 0, lg: "unset" },
                  bottom: { lg: "-150px", bg: "-5px" },
                  zIndex: 0,
                  img: {
                    width: { xs: "100%", lg: "auto" },
                  },
                }}
              >
                <img src={item.img} alt="about" />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default About;
