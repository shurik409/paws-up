import React, { useState, useEffect } from "react";
import ReconnectingWebSocket from "reconnecting-websocket";
import { Box, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import CountdownTimer from "../../components/timer/index";

import "swiper/css";
import "swiper/css/effect-flip";
// import Noise from "../../img/noise.png";

import { LotsInfo } from "../../lotsInfo";

const All = () => {
  const [maxValue, setMaxValue] = useState([]);
  const [auctionInfo, setAuctionInfo] = useState([]);
  const [mainInfo, setMainInfo] = useState(null);
  // const [winner, setWinner] = useState('');

  const getMaxValue = async (id) => {
    const response = await fetch(`/api/maxvalue/${id}`);
    const value = await response.json();

    return value;
  };

  const getAllValue = async () => {
    const all = await Promise.all(
      Array.from({ length: LotsInfo.length }, (_, i) => i + 1).map((id) =>
        getMaxValue(id)
      )
    );
    setMaxValue(all);
  };

  const getVallueById = async (id) => {
    const maxValueById = await getMaxValue(id);
    setMaxValue((prevMaxValue) => {
      const newArray = [...prevMaxValue];
      newArray[id - 1] = maxValueById;
      return newArray;
    });
  };

  const getAuctionInfo = async () => {
    const response = await fetch(`/api/auction/open`);
    const value = await response.json();
    setMainInfo(value);
    setAuctionInfo(new Array(LotsInfo.length).fill(value));
  };

  useEffect(() => {
    getAllValue();
    getAuctionInfo();
  }, []);

  useEffect(() => {
    if (auctionInfo.length === maxValue.length && maxValue.length > 0) {
      shouldAuctionContinue();
    }
  }, [auctionInfo, maxValue]);

  const shouldAuctionContinue = () => {
    const newInfo = auctionInfo.map((auctionInfoLot, index) => {
      const time1 = new Date(auctionInfoLot.endDate);
      const time2 = new Date(maxValue[index].max.time);
      const difference = +time1 - +new Date();
      const isAuctionContinue = time1 - time2 <= 60 * 1000;
      if (isAuctionContinue) {
        time1.setMinutes(time1.getMinutes() + 1);
        return {
          endDate: time1,
          isAuctionEnd: false,
        };
      } else {
        return {
          endDate: auctionInfoLot.endDate,
          isAuctionEnd: difference > 0 ? auctionInfoLot.isAuctionEnd : true,
        };
      }
    });
    setAuctionInfo(newInfo);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const endDate = new Date(mainInfo.endDate);
      const currentDate = new Date();

      const isAuctionEnd = endDate - currentDate < 0;
      setMainInfo({ isAuctionEnd, endDate });
      setAuctionInfo(
        new Array(LotsInfo.length).fill({ isAuctionEnd, endDate })
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [mainInfo]);

  useEffect(() => {
    const rws = new ReconnectingWebSocket("wss:/heypawsup.com/ws");

    rws.onopen = () => {
      console.log("WebSocket connection opened");
    };

    rws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    rws.onmessage = (message) => {
      const parsedData = JSON.parse(message.data);
      getVallueById(parsedData);
    };

    rws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      rws.close();
    };
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
            {mainInfo?.isAuctionEnd ? (
              <>
                {auctionInfo?.filter((info) => !info.isAuctionEnd).length === 0
                  ? `Аукцион закрыт`
                  : `Аукцион закрыт, но не для всех картин`}
              </>
            ) : (
              `До конца аукциона:`
            )}
          </Typography>
          {!mainInfo?.isAuctionEnd && mainInfo?.endDate && (
            <CountdownTimer endTime={mainInfo?.endDate} />
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            columnGap: { xs: "28px", md: "100px" },
            rowGap: "50px",
            maxWidth: "1440px",
            margin: "auto",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          {LotsInfo.map((data, index) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", lg: "center" },
                maxWidth: { xs: 130, md: 270 },
              }}
              key={`lot-${index}`}
            >
              <Box
                sx={{
                  width: { xs: 130, md: 270 },
                  height: { xs: 140, md: 355 },
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    width: { xs: 130, md: 270 },
                    maxHeight: { xs: 140, md: 355 },
                    objectFit: "contain",
                  }}
                  src={data.img}
                />
              </Box>
              <Box
                sx={{
                  textAlign: { xs: "center" },
                  ".name": {
                    fontSize: { xs: "18px", md: "25px" },
                    textAlign: "center",
                  },
                  ".size": {
                    fontSize: { xs: "18px", md: "25px" },
                    textAlign: "center",
                  },
                  ".money": {
                    fontSize: { xs: "22px", md: "36px" },
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
                  fontWeight={700}
                  className="name"
                >
                  {`${data.name}`}
                </Typography>
                <Typography
                  fontFamily="Manrope"
                  lineHeight="110%"
                  marginBottom="16px"
                  fontWeight={700}
                  className="size"
                >
                  {`${data.size}`}
                </Typography>
                <Typography
                  fontFamily="Manrope"
                  lineHeight="110%"
                  marginBottom="16px"
                  fontWeight={700}
                  className="money"
                >
                  {maxValue[index]?.max.money} BYN
                </Typography>
                <Link
                  to={`/auction/lot/${index + 1}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      padding: "8px 16px",
                      alignItems: "flex-start",
                      width: "fit-content",
                      gap: "10px",
                      borderRadius: "20px",
                      background: "#0F5190",
                      transition: "all 0.3s ease-in-out",
                      cursor: "pointer",
                      fontSize: { xs: "12px", md: "16px" },
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
                    {auctionInfo[index]?.isAuctionEnd
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
