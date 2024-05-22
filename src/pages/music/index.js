import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import InputMask from "react-input-mask";
import ReconnectingWebSocket from "reconnecting-websocket";

import { Link, useParams } from "react-router-dom";

import Exit from "../../img/exit.png";

import Dog1 from "../../img/gifs/dog1.gif";
import Dog2 from "../../img/gifs/dog2.gif";
import Dog3 from "../../img/gifs/dog3.gif";
import Dog4 from "../../img/gifs/dog4.gif";
import Dog5 from "../../img/gifs/dog5.gif";
import Cat1 from "../../img/gifs/cat1.gif";
import Cat2 from "../../img/gifs/cat2.gif";
import Cat3 from "../../img/gifs/cat3.gif";
import Cat4 from "../../img/gifs/cat4.gif";
import Cat5 from "../../img/gifs/cat5.gif";

const info = [
  {
    name: "Металический пес",
    id: 1,
    image: Dog1,
  },
  {
    name: "Как же он чувствует",
    id: 2,
    image: Dog2,
  },
  {
    name: "Сигма",
    id: 3,
    image: Dog3,
  },
  {
    name: "Труляля",
    id: 4,
    image: Dog4,
  },
  {
    name: "На струнах кайфа",
    id: 5,
    image: Dog5,
  },
  {
    name: "Кот дидоджи",
    id: 6,
    image: Cat1,
  },
  {
    name: "Ушатываюсь",
    id: 7,
    image: Cat2,
  },
  {
    name: "Кот на вайбе",
    id: 8,
    image: Cat3,
  },
  {
    name: "Учим танец",
    id: 9,
    image: Cat4,
  },
  {
    name: "Немо",
    id: 10,
    image: Cat5,
  },
];

const Music = () => {
  const [activeGif, setActiveGif] = useState(1);

  return (
    <Box
      sx={{
        backgroundColor: "#EEE8D8",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // px: { xs: "8px", md: "24px" },
      }}
    >
      <Box
        sx={{
          border: "7px solid #0041AF",
          borderRadius: "22px",
          width: "max-content",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#0041AF",
            height: { xs: "44px", md: "50px", lg: "72px" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: "12px", md: "24px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", lg: "22px" },
            }}
            fontFamily={"Tahoma"}
          >
            Рингтон_на_вызов_от_МАМОЧКИ.mp3
          </Typography>
          <Box
            sx={{
              width: { xs: "20px", lg: "48px" },
              height: { xs: "20px", lg: "48px" },
              background: `url(${Exit})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            px: { xs: "12px", md: "24px" },
            marginTop: { xs: "16px", md: "24px", lg: "32px" },
          }}
        >
          <Typography
            color={"#000"}
            sx={{
              fontSize: { xs: "16px", md: "20px", lg: "30px" },
            }}
            fontFamily={"Tahoma"}
          >
            Выбери гифку для поднятия своего натроения:
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "normal" },
              gap: { xs: "8px", md: "20px", lg: "40px" },
              marginTop: "24px",
            }}
          >
            <Box
              sx={{
                width: { xs: "300px", md: "260px", lg: "420px" },
                border: "4px solid #000",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                // paddingBottom: "20px",
              }}
            >
              <Box
                sx={{
                  height: { xs: "33px", lg: "54px" },
                  backgroundColor: "#EEE8D8",
                  px: "12px",
                }}
              >
                <Typography
                  color={"#000"}
                  fontFamily={"Tahoma"}
                  sx={{
                    fontSize: { xs: "18px", md: "20px", lg: "32px" },
                  }}
                >
                  Гифки
                </Typography>
              </Box>
              <Box
                sx={{
                  px: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  overflow: "auto",
                  height: { xs: "200px", md: "300px", lg: "410px" },
                  py: "12px",
                }}
              >
                {info.map((pet, index) => (
                  <Box
                    key={`pet-${index}`}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      gap: "12px",
                      backgroundColor:
                        index === activeGif ? "rgba(0, 86, 233, 0.6)" : "",
                    }}
                    onClick={() => {
                      setActiveGif(index);
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: "42px", lg: "68px" },
                        height: { xs: "42px", lg: "68px" },
                        background: `url(${pet.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                      }}
                    ></Box>
                    <Typography
                      color={"#000"}
                      fontFamily={"Tahoma"}
                      sx={{
                        fontSize: { xs: "20px", lg: "26px" },
                      }}
                    >
                      {pet.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row-reverse", md: "column" },
                justifyContent: { xs: "center", md: "space-between" },
                gap: { xs: "20px", md: "0" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column-reverse", md: "column" },
                }}
              >
                <Box>
                  <Box
                    sx={{
                      width: { xs: "100px", lg: "190px" },
                      height: { xs: "30px", lg: "45px" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      border: "2px solid #000",
                      borderRadius: "10px",
                      marginBottom: "16px",
                    }}
                  >
                    <Typography
                      color={"#000"}
                      fontFamily={"Tahoma"}
                      sx={{
                        fontSize: { xs: "14px", lg: "30px" },
                      }}
                    >
                      Лайк
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: { xs: "100px", lg: "190px" },
                      height: { xs: "30px", lg: "45px" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      border: "2px solid #000",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography
                      color={"#000"}
                      fontFamily={"Tahoma"}
                      sx={{
                        fontSize: { xs: "14px", lg: "30px" },
                      }}
                    >
                      Класс
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    color={"#000"}
                    fontFamily={"Tahoma"}
                    sx={{
                      fontSize: { xs: "20px", lg: "30px" },
                      marginTop: { md: "25px" },
                    }}
                  >
                    Веселимся
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    width: { xs: "170px", lg: "270px" },
                    height: { xs: "170px", lg: "270px" },
                    background: `url(${info[activeGif].image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "4px solid #000",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ marginTop: "24px" }}>
            <a
              href="/music/momy.mp3"
              download="Рингтон_на_вызов_от_МАМОЧКИ_Мама_звонит_рингтон.mp3"
            >
              <Typography
                fontFamily={"Tahoma"}
                sx={{
                  fontSize: { xs: "16px", md: "22px", lg: "30px" },
                }}
              >
                Скачать крутецкий рингтон...
              </Typography>
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: { xs: "wrap", md: "nowrap" },
              maxWidth: { xs: "350px", md: "none" },
              justifyContent: "space-between",
              marginTop: "24px",
            }}
          >
            <Box
              sx={{
                width: { xs: "100px", lg: "190px" },
                height: { xs: "30px", lg: "45px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                border: "2px solid #000",
                borderRadius: "10px",
                marginBottom: "16px",
              }}
            >
              <Typography
                color={"#000"}
                fontFamily={"Tahoma"}
                sx={{
                  fontSize: { xs: "14px", lg: "30px" },
                }}
              >
                ОК
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "100px", lg: "190px" },
                height: { xs: "30px", lg: "45px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                border: "2px solid #000",
                borderRadius: "10px",
                marginBottom: "16px",
              }}
            >
              <Typography
                color={"#000"}
                fontFamily={"Tahoma"}
                sx={{
                  fontSize: { xs: "14px", lg: "30px" },
                }}
              >
                Отмена
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "100px", lg: "190px" },
                height: { xs: "30px", lg: "45px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                border: "2px solid #000",
                borderRadius: "10px",
                marginBottom: "16px",
              }}
            >
              <Typography
                color={"#000"}
                fontFamily={"Tahoma"}
                sx={{
                  fontSize: { xs: "14px", lg: "30px" },
                }}
              >
                Помощь
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Music;
