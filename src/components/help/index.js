import React from "react";
import { Box, Typography } from "@mui/material";
import Noise from "../../img/noise.png";
import HelpImage from "../../img/help.png";
import Logo from "../../img/logo.svg";

const Help = () => {
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
      <Box sx={{ position: "absolute", right: 0, zIndex: -1 }}>
        <img src={HelpImage} alt="spin"></img>
      </Box>
      <Box
        sx={{
          marginLeft: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Typography
          fontFamily="Manrope"
          fontWeight="700"
          fontSize="80px"
          lineHeight="100%"
        >
          Как помочь?
        </Typography>
        <Typography
          fontFamily="Manrope"
          fontWeight="500"
          fontSize="40px"
          lineHeight="120%"
          marginTop="40px"
        >
          Средства можно зачислить на один из номеров (МТС).
        </Typography>
        <Typography
          fontFamily="Manrope"
          fontWeight="500"
          fontSize="24px"
          lineHeight="120%"
          marginTop="12px"
          style={{ opacity: 0.7 }}
        >
          *Нажав на номер вы автоматически его скопируете
        </Typography>
        <Box
          sx={{
            position: "relative",
            width: "732px",
            height: "144px",
            backgroundColor: "#1A3050",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
            transform: "rotate(-2.53deg)",
            marginTop: "50px",
            zIndex: 3,
          }}
        >
          <Typography
            fontFamily="Manrope"
            fontWeight="600"
            fontSize="80px"
            lineHeight="120%"
          >
            +3753337447652
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "732px",
            height: "144px",
            backgroundColor: "#0F5190",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
            transform: "rotate(2.79deg)",
            marginLeft: "350px",
            zIndex: 2,
          }}
        >
          <Typography
            fontFamily="Manrope"
            fontWeight="600"
            fontSize="80px"
            lineHeight="120%"
          >
            +3752930337319
          </Typography>
        </Box>
        <Typography
          fontFamily="Manrope"
          fontWeight="500"
          fontSize="40px"
          lineHeight="120%"
          marginTop="60px"
        >
          Все переведённые средства идут напрямую приюту «Храброе Сердце».
          <br />
          Отчёт о потраченных деньгах будет предъявляться самим приютом
          <br />в своих социальных сетях.
        </Typography>

        <Box sx={{ marginTop: "64px" }}>
          <img src={Logo} alt="logo"></img>
        </Box>
      </Box>
    </Box>
  );
};

export default Help;
