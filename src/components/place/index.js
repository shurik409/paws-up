import React from "react";
import { Box, Typography } from "@mui/material";
import Noise from "../../img/noise.png";
import Spin from "../../img/spin.png";

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
      <Box sx={{ position: "absolute", right: 0, zIndex: -1 }}>
        <img src={Spin} alt="spin"></img>
      </Box>
      <Box
        sx={{
          marginLeft: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
          a: {
            color: "#EFEFEF",
            textDecoration: "none",
            borderBottom: "2px solid #EFEFEF",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "self-end" }}>
          <Typography
            fontFamily="Manrope"
            fontWeight="600"
            fontSize="32px"
            lineHeight="120%"
            width="110px"
          >
            Дата
          </Typography>
          <Typography
            fontFamily="Manrope"
            fontWeight="700"
            fontSize="80px"
            lineHeight="100%"
            marginLeft="208px"
          >
            26 января
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "self-end",
            marginTop: "64px",
          }}
        >
          <Typography
            fontFamily="Manrope"
            fontWeight="600"
            fontSize="32px"
            lineHeight="120%"
            width="110px"
          >
            Время
          </Typography>
          <Typography
            fontFamily="Manrope"
            fontWeight="700"
            fontSize="80px"
            lineHeight="100%"
            marginLeft="208px"
          >
            19:00
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "self-end",
            marginTop: "64px",
          }}
        >
          <Typography
            fontFamily="Manrope"
            fontWeight="600"
            fontSize="32px"
            lineHeight="120%"
            width="110px"
          >
            Место
          </Typography>
          <Typography
            fontFamily="Manrope"
            fontWeight="700"
            fontSize="80px"
            lineHeight="100%"
            marginLeft="208px"
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
            fontSize="32px"
            lineHeight="120%"
            marginLeft="40px"
          >
            ул. Кальварийская, 21
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: "64px",
          }}
        >
          <Typography
            fontFamily="Manrope"
            fontWeight="600"
            fontSize="32px"
            lineHeight="120%"
            width="110px"
          >
            Вход
          </Typography>
          <Typography
            fontFamily="Manrope"
            fontWeight="700"
            fontSize="80px"
            lineHeight="100%"
            marginLeft="208px"
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
