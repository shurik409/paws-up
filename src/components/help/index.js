import React from "react";
import { Box, Typography, Link } from "@mui/material";
import Noise from "../../img/noise.png";
import HelpImage from "../../img/help.png";
import HelpImageMobile from "../../img/help_mobile.png";
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
      <Box
        sx={{
          position: "absolute",
          right: 0,
          zIndex: -1,
          display: { xs: "none", lg: "block" },
        }}
      >
        <img src={HelpImage} alt="spin"></img>
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: 0,
          bottom: "-10px",
          zIndex: -1,
          display: { xs: "block", lg: "none" },
        }}
      >
        <img src={HelpImageMobile} alt="spin"></img>
      </Box>
      <Box
        sx={{
          marginLeft: { xs: "16px", lg: "80px" },
          marginTop: { xs: "40px", lg: "120px" },
          paddingRight: { xs: "16px", lg: 0 },
        }}
      >
        <Box sx={{ "& p": { fontSize: { xs: "24px", lg: "80px" } } }}>
          <Typography
            fontFamily="Manrope"
            fontWeight="700"
            fontSize="80px"
            lineHeight="100%"
          >
            О приюте / Как помочь
          </Typography>
        </Box>
        <Box
          sx={{
            "& p": { fontSize: { xs: "14px", lg: "24px" }, marginTop: "32px" },
          }}
        >
          <Typography fontFamily="Manrope" fontWeight="500" lineHeight="120%">
            В данный момент в приюте «Храброе Сердце»
            <br />
            содержится 40 собак и 18 котов.
            <br />
            <br />
            Каждый день они потребляют 12 пачек перловки и 3 банки консервов.
            <br />
            Иногда запасов остаётся буквально на пару дней...
          </Typography>
        </Box>
        <Box
          sx={{
            "& p": { fontSize: { xs: "14px", lg: "24px" }, marginTop: "40px" },
          }}
        >
          <Typography fontFamily="Manrope" fontWeight="500" lineHeight="120%">
            Каждый из нас может оказать очень нужную этим животным помощь.
            <br />
            Для этого можно пожертвовать некоторую сумму на данный номер (МТС):
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            backgroundColor: "#0F5190",
            padding: { xs: "12px 24px", lg: "20px 40px" },
            borderRadius: { xs: "8px", lg: "20px" },
            marginTop: "32px",
            width: "fit-content",
            "& p": {
              fontSize: { xs: "24px", lg: "60px" },
            },
          }}
        >
          <Typography fontFamily="Manrope" fontWeight="600" lineHeight="120%">
            +375333747652
          </Typography>
        </Box>
        <Box
          sx={{
            "& p": {
              fontSize: { xs: "14px", lg: "24px" },
              opacity: { xs: 0.8, lg: 0.6 },
              marginTop: "48px",
            },
          }}
        >
          <Typography fontFamily="Manrope" fontWeight="500" lineHeight="120%">
            Все переведённые средства идут напрямую приюту «Храброе Сердце».
            <br />
            Отчёт о потраченных средствах ищите в инстаграмах «Paws Up» и «Brave
            Heart».
          </Typography>
        </Box>

        {/* <Box sx={{ marginTop: "40px" }}>
          <Link href="https://www.instagram.com/hey.pawsup/" target="_blank">
            <img src={Logo} alt="logo"></img>
          </Link>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Help;
