import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Noise from "../../img/noise.png";

const Food = () => {
  const [activeFood, setActiveFood] = useState("Консервы для собак");
  const foods = [
    {
      items: [
        {
          name: "Геркулесовая каша",
          description: "Геркулесовая каша",
        },
      ],
    },
    {
      items: [
        {
          name: "Ливерка",
          description: (
            <>
              С ливеркой всё супер, никаких опасностей нет!
              <br />
              Главное помните – «что-нибудь важное».
            </>
          ),
        },
        {
          name: "Консервы для собак",
          description: (
            <>
              Желательно не покупать консервы марок «Название», «Название»,
              «Название»,
              <br />
              поскольку эти консервы являются некачественнымми и несут опасность
              для животных
            </>
          ),
        },
      ],
    },
    {
      items: [
        {
          name: "Сухой корм для котов",
          description: "Сухой корм для котов",
        },
      ],
    },
    {
      items: [
        {
          name: "Масло подсолнечное",
          description: "Масло подсолнечное",
        },
      ],
    },
    {
      items: [
        {
          name: "Переноска",
          description: "Переноска",
        },
        {
          name: "Туалеты для котиков",
          description: "Туалеты для котиков",
        },
      ],
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
          marginLeft: "80px",
          marginTop: "100px",
        }}
      >
        <Typography
          fontFamily="Manrope"
          fontWeight="700"
          fontSize="80px"
          lineHeight="120%"
        >
          Будем рады, если сможете принести:
        </Typography>
      </Box>
      <Box sx={{ marginTop: "80px", marginLeft: "80px" }}>
        {foods.map((food, index) => (
          <Box sx={{ display: "flex", marginBottom: "24px", gap: "24px" }}>
            {food.items.map((item, index) => (
              <Box
                sx={{
                  border: "3px solid #EFEFEF",
                  borderRadius: "126px",
                  padding: "24px 48px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  backgroundColor:
                    activeFood === item.name ? "#EFEFEF" : "unset",
                  "& .foodName": {
                    color: activeFood === item.name ? "#2176C9" : "EFEFEF",
                  },
                  transition: "background-color 0.4s ease-in-out",
                }}
                onClick={() => setActiveFood(item.name)}
              >
                <Typography
                  fontFamily="Manrope"
                  fontWeight="500"
                  fontSize="40px"
                  lineHeight="120%"
                  className="foodName"
                >
                  {item.name}
                </Typography>
                {/* {activeFood === item.name && ( */}
                <Box
                  sx={{
                    display: "flex",
                    marginLeft: activeFood === item.name ? "24px" : "0px",
                    gap: "24px",
                    maxWidth: activeFood === item.name ? "950px" : "0px",
                    maxHeight: "48px",
                    transition: "all 0.4s ease-in-out",
                    overflow: "hidden",
                    alignItems: "center",
                    opacity: activeFood === item.name ? 1 : 0,
                    whiteSpace: 'nowrap'
                  }}
                >
                  <Typography
                    fontFamily="Manrope"
                    fontWeight="500"
                    fontSize="40px"
                    lineHeight="120%"
                    color="rgba(7, 20, 33, 0.7)"
                  >
                    /
                  </Typography>
                  <Typography
                    fontFamily="Manrope"
                    fontWeight="500"
                    fontSize="20px"
                    lineHeight="120%"
                    color="rgba(7, 20, 33, 0.7);"
                  >
                    {item.description}
                  </Typography>
                </Box>
                {/* )} */}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Food;
