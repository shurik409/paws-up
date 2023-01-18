import React from "react";
import { Box, Typography } from "@mui/material";
import Noise from "../../img/noise.png";
import Logo from "../../img/logo.svg";
import GirlWithDog from "../../img/girlWithDog.png";

const MainScreen = () => {
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
      <Box sx={{ marginLeft: "80px", paddingTop: "110px" }}>
        <Typography
          fontFamily="Montserrat"
          fontSize="32px"
          lineHeight="110%"
          marginLeft="16px"
          marginBottom="16px"
        >
          БЛАГОТВОРИТЕЛЬНЫЙ
        </Typography>
        <Typography
          fontFamily="Montserrat"
          fontSize="320px"
          lineHeight="74%"
          letterSpacing="-0.05em"
          marginBottom="16px"
        >
          КИНО
          <br />
          ВЕЧЕР
        </Typography>
        <Typography
          fontFamily="Manrope"
          fontWeight="600"
          fontSize="40px"
          lineHeight="100%"
          marginLeft="16px"
        >
          Вход за пожертвование
          <br />
          для приюта «Храброе Сердце»
        </Typography>
      </Box>
      <Box sx={{ marginLeft: "87px", marginTop: "190px" }}>
        <img src={Logo} alt="logo"></img>
      </Box>
      <Box
        sx={{
          background: `url(${GirlWithDog})`,
          width: 1138,
          height: "100%",
          position: "absolute",
          right: 0,
          top: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "35%",
            right: "170px",
            padding: "12px 20px",
            background: " #FA4701",
            borderRadius: "0px 14px 14px 14px",
          }}
        >
          <Typography
            fontFamily="Manrope"
            fontWeight="500"
            fontSize="24px"
            lineHeight="120%"
          >
            Ну пойдём на киновечер...
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default MainScreen;
