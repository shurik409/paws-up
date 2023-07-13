import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import InputMask from "react-input-mask";

import "swiper/css";
import "swiper/css/effect-flip";
import Noise from "../../img/noise.png";
import Lu from "../../img/lots/1.png";

const Main = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [money, setMoney] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [moneyError, setMoneyError] = useState("");
  const [maxValue, setMaxValue] = useState(0);

  const getMaxValue = async () => {
    const response = await fetch("http://localhost:3001/api/maxvalue/1");
    const value = await response.json();
    console.log(value);
    if (value) {
      setMaxValue(value.max);
    }
  };

  useEffect(() => {
    getMaxValue();
  }, []);

  const handleNameChange = (event) => {
    const val = event.target.value;
    const nameRegular =
      /^[a-zA-Zа-яА-ЯёЁ]+([a-zA-Zа-яА-ЯёЁ\s'-]*[a-zA-Zа-яА-ЯёЁ])?$/;

    if (val.match(nameRegular)) {
      setNameError("");
      setName(val);
      return event.preventDefault();
    }

    setName(val);
    setNameError("Некоректное имя");
  };

  const handleMoneyChange = (event) => {
    const val = event.target.value;

    if (val.match(/[^0-9]/)) {
      return event.preventDefault();
    }

    setMoney(val);
  };

  const handleSubmit = async () => {
    const nameRegexp =
      /^[a-zA-Zа-яА-ЯёЁ]+([a-zA-Zа-яА-ЯёЁ\s'-]*[a-zA-Zа-яА-ЯёЁ])?$/;
    const phoneRegexp = /^\+375\(\d{2}\)\d{3}-\d{2}-\d{2}$/;
    const moneyRegexp = /^[1-9]\d*$/;
    console.log(nameRegexp.test(name));
    console.log(name);
    if (!nameRegexp.test(name)) {
      setNameError("Некоректное имя");
      return;
    }
    if (!phoneRegexp.test(phone)) {
      setPhoneError("Некоректный телефон");
      return;
    }
    if (!moneyRegexp.test(money)) {
      setMoneyError("Некоректная сумма");
      return;
    }

    const request = new Request(`http://localhost:3001/api/auction`, {
      method: "POST",
      headers: {
        Accept: "application/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        money: +money,
      }),
    });
    const response = await fetch(request);
    if (!response.ok) {
      const { errors } = await response.json();
      console.log(errors);
    }
    getMaxValue();
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          backgroundColor: "#2176C9",
          position: "relative",
          zIndex: 0,
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
            paddingTop: { xs: "30px", md: "70px", lg: "140px" },
            paddingLeft: { lg: "80px" },
            display: "flex",
            flexDirection: { lg: "row", xs: "column" },
            alignItems: { xs: "center", lg: "normal" },
            paddingBottom: "70px",
          }}
        >
          <Box
            sx={{
              width: { xs: 220, md: 400, xl: 540 },
              height: { xs: 300, md: 540, xl: 710 },
              background: `url(${Lu})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></Box>
          <Box
            sx={{
              textAlign: { xs: "center", lg: "left" },
              paddingLeft: { lg: "100px" },
              ".name": {
                fontSize: { xs: "40px", md: "80px" },
              },
              ".money": {
                fontSize: { xs: "20px", md: "30px", bg: "40px" },
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
              marginBottom="20px"
              fontWeight={700}
              className="name"
            >
              «Лу»
            </Typography>
            <Typography
              fontFamily="Manrope"
              lineHeight="110%"
              marginBottom="40px"
              fontWeight={700}
              className="money"
            >
              Текущая ставка: {maxValue}BYN
            </Typography>
            <Box>
              <Box>
                <TextField
                  sx={{ width: { xs: 300, md: 400, bg: 600 }, height: 70 }}
                  id="name"
                  label={nameError || "Ваше имя"}
                  variant="filled"
                  onChange={handleNameChange}
                  error={nameError ? true : false}
                />
              </Box>
              <Box>
                <InputMask
                  mask="+375(99)999-99-99"
                  disabled={false}
                  maskChar=" "
                  onChange={(e) => setPhone(e.target.value)}
                >
                  <TextField
                    sx={{ width: { xs: 300, md: 400, bg: 600 }, height: 70 }}
                    id="phone"
                    label={phoneError || "Ваш телефон"}
                    variant="filled"
                    type="phone"
                    error={phoneError ? true : false}
                  />
                </InputMask>
              </Box>
              <Box>
                <TextField
                  sx={{ width: { xs: 300, md: 400, bg: 600 }, height: 70 }}
                  id="money"
                  label={moneyError || "Ваша ставка"}
                  variant="filled"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">BYN</InputAdornment>
                    ),
                    inputMode: "numeric",
                  }}
                  value={money}
                  onChange={handleMoneyChange}
                  error={moneyError ? true : false}
                />
              </Box>
            </Box>
            <Box
              sx={{
                padding: "24px 48px",
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
                ":hover": {
                  background: "#fff",
                  color: "#0F5190",
                },
              }}
              onClick={handleSubmit}
            >
              Сделать ставку
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Main;
