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
        backgroundColor: "#FA4701",
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
      <Box>
        <Box sx={{ marginLeft: "80px", marginTop: '100px' }}>
          <Typography
            fontFamily="Manrope"
            fontWeight="700"
            fontSize="80px"
            lineHeight="120%"
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
            marginTop="40px"
          >
            Мы хотим сделать 2023 год чуточку добрее и поэтому создали проект
            для помощи бездомным животным «Paws Up!». В нём мы попытаемся
            рассказать:
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: "24px", justifyContent: "center" }}>
          {aboutText.map((item, index) => (
            <Box
              sx={{
                width: "calc((100% - 160px - 48px) / 3)",
                height: 670,
                border: "3px solid rgba(239, 239, 239, 0.45)",
                borderRadius: "16px  16px 0 0",
                background: "#FF7E4B",
                overflow: "hidden",
                position: "relative",
                borderBottom: "none",
              }}
            >
              <Typography
                fontFamily="Manrope"
                fontWeight="700"
                fontSize="32px"
                lineHeight="120%"
                maxWidth="491px"
                letterSpacing="0"
                marginTop="56px"
                marginX="auto"
                style={{ position: "relative", zIndex: 1 }}
              >
                {item.text}
              </Typography>
              <Box sx={{ position: "absolute", bottom: '-5px', zIndex: 0 }}>
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
