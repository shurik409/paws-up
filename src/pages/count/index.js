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
    <Box>
      <Typography>Количество поситителей: {count} </Typography>
      <Button onClick={handlePlus} sx={{ color: "#FFF" }}>
        Прибавить
      </Button>
      <Button onClick={handleMinus} sx={{ color: "#FFF" }}>
        Отнять
      </Button>
    </Box>
  );
};
export default Count;
