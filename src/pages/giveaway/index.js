import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import InputMask from "react-input-mask";
import Print from "../../img/print.jpeg";

import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-flip";
// import Noise from "../../img/noise.png";

const Giveaway = () => {
  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [error, setError] = useState();

  const handleNameChange = (event) => {
    const val = event.target.value;

    setNameError("");
    setName(val);
  };

  const handleSubmit = async () => {
    const phoneRegexp = /^\+375\(\d{2}\)\d{3}-\d{2}-\d{2}$/;
    const nameRegexp = /^(?!.*\.\.)(?!\.)(?!.*\.$)[a-zA-Z0-9._]{1,30}$/;

    if (!nameRegexp.test(name)) {
      setNameError("Некоректный ник");
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

    const request = new Request(`/api/giveaway`, {
      method: "POST",
      headers: {
        Accept: "application/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
      }),
    });
    const response = await fetch(request);
    const data = await response.json();
    if (!response.ok) {
      const { error } = data;
      setError(error);
      console.log(error);
    } else {
      console.log(data);
      setUserNumber(data.number);
    }
    // cleanForm();
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
          paddingBottom: "45px",
        }}
      >
        <Box
          sx={{
            paddingTop: { xs: "30px", md: "70px", lg: "140px" },
            display: "flex",
            justifyContent: "center",
            flexDirection: { lg: "column", xs: "column" },
            alignItems: { xs: "center", lg: "center" },
            paddingBottom: "35px",
          }}
        >
          <Box
            sx={{
              ".timerHeading": {
                fontSize: "32px",
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
              Розыгрыш майки по мотивам Stranger Things
            </Typography>
          </Box>
          <Box
            component="img"
            src={Print}
            sx={{
              width: { xs: 220, md: 400, xl: 540 },
              maxHeight: { xs: 250, md: 540, xl: 710 },
              marginBottom: "30px",
              objectFit: "contain",
            }}
          />
          <Box
            sx={{
              textAlign: { xs: "center", lg: "left" },
              ".name": {
                fontSize: { xs: "40px", md: "80px" },
              },
              "& label.Mui-focused": {
                color: "#FA4701",
              },
              ".MuiFormHelperText-root.Mui-error": {
                color: "#FFF",
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
            {!userNumber ? (
              <Box>
                <Box>
                  <Box>
                    <TextField
                      sx={{ width: { xs: 300, md: 400, bg: 600 }, height: 70 }}
                      id="name"
                      label={nameError || "Ваш ник в instagram"}
                      variant="filled"
                      onChange={handleNameChange}
                      error={nameError ? true : false}
                      value={name}
                    />
                  </Box>
                  <Box>
                    <InputMask
                      autoComplete="off"
                      mask="+375(99)999-99-99"
                      disabled={false}
                      maskChar=" "
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    >
                      <TextField
                        sx={{
                          width: { xs: 300, md: 400, bg: 600 },
                          height: 70,
                        }}
                        id="phone"
                        label={phoneError || "Ваш телефон"}
                        variant="filled"
                        type="phone"
                        error={phoneError ? true : false}
                        value={phone}
                      />
                    </InputMask>
                  </Box>
                </Box>
                {error ? (
                  <Typography fontFamily="Manrope" fontWeight={400} sx={{}}>
                    {error}
                  </Typography>
                ) : (
                  <></>
                )}
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
                  Участвовать
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  ".userNumber": {
                    fontSize: "28px",
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
                  className="userNumber"
                  marginY="15px"
                >
                  Твой номер: {userNumber}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            marginLeft: { xs: "auto", md: "auto" },
            marginRight: { xs: "auto", md: "auto" },
            textAlign: { xs: "center", md: "center" },
          }}
        >
          <Typography
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
            Для участия оставь свои контактные данные, чтобы мы могли выслать
            тебе номер участника. <br />
            Победителя выберем 13 декабря с помощью рандомайзера чисел. Итоги
            ище в нашей инсте{" "}
            <a
              target="_blank"
              href="https://www.instagram.com/hey.pawsup/"
              rel="noreferrer"
            >
              @hey.pawsup
            </a>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default Giveaway;
