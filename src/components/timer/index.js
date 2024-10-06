import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const CountdownTimer = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(
    endTime
      ? calculateTimeLeft()
      : {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [endTime]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <Box
      sx={{
        ".timer": {
          fontSize: { xs: "55px" },
          textAlign: "center",
        },
      }}
    >
      {endTime ? (
        <Typography
          fontFamily="Manrope"
          lineHeight="110%"
          fontWeight={700}
          className="timer"
        >
          {`${hours < 10 ? 0 : ""}${hours}`} :{" "}
          {`${minutes < 10 ? 0 : ""}${minutes}`} :{" "}
          {`${seconds < 10 ? 0 : ""}${seconds}`}
        </Typography>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default CountdownTimer;
