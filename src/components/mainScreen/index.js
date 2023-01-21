import React from "react";
import { Box, Typography, Link } from "@mui/material";
import Noise from "../../img/noise.png";
import Logo from "../../img/logo.svg";
import GirlWithDog from "../../img/girlWithDog2.png";
import GirlWithDogMobile from "../../img/girlWithDog_Mobile.png";

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: { xs: "100vh", lg: "auto" },
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "block", lg: "flex" },
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: { xs: "auto", lg: "100vh" },
          }}
        >
          <Box
            sx={{
              marginLeft: { xs: "12px", lg: "80px" },
              paddingTop: { xs: "40px", lg: "110px" },
              ".movie": {
                fontSize: { xs: "80px", md: "160px", lg: "230px", xl: "320px" },
              },
              ".charity": {
                marginLeft: { xs: "5px", md: "8px", lg: "16px" },
                fontSize: { xs: "8px", md: "32px" },
              },
              ".entry": {
                marginLeft: { xs: "5px", md: "8px", lg: "16px" },
                fontSize: { xs: "14px", md: "40px" },
              },
            }}
          >
            <Typography
              fontFamily="Montserrat"
              lineHeight="110%"
              marginBottom="16px"
              className="charity"
            >
              БЛАГОТВОРИТЕЛЬНЫЙ
            </Typography>
            <Typography
              fontFamily="Montserrat"
              lineHeight="74%"
              letterSpacing="-0.05em"
              marginBottom="16px"
              className="movie"
            >
              КИНО
              <br />
              ВЕЧЕР
            </Typography>
            <Typography
              fontFamily="Manrope"
              fontWeight="600"
              lineHeight="100%"
              className="entry"
            >
              Вход за пожертвование
              <br />
              для приюта «Храброе Сердце»
            </Typography>
          </Box>
          <Box
            sx={{
              marginLeft: { xs: "12px", lg: "87px" },
              marginTop: { xs: "12px", lg: "0" },
              "& img": {
                width: { xs: "28px", lg: "auto" },
              },
              // marginBottom: { xs: "0", lg: "80px" },
            }}
          >
            <Link href="https://www.instagram.com/hey.pawsup/" target="_blank">
              <img src={Logo} alt="logo"></img>
            </Link>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", lg: "none" },
            justifyContent: "end",
            opacity: 0.45,
            "& img": {
              height: "100%",
            },
            zIndex: -1,
          }}
        >
          <img src={GirlWithDogMobile} alt="girl with dog" />
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          display: { xs: "none", lg: "block" },
          right: 0,
          bottom: "-5px",
          width: "50%",
          "& img": {
            height: "100%",
          },
          opacity: 0.45,
          zIndex: -1,
        }}
      >
        <img src={GirlWithDog} alt="girl with dog" />
      </Box>
    </Box>
  );
};
export default MainScreen;
