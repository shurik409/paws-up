import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import InputMask from "react-input-mask";

import { useParams } from "react-router-dom";

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

const getInfoById = (id) => {
  return info.find((item) => item.id === +id);
};

const Main = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [money, setMoney] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [moneyError, setMoneyError] = useState("");
  const [maxValue, setMaxValue] = useState(0);
  // const [winner, setWinner] = useState('');

  let { id } = useParams();

  const data = getInfoById(id);

  const getMaxValue = async () => {
    const response = await fetch(`/api/maxvalue/${id}`);
    const value = await response.json();
    if (value) {
      setMaxValue(value.max.money);
      // setWinner(value.max.name);
    }
  };

  useEffect(() => {
    getMaxValue();
  }, []);

  const cleanForm = () => {
    setName("");
    setPhone("");
    setMoney("");
    // nameRef.current.target.value = "";
  };

  const handleNameChange = (event) => {
    const val = event.target.value;
    const nameRegular =
      /^[a-zA-Zа-яА-ЯёЁґҐўЎіІїЇ]+([a-zA-Zа-яА-ЯёЁґҐўЎіІїЇ\s'-]*[a-zA-Zа-яА-ЯёЁґҐўЎіІїЇ])?$/;

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
      /^[a-zA-Zа-яА-ЯёЁґҐўЎіІїЇ]+([a-zA-Zа-яА-ЯёЁґҐўЎіІїЇ\s'-]*[a-zA-Zа-яА-ЯёЁґҐўЎіІїЇ])?$/;
    const phoneRegexp = /^\+375\(\d{2}\)\d{3}-\d{2}-\d{2}$/;
    const moneyRegexp = /^[1-9]\d*$/;
    if (!nameRegexp.test(name)) {
      setNameError("Некоректное имя");
      return;
    } else {
      setNameError("");
    }

    if (!phoneRegexp.test(phone)) {
      setPhoneError("Некоректный телефон");
      return;
    } else {
      setPhoneError("");
    }

    if (!moneyRegexp.test(money)) {
      setMoneyError("Некоректная сумма");
      return;
    } else {
      setMoneyError("");
    }
    if (+money - maxValue < 5) {
      setMoneyError(
        "Сумма должна быть больше текущей ставки минимум на 5 рублей"
      );
      return;
    } else {
      setMoneyError("");
    }
    if (+money - maxValue > 1000) {
      setMoneyError("Слишком большая разовая ставка");
      return;
    } else {
      setMoneyError("");
    }

    const request = new Request(`/api/auction`, {
      method: "POST",
      headers: {
        Accept: "application/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        money: +money,
        paint: +id,
      }),
    });
    const response = await fetch(request);
    if (!response.ok) {
      const { errors } = await response.json();
      console.log(errors);
    }
    cleanForm();
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
              background: `url(${data.img})`,
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
              {`«${data.name}»`}
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
                  value={name}
                />
              </Box>
              <Box>
                <InputMask
                  mask="+375(99)999-99-99"
                  disabled={false}
                  maskChar=" "
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                >
                  <TextField
                    sx={{ width: { xs: 300, md: 400, bg: 600 }, height: 70 }}
                    id="phone"
                    label={phoneError || "Ваш телефон"}
                    variant="filled"
                    type="phone"
                    error={phoneError ? true : false}
                    value={phone}
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
        <Box
          sx={{
            marginLeft: { xs: "auto", md: "80px" },
            marginRight: { xs: "auto", md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* <Typography
            fontFamily="Manrope"
            fontWeight={400}
            sx={{
              a: {
                cursor: "pointer",
                color: "#FFF",
                textDecoration: "none",
                ":hover": {
                  color: "#FA4701",
                },
              },
            }}
          >
            * Деньги пойдут на прямую приюту «Право на Жизнь» через{" "}
            <a href="https://www.instagram.com/p/CylNUgYNiMi/?img_index=4">
              Пополнение «Горячего» номера МТС
            </a>
          </Typography> */}
          <Typography fontFamily="Manrope" fontWeight={400}>
            * Аукцион закроется 29 октября в 16:00
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Main;
