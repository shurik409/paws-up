import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Dialog } from "@mui/material";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Exit from "../../img/exit.png";

import Dog1 from "../../img/gifs/dog1.gif";
import Dog2 from "../../img/gifs/dog2.gif";
import Dog3 from "../../img/gifs/dog3.gif";
import Dog4 from "../../img/gifs/dog4.gif";
import Dog5 from "../../img/gifs/dog5.gif";
import Cat1 from "../../img/gifs/cat1.gif";
import Cat2 from "../../img/gifs/cat2.gif";
import Cat3 from "../../img/gifs/cat3.gif";
import Cat4 from "../../img/gifs/cat4.gif";
import Cat5 from "../../img/gifs/cat5.gif";
import { useParams } from "react-router-dom";

const info = [
  {
    name: "Металический пес",
    id: 1,
    image: Dog1,
  },
  {
    name: "Как же он чувствует",
    id: 2,
    image: Dog2,
  },
  {
    name: "Сигма",
    id: 3,
    image: Dog3,
  },
  {
    name: "Труляля",
    id: 4,
    image: Dog4,
  },
  {
    name: "На струнах кайфа",
    id: 5,
    image: Dog5,
  },
  {
    name: "Кот дидоджи",
    id: 6,
    image: Cat1,
  },
  {
    name: "Ушатываюсь",
    id: 7,
    image: Cat2,
  },
  {
    name: "Кот на вайбе",
    id: 8,
    image: Cat3,
  },
  {
    name: "Учим танец",
    id: 9,
    image: Cat4,
  },
  {
    name: "Немо",
    id: 10,
    image: Cat5,
  },
];

const music = {
  momy: {
    name: "Рингтон_на_вызов_от_МАМОЧКИ.mp3",
    gifIndex: 0,
  },
  astronomia: { name: "Рингтон_Tony_Igy_Astronomia_Ringon.mp3", gifIndex: 1 },
  blue: { name: "Eiffel_65_-_Blue_(Da_Ba_Dee).mp3", gifIndex: 2 },
  budilnik: { name: "Budilnik_-_Prosypajjsya_mojj_khozyain.mp3", gifIndex: 3 },
  crazy_frog: { name: "Crazy_Frog_-_Axel_F_na_zvonok.mp3", gifIndex: 4 },
  freestyler: { name: "BOMFUNK_MCS_-_Freestyler_rington.mp3", gifIndex: 5 },
  one_desire: { name: "Jakarta_-_One_desire_rington.mp3", gifIndex: 6 },
  soobshhenie: {
    name: "prishlo_novoe_soobshhenie_posmotri_vdrug.mp3",
    gifIndex: 7,
  },
  telefon_govorit: {
    name: "JEto_tvojj_telefon_govorit.mp3",
    gifIndex: 8,
  },
  zabud: { name: "Dj_Piligrim_-_Ty_menya_zabud_Rington.mp3", gifIndex: 9 },
};

