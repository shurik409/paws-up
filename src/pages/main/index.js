import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import InputMask from "react-input-mask";
import ReconnectingWebSocket from "reconnecting-websocket";

import { Link, useParams } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-flip";
// import Noise from "../../img/noise.png";
import CountdownTimer from "../../components/timer";
import { LotsInfo } from "../../lotsInfo";

import {
  getEncryptedCookie,
  setEncryptedCookie,
  getCookie,
} from "../../utils/cookies";

const getInfoById = (id) => {
  return LotsInfo.find((item) => item.id === +id);
};

const Main = () => {
  const [auctionInfo, setAuctionInfo] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [money, setMoney] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [moneyError, setMoneyError] = useState("");
  const [maxValue, setMaxValue] = useState(0);
  const [winner, setWinner] = useState("");
  const [cookieUser, setCookieUser] = useState("");
  const [lastTime, setLastTime] = useState("");

  let { id } = useParams();

  const data = getInfoById(id);

  const getAuctionInfo = async () => {
    const response = await fetch(`/api/auction/open`);
    const value = await response.json();

    setAuctionInfo(value);
  };

  const getMaxValue = async () => {
    const response = await fetch(`/api/maxvalue/${id}`);
    const value = await response.json();
    console.log(value);
    if (value) {
      setMaxValue(value.max.money);
      setWinner(value.max.name);
      setLastTime(value.max.time || `${new Date()}`);
    }
  };

  useEffect(() => {
    shouldAuctionContinue(auctionInfo?.endDate, lastTime);
  }, [auctionInfo, lastTime]);

  useEffect(() => {
    const userName = getEncryptedCookie("Name");
    const userPhone = getEncryptedCookie("Phone");
    setName(userName);
    setPhone(userPhone);
    getMaxValue();
    getAuctionInfo();
    const cookieName = getCookie("Name");
    const cookiePhone = getCookie("Phone");
    getUserByInfo(cookieName, cookiePhone);
  }, []);

  const getUserByInfo = async (name, phone) => {
    const request = new Request(`/api/auction/${id}/user`, {
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
    if (!response.ok) {
      const { errors } = await response.json();
      console.log(errors);
    } else {
      let maxCookieValue = await response.json();
      maxCookieValue.max && setCookieUser(maxCookieValue.max);
    }
  };

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
      if (`${parsedData}` === `${id}`) {
        getMaxValue();
      }
    };

    rws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      rws.close();
    };
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

  const cleanForm = () => {
    // setName("");
    // setPhone("");
    setMoney("");
    // nameRef.current.target.value = "";
  };

  const handleNameChange = (event) => {
    const val = event.target.value;
    // const nameRegular =
    //   /^[a-zA-Zа-яА-ЯёЁґҐўЎіІїЇ]+([a-zA-Zа-яА-ЯёЁґҐўЎіІїЇ\s'-]*[a-zA-Zа-яА-ЯёЁґҐўЎіІїЇ])?$/;

    // if (val.match(nameRegular)) {
    //   setNameError("");
    //   setName(val);
    //   return event.preventDefault();
    // }

    setNameError("");
    setName(val);
    // return event.preventDefault();

    // setName(val);
    // setNameError("Некоректное имя");
  };

  const handleMoneyChange = (event) => {
    const val = event.target.value;

    if (val.match(/[^0-9]/)) {
      return event.preventDefault();
    }

    setMoney(val);
  };

  const handleSubmit = async () => {
    // const nameRegexp =
    //   /^[a-zA-Zа-яА-ЯёЁґҐўЎіІїЇ]+([a-zA-Zа-яА-ЯёЁґҐўЎіІїЇ\s'-]*[a-zA-Zа-яА-ЯёЁґҐўЎіІїЇ])?$/;
    const phoneRegexp = /^\+375\(\d{2}\)\d{3}-\d{2}-\d{2}$/;
    const moneyRegexp = /^[1-9]\d*$/;
    // if (!nameRegexp.test(name)) {
    //   setNameError("Некоректное имя");
    //   return;
    // } else {
    //   setNameError("");
    // }

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
      setMoneyError("Ставка должна превышать предыдущую минимум на 5 рублей");
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
        time: `${new Date()}`,
      }),
    });
    const response = await fetch(request);
    if (!response.ok) {
      const { errors } = await response.json();
      console.log(errors);
    }
    setEncryptedCookie("Name", name);
    setEncryptedCookie("Phone", phone);
    cleanForm();
    getMaxValue();
    const cookieName = getCookie("Name");
    const cookiePhone = getCookie("Phone");
    getUserByInfo(cookieName, cookiePhone);
  };

  const shouldAuctionContinue = (auctionEndTime, lotLastTime) => {
    if ((auctionEndTime, lotLastTime)) {
      const time1 = new Date(auctionEndTime);
      const time2 = new Date(lotLastTime);
      const isAuctionContinue = time1 - time2 <= 60 * 1000;
      if (isAuctionContinue) {
        time1.setMinutes(time1.getMinutes() + 1);
        setAuctionInfo({
          endDate: time1,
          isAuctionEnd: false,
        });
      }
      const difference = +time1 - +new Date();
      return difference > 0;
    }
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
            {auctionInfo?.isAuctionEnd
              ? `Аукцион закрыт`
              : `До конца аукциона:`}
          </Typography>
          {!auctionInfo?.isAuctionEnd &&
            auctionInfo?.endDate &&
            shouldAuctionContinue(auctionInfo?.endDate, lastTime) && (
              <CountdownTimer endTime={auctionInfo?.endDate} />
            )}
        </Box>
        <Box>
          <Box
            sx={{
              a: {
                display: "block",
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
                color: "#FFF",
                textDecoration: "none",
              },
              ":hover": {
                a: {
                  background: "#fff",
                  color: "#0F5190",
                },
              },
            }}
          >
            <Link to={"/auction"}>Просмотреть все лоты</Link>
          </Box>
        </Box>
        <Box
          sx={{
            paddingTop: { xs: "30px", md: "70px", lg: "140px" },
            paddingLeft: { lg: "80px" },
            display: "flex",
            justifyContent: "center",
            flexDirection: { lg: "row", xs: "column" },
            alignItems: { xs: "center", lg: "normal" },
            paddingBottom: "35px",
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
              ".size": {
                fontSize: { xs: "40px", md: "80px" },
              },
              ".money": {
                fontSize: { xs: "20px", md: "30px", bg: "40px" },
              },
              ".cookieMoney": {
                fontSize: { xs: "15px", md: "20px", bg: "30px" },
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
            <Typography
              fontFamily="Manrope"
              lineHeight="110%"
              marginBottom="20px"
              fontWeight={700}
              className="name"
            >
              {`${data.name}`}
            </Typography>
            <Typography
              fontFamily="Manrope"
              lineHeight="110%"
              marginBottom="20px"
              fontWeight={700}
              className="size"
            >
              {`${data.size}`}
            </Typography>
            <Typography
              fontFamily="Manrope"
              lineHeight="110%"
              marginBottom="20px"
              fontWeight={700}
              className="money"
            >
              {auctionInfo?.isAuctionEnd
                ? `Финальная ставка: ${maxValue}BYN`
                : `Текущая ставка: ${maxValue}BYN`}
            </Typography>
            {cookieUser && (
              <Typography
                fontFamily="Manrope"
                lineHeight="110%"
                marginBottom="40px"
                fontWeight={700}
                className="cookieMoney"
              >
                Ваша последняя ставка: {cookieUser.money}BYN
              </Typography>
            )}
            {auctionInfo?.isAuctionEnd ? (
              <Typography
                fontFamily="Manrope"
                lineHeight="110%"
                marginBottom="40px"
                fontWeight={700}
                className="money"
              >
                Победитель: {winner}
              </Typography>
            ) : (
              <></>
            )}
            {!auctionInfo?.isAuctionEnd &&
            shouldAuctionContinue(auctionInfo?.endDate, lastTime) ? (
              <Box>
                <Box>
                  <Box>
                    <TextField
                      sx={{ width: { xs: 300, md: 400, bg: 600 }, height: 70 }}
                      id="name"
                      label={nameError || "Ваше имя или ник в instagram"}
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
                  <Box
                    sx={{
                      ".warning": {
                        fontSize: { xs: "15px", md: "20px" },
                      },
                    }}
                  >
                    <TextField
                      sx={{
                        width: { xs: 300, md: 400, bg: 600 },
                        minHeight: 70,
                      }}
                      id="money"
                      label={`Ваша ставка (min ${maxValue + 5} BYN)`}
                      helperText={moneyError}
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
                    <Typography
                      fontFamily="Manrope"
                      lineHeight="110%"
                      marginBottom="20px"
                      fontWeight={500}
                      className="warning"
                    >
                      *Минимальная ставка 5 BYN
                    </Typography>
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
            ) : (
              <></>
            )}
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
            * Деньги пойдут на прямую приюту «Шанс» через платформу{" "}
            <a href="https://bypet.by/projects/1050">
              ByPet
            </a>
          </Typography> */}
          {/* <Typography fontFamily="Manrope" fontWeight={400}>
            * Аукцион закроется 28 января в 17:00
          </Typography> */}
        </Box>
      </Box>
    </Box>
  );
};
export default Main;
