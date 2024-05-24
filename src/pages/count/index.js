import React, { useState, useEffect } from "react";
import ReconnectingWebSocket from "reconnecting-websocket";
import { Box, Typography, Button } from "@mui/material";

const Count = () => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    fetch("/api/count/plus");
    setCount((prev) => prev + 1);
  };

  const handleMinus = () => {
    fetch("/api/count/minus");
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const response = await fetch(`/api/count`);
    const value = await response.json();

    setCount(value);
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
      if (parsedData.type) {
        setCount(parsedData.count);
      }
    };

    rws.onclose = () => {
      console.log("WebSocket connection closed");
    };

    return () => {
      rws.close();
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box>
        <Typography
          sx={{ fontSize: { xs: "24px", md: "32px" }, textAlign: "center", fontWeight: 'bold' }}
        >
          Количество поситителей: {count}{" "}
        </Typography>
        <Box
          sx={{
            marginTop: "32px",
            display: "flex",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={handlePlus}
            sx={{
              display: "flex",
              width: { xs: "120px", md: "170px" },
              height: "40px",
              border: "2px solid #FFF",
              color: "#FFF",
              fontSize: { xs: "16px", md: "20px" },
            }}
          >
            Прибавить
          </Button>
          <Button
            onClick={handleMinus}
            sx={{
              display: "flex",
              width: { xs: "120px", md: "170px" },
              height: "40px",
              border: "2px solid #FFF",
              color: "#FFF",
              fontSize: { xs: "16px", md: "20px" },
            }}
          >
            Отнять
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Count;