const Music = () => {
  let { id } = useParams();
  const [activeGif, setActiveGif] = useState(music[id].gifIndex);
  const [open, setOpen] = React.useState(false);
  const [dialogText, setDialogText] = React.useState(false);
  const gifRef = useRef();

  const handleClickOpen = (name) => {
    setOpen(true);
    setDialogText(name);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    gifRef.current.scrollIntoView({ behavior: "smooth" });
  }, [gifRef]);

  return (
    <Box
      sx={{
        backgroundColor: "#EEE8D8",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // px: { xs: "8px", md: "24px" },
      }}
    >
      <Box
        sx={{
          border: "7px solid #0041AF",
          borderRadius: "22px",
          width: "max-content",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#0041AF",
            height: { xs: "44px", md: "50px", lg: "72px" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: "12px", md: "24px" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", lg: "22px" },
            }}
            fontFamily={"Tahoma"}
          >
            {music[id].name}
          </Typography>
          <Box
            sx={{
              width: { xs: "20px", lg: "48px" },
              height: { xs: "20px", lg: "48px" },
              background: `url(${Exit})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              cursor: "pointer",
            }}
            onClick={() => handleClickOpen("error")}
          ></Box>
        </Box>
        <Box
          sx={{
            px: { xs: "12px", md: "24px" },
            marginTop: { xs: "16px", md: "24px", lg: "32px" },
          }}
        >
          <Typography
            color={"#000"}
            sx={{
              fontSize: { xs: "16px", md: "20px", lg: "30px" },
            }}
            fontFamily={"Tahoma"}
          >
            Выбери гифку для поднятия своего настроения:
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "normal" },
              gap: { xs: "8px", md: "20px", lg: "40px" },
              marginTop: "24px",
            }}
          >
            <Box
              sx={{
                width: { xs: "300px", md: "260px", lg: "420px" },
                border: "4px solid #000",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                // paddingBottom: "20px",
              }}
            >
              <Box
                sx={{
                  height: { xs: "33px", lg: "54px" },
                  backgroundColor: "#EEE8D8",
                  px: "12px",
                }}
              >
                <Typography
                  color={"#000"}
                  fontFamily={"Tahoma"}
                  sx={{
                    fontSize: { xs: "18px", md: "20px", lg: "32px" },
                  }}
                >
                  Гифки
                </Typography>
              </Box>
              <Box
                sx={{
                  px: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  overflow: "auto",
                  height: { xs: "200px", md: "300px", lg: "410px" },
                  py: "12px",
                }}
              >
                {info.map((pet, index) => (
                  <Box
                    key={`pet-${index}`}
                    ref={index === activeGif ? gifRef : null}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      gap: "12px",
                      backgroundColor:
                        index === activeGif ? "rgba(0, 86, 233, 0.6)" : "",
                    }}
                    onClick={() => {
                      setActiveGif(index);
                    }}
                  >
                    <Box
                      sx={{
                        width: { xs: "42px", lg: "68px" },
                        height: { xs: "42px", lg: "68px" },
                        background: `url(${pet.image})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                      }}
                    ></Box>
                    <Typography
                      color={"#000"}
                      fontFamily={"Tahoma"}
                      sx={{
                        fontSize: { xs: "20px", lg: "26px" },
                      }}
                    >
                      {pet.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row-reverse", md: "column" },
                justifyContent: { xs: "center", md: "space-between" },
                gap: { xs: "20px", md: "0" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column-reverse", md: "column" },
                }}
              >
                <Box>
                  <Box
                    sx={{
                      width: { xs: "100px", lg: "190px" },
                      height: { xs: "30px", lg: "45px" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      border: "2px solid #000",
                      borderRadius: "10px",
                      marginBottom: "16px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleClickOpen("like")}
                  >
                    <Typography
                      color={"#000"}
                      fontFamily={"Tahoma"}
                      sx={{
                        fontSize: { xs: "14px", lg: "30px" },
                      }}
                    >
                      Лайк
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      width: { xs: "100px", lg: "190px" },
                      height: { xs: "30px", lg: "45px" },
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#fff",
                      border: "2px solid #000",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleClickOpen("klass")}
                  >
                    <Typography
                      color={"#000"}
                      fontFamily={"Tahoma"}
                      sx={{
                        fontSize: { xs: "14px", lg: "30px" },
                      }}
                    >
                      Класс
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    color={"#000"}
                    fontFamily={"Tahoma"}
                    sx={{
                      fontSize: { xs: "20px", lg: "30px" },
                      marginTop: { md: "25px" },
                    }}
                  >
                    Веселимся
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    width: { xs: "170px", lg: "270px" },
                    height: { xs: "170px", lg: "270px" },
                    background: `url(${info[activeGif].image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "4px solid #000",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ marginTop: "24px" }}>
            <a href={`/music/${id}.mp3`} download={music[id].name}>
              <Typography
                fontFamily={"Tahoma"}
                sx={{
                  fontSize: { xs: "16px", md: "22px", lg: "30px" },
                  maxWidth: { xs: "330px", md: "500px", lg: "800px" },
                }}
              >
                Скачать крутецкий рингтон {music[id].name}
              </Typography>
            </a>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: { xs: "wrap", md: "nowrap" },
              maxWidth: { xs: "350px", md: "none" },
              justifyContent: "space-between",
              marginTop: "24px",
            }}
          >
            <Box
              sx={{
                width: { xs: "100px", lg: "190px" },
                height: { xs: "30px", lg: "45px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                border: "2px solid #000",
                borderRadius: "10px",
                marginBottom: "16px",
                cursor: "pointer",
              }}
              onClick={() => handleClickOpen("ok")}
            >
              <Typography
                color={"#000"}
                fontFamily={"Tahoma"}
                sx={{
                  fontSize: { xs: "14px", lg: "30px" },
                }}
              >
                ОК
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "100px", lg: "190px" },
                height: { xs: "30px", lg: "45px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                border: "2px solid #000",
                borderRadius: "10px",
                marginBottom: "16px",
                cursor: "pointer",
              }}
              onClick={() => handleClickOpen("cancel")}
            >
              <Typography
                color={"#000"}
                fontFamily={"Tahoma"}
                sx={{
                  fontSize: { xs: "14px", lg: "30px" },
                }}
              >
                Отмена
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "100px", lg: "190px" },
                height: { xs: "30px", lg: "45px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                border: "2px solid #000",
                borderRadius: "10px",
                marginBottom: "16px",
                cursor: "pointer",
              }}
              onClick={() => handleClickOpen("help")}
            >
              <Typography
                color={"#000"}
                fontFamily={"Tahoma"}
                sx={{
                  fontSize: { xs: "14px", lg: "30px" },
                }}
              >
                Помощь
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogContent sx={{ backgroundColor: "#EEE8D8" }}>
          <DialogContentText id="alert-dialog-description">
            {text[dialogText]}
          </DialogContentText>
          <Box sx={{ mt: "12px" }}>
            {dialogText === "like" && (
              <a href="https://www.instagram.com/hey.pawsup/">
                www.instagram.com/hey.pawsup/
              </a>
            )}
          </Box>
        </DialogContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "#EEE8D8",
          }}
        >
          <Box
            sx={{
              width: "100px",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              border: "2px solid #000",
              borderRadius: "10px",
              marginBottom: "16px",
              cursor: "pointer",
            }}
            onClick={handleClose}
          >
            <Typography
              color={"#000"}
              fontFamily={"Tahoma"}
              sx={{
                fontSize: "14px",
              }}
            >
              Ок
            </Typography>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};
export default Music;

const text = {
  like: "Поставить лайк всегда можно на наш пост в инсте",
  klass: "Ты тоже супер!",
  ok: "Как грубо....",
  cancel: "Кого отменим в этом месяце?",
  help: "Помощь приюту всегда можно оставить у входа",
  error: "Ошибка, попробуй лучше трек скачать",
};
