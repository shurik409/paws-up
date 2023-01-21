import React from "react";
import { Box, Typography } from "@mui/material";
import Noise from "../../img/noise.png";
import Spin from "../../img/spin.png";
import SpinMobile from "../../img/spin_mobile.png";

const Place = () => {
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
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          position: "absolute",
          right: 0,
          zIndex: -1,
        }}
      >
        <img src={Spin} alt="spin"></img>
      </Box>
      <Box
        sx={{
          display: { xs: "block", lg: "none" },
          position: "absolute",
          right: 0,
          top: 0,
          zIndex: -1,
        }}
      >
        <img src={SpinMobile} alt="spin"></img>
      </Box>
      <Box
        sx={{
          marginLeft: { xs: "15px", lg: "80px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
          a: {
            color: "#EFEFEF",
            textDecoration: "none",
            borderBottom: "2px solid #EFEFEF",
          },
          ".name": {
            minWidth: { xs: "40px", lg: "110px" },
            fontSize: { xs: "12px", lg: "32px" },
          },
          ".info": {
            fontSize: { xs: "24px", lg: "40px", bg: "80px" },
            marginLeft: { xs: "21px", lg: "208px" },
          },
          ".subinfo": {
            fontSize: { xs: "14px", lg: "32px" },
            marginLeft: { xs: "21px", lg: "40px" },
            marginTop: { xs: "8px", lg: "0" },
          },
          ".infoBlock": {
            marginTop: { xs: "24px", lg: "64px" },
          },
          ".place": {
            display: "flex",
            alignItems: { lg: "self-end" },
            flexDirection: { xs: "column", lg: "row" },
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "self-end" }}>
          <Typography
            fontFamily="Manrope"
            fontWeight="600"
            lineHeight="120%"
            className="name"
          >
            Дата
          </Typography>
          <Typography
            fontFamily="Manrope"
            fontWeight="700"
            lineHeight="100%"
            className="info"
          >
            26 января
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "self-end",
          }}
          className="infoBlock"
        >
          <Typography
            fontFamily="Manrope"
            fontWeight="600"
            lineHeight="120%"
            className="name"
          >
            Время
          </Typography>
          <Typography
            fontFamily="Manrope"
            fontWeight="700"
            lineHeight="100%"
            className="info"
          >
            19:00
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "self-end",
          }}
          className="infoBlock"
        >
          <Typography
            fontFamily="Manrope"
            fontWeight="600"
            lineHeight="120%"
            className="name"
          >
            Место
          </Typography>
          <Box className="place">
            <Typography
              fontFamily="Manrope"
              fontWeight="700"
              lineHeight="100%"
              className="info"
            >
              Бар «
              <a
                href="https://www.instagram.com/spinbarminsk/"
                target="_blank"
                rel="noreferrer"
              >
                Spin
              </a>
              »
            </Typography>
            <Typography
              fontFamily="Manrope"
              fontWeight="600"
              lineHeight="120%"
              className="subinfo"
            >
              ул. Кальварийская, 21
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          className="infoBlock"
        >
          <Typography
            fontFamily="Manrope"
            fontWeight="600"
            lineHeight="120%"
            className="name"
          >
            Вход
          </Typography>
          <Typography
            fontFamily="Manrope"
            fontWeight="700"
            lineHeight="100%"
            className="info"
          >
            Пожертвование для животных
            <br />
            из приюта «
            <a
              href="https://www.instagram.com/brave_heart_minsk/"
              target="_blank"
              rel="noreferrer"
            >
              Храброе сердце
            </a>
            »
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Place;
