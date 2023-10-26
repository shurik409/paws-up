import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-flip";
// import Noise from "../../img/noise.png";
import Lu from "../../img/lots/1.jpg";
import Chacha from "../../img/lots/2.jpg";
import Rio from "../../img/lots/3.jpg";
import Kio from "../../img/lots/4.jpg";
import Top from "../../img/lots/5.jpg";
import Six from "../../img/lots/6.jpg";
import Seven from "../../img/lots/7.jpg";

const info = [
  {
    id: 1,
    name: "Карнавал",
    img: Lu,
  },
  {
    id: 2,
    name: "Пушок",
    img: Chacha,
  },
  {
    id: 3,
    name: "Хорошая примета",
    img: Rio,
  },
  {
    id: 4,
    name: "Бандит",
    img: Kio,
  },
  {
    id: 5,
    name: "Bad Bat",
    img: Top,
  },
  {
    id: 6,
    name: "Witch Bitch",
    img: Six,
  },
  {
    id: 7,
    name: "Доброе утро",
    img: Seven,
  },
];

const All = () => {
  const [maxValue, setMaxValue] = useState([]);
  // const [winner, setWinner] = useState('');

  const getMaxValue = async (id) => {
    const response = await fetch(`/api/maxvalue/${id}`);
    const value = await response.json();

    return value.max.money;
  };

  const getAllValue = async () => {
    const all = await Promise.all(
      [1, 2, 3, 4, 5, 6, 7].map((id) => getMaxValue(id))
    );
    setMaxValue(all);
  };

  useEffect(() => {
    getAllValue();
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#2176C9",
          position: "relative",
          zIndex: 0,
          paddingBottom: "40px",
        }}
      >
        {/* <Box
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
        ></Box> */}
        <Box
          sx={{
            ".head": {
              paddingY: "30px",
              fontSize: { xs: "40px", md: "80px" },
              textAlign: "center",
            },
          }}
        >
          <Typography
            fontFamily="Manrope"
            lineHeight="110%"
            marginBottom="16px"
            fontWeight={700}
            className="head"
          >
            Текущие лоты
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(auto-fill, minmax(220px, 1fr))",
              md: "repeat(auto-fill, minmax(270px, 1fr))",
            },
            gridGap: "70px",
          }}
        >
          {info.map((data, index) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", lg: "center" },
                maxWidth: 315,
                margin: "auto",
              }}
              key={`lot-${index}`}
            >
              <Box
                sx={{
                  width: { xs: 220, md: 270 },
                  height: { xs: 300, md: 355 },
                  marginBottom: "16px",
                  background: `url(${data.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              ></Box>
              <Box
                sx={{
                  textAlign: { xs: "center" },
                  ".name": {
                    fontSize: { xs: "25px" },
                    textAlign: "center",
                  },
                  ".money": {
                    fontSize: { xs: "25px" },
                    textAlign: "center",
                  },
                  "& label.Mui-focused": {
                    color: "#FA4701",
                  },
                  ".MuiInputBase-root": {
                    backgroundColor: "#FFF",
                    ":hover": {
                      backgroundColor: "#FFF",
                    },
                    ":focus": {
                      backgroundColor: "#FFF",
                    },
                    "MuiFilledInput-root": {
                      "&:hover": {
                        backgroundColor: "#FFF",
                      },
                    },
                  },
                  "& .MuiFilledInput-root": {
                    backgroundColor: "#FFF",
                    // borderRadius: "20px 20px 0 0",
                    color: "#727272",
                    fontFamily: "Manrope",
                    "& fieldset": {
                      borderColor: "#FFF",
                    },
                    "&:hover fieldset": {
                      borderColor: "#FFF",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#FFF",
                      backgroundColor: "#FFF",
                    },
                    "&.Mui-focused": {
                      borderColor: "#FFF",
                      backgroundColor: "#FFF",
                    },
                  },
                }}
              >
                <Typography
                  fontFamily="Manrope"
                  lineHeight="110%"
                  marginBottom="16px"
                  fontWeight={700}
                  className="name"
                >
                  {`«${data.name}»`}
                </Typography>
                <Typography
                  fontFamily="Manrope"
                  lineHeight="110%"
                  marginBottom="16px"
                  fontWeight={700}
                  className="money"
                >
                  {maxValue[index]} BYN
                </Typography>
                <Link to={`/auction/lot/${index+1}`} style={{textDecoration: 'none'}}>
                  <Box
                    sx={{
                      padding: "12px 34px",
                      alignItems: "flex-start",
                      width: "fit-content",
                      gap: "10px",
                      borderRadius: "20px",
                      background: "#0F5190",
                      transition: "all 0.3s ease-in-out",
                      cursor: "pointer",
                      fontFamily: "Manrope",
                      margin: { xs: "auto", lg: "none" },
                      fontWeight: 700,
                      color: "#FFF",
                      textDecoration: 'none',
                      ":hover": {
                        background: "#fff",
                        color: "#0F5190",
                      },
                    }}
                    // onClick={handleSubmit}
                  >
                    Сделать ставку
                  </Box>
                </Link>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default All;
