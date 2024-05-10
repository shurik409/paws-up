import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-flip";
// import Noise from "../../img/noise.png";
import Lu from "../../img/lots/1.webp";
import Chacha from "../../img/lots/2.webp";
import Rio from "../../img/lots/3.webp";
import Kio from "../../img/lots/4.webp";
import Top from "../../img/lots/5.webp";
import Six from "../../img/lots/6.webp";
import CountdownTimer from "../../components/timer";

const info = [
  {
    id: 1,
    name: "Праздник",
    img: Lu,
  },
  {
    id: 2,
    name: "Проказник",
    img: Chacha,
  },
  {
    id: 3,
    name: "В засаде",
    img: Rio,
  },
  {
    id: 4,
    name: "Что?",
    img: Kio,
  },
  {
    id: 5,
    name: "Лапы вверх",
    img: Top,
  },
  {
    id: 6,
    name: "Котик ждет бенто-тортик",
    img: Six,
  },
];

const All = () => {
  const [maxValue, setMaxValue] = useState([]);
  const [auctionInfo, setAuctionInfo] = useState(null);
  // const [winner, setWinner] = useState('');

  const getMaxValue = async (id) => {
    const response = await fetch(`/api/maxvalue/${id}`);
    const value = await response.json();

    return value.max.money;
  };

  const getAllValue = async () => {
    const all = await Promise.all(
      Array.from({ length: info.length }, (_, i) => i + 1).map((id) =>
        getMaxValue(id)
      )
    );
    setMaxValue(all);
  };

  const getAuctionInfo = async () => {
    const response = await fetch(`/api/auction/open`);
    const value = await response.json();

    setAuctionInfo(value);
  };

  useEffect(() => {
    getAllValue();
    getAuctionInfo();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const endDate = new Date(auctionInfo.endDate);
      const currentDate = new Date();

      const isAuctionEnd = endDate - currentDate < 0;
      setAuctionInfo({ isAuctionEnd, endDate });
    }, 1000);

    return () => clearTimeout(timer);
  });

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
            ".timerHeading": {
              fontSize: "55px",
              textAlign: "center",
            },
            display: { xs: "block", lg: "flex" },
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
            marginY: "15px",
          }}
        >
          <Typography
            fontFamily="Manrope"
            lineHeight="110%"
            fontWeight={700}
            className="timerHeading"
            marginY="15px"
          >
            {auctionInfo?.isAuctionEnd
              ? `Аукцион закрыт`
              : `До конца аукциона:`}
          </Typography>
          {!auctionInfo?.isAuctionEnd && (
            <CountdownTimer endTime={auctionInfo?.endDate} />
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            columnGap: "100px",
            rowGap: "50px",
            maxWidth: "1440px",
            margin: "auto",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          {info.map((data, index) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", lg: "center" },
                maxWidth: { xs: 220, md: 270 },
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
                <Link
                  to={`/auction/lot/${index + 1}`}
                  style={{ textDecoration: "none" }}
                >
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
                      textDecoration: "none",
                      ":hover": {
                        background: "#fff",
                        color: "#0F5190",
                      },
                    }}
                    // onClick={handleSubmit}
                  >
                    {auctionInfo?.isAuctionEnd
                      ? "Узнать победителя"
                      : "Сделать ставку"}
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
