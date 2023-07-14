import React, { useState, useEffect } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { useParams } from "react-router-dom";

import Noise from "../../img/noise.png";

const Admin = () => {
  const [data, setData] = useState(null);

  let { id } = useParams();

  const getInfo = async () => {
    const response = await fetch(`/api/info/${id}`);
    const info = await response.json();

    setData(info);
  };

  useEffect(() => {
    getInfo();
  }, []);

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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Имя</TableCell>
                <TableCell align="right">Телефон</TableCell>
                <TableCell align="right">Сумма</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                  <TableCell align="right">{row.money}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
export default Admin;
