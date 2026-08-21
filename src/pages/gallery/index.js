import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";

const Gallery = ({ theme }) => {
  const itemData = [
    { img: "Eminem", title: "Eminem" },
    { img: "Eminem2", title: "Eminem2" },
    { img: "Jane Air", title: "Jane Air" },
    { img: "Jane Air2", title: "Jane Air2" },
    { img: "Shakira", title: "Shakira" },
    { img: "Shakira2", title: "Shakira2" },
    { img: "Артур Пирожков 2", title: "Артур Пирожков 2" },
    { img: "Артур Пирожков", title: "Артур Пирожков" },
    { img: "Бибер", title: "Бибер" },
    { img: "Бибер2", title: "Бибер2" },
    { img: "Грин Дей 2", title: "Грин Дей 2" },
    { img: "Грин Дей", title: "Грин Дей" },
    { img: "Максим", title: "Максим" },
    { img: "Максим2", title: "Максим2" },
    { img: "Меладзе", title: "Меладзе" },
    { img: "Меладзе2", title: "Меладзе2" },
  ];

  const matches = useMediaQuery("(min-width:1440px)");

  const artistList = [
    "Артур Пирожков",
    "Justin Bieber",
    "МакSим",
    "Егор Крид",
    "Ваня Дмитриенко",
    "Дима Билан",
    "Сергей Лазарев",
    "Валерий Меладзе",
    "Филипп Киркоров",
    "Alexander Rybak",
    "Тимати",
    "Иван Золо",
    "Ранетки",
    "БиС",
    "Дискотека Авария",
    "Михаил Круг",
    "Мэйби Бейби",
    "Юлия Савичева",
    "Бьянка",
    "Серёга",
    "Justin Timberlake",
    "Britney Spears",
    "Christina Aguilera",
    "50 Cent",
    "Katy Perry",
    "Eminem",
    "Rihanna",
    "Miley Cyrus",
    "Selena Gomez",
    "Demi Lovato",
    "Kesha",
    "Avril Lavigne",
    "Chris Brown",
    "Shakira",
    "Oasis",
    "Radiohead",
    "Jane Air",
    "Animal Jazz",
    "My Chemical Romance",
    "Marilyn Manson",
    "Мумий Тролль",
    "Земфира",
    "Каста",
    "Beyoncé",
    "Jay-Z",
    "Kanye West",
    "Ленинград",
    "Скриптонит",
    "Green Day",
    "Lady Gaga",
  ];

  return (
    <>
      <Box sx={{ margin: "auto", maxWidth: "1440px", paddingX: "24px" }}>
        <Box
          sx={{
            paddingTop: "20px",
            a: {
              textDecoration: "none",
              color: "#FFF",
              ":hover": {
                div: {
                  background: "#fff",
                },
                color: "#0F5190",
              },
            },
          }}
        >
          <Link to="/">
            <Box
              sx={{
                padding: "12px 24px",
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
                fontSize: "20px",
              }}
            >
              О мероприятии
            </Box>
          </Link>
        </Box>
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
            Галерея примеров
          </Typography>
        </Box>
        <Box
          sx={{
            ".timerHeading": {
              fontSize: { xs: "20px", md: "28px" },
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
            Вы можете создать коллаж с одним из предложенных артистов:
          </Typography>
        </Box>
        <Box
          sx={{
            // columnCount: { xs: 2, md: 3 },
            columnGap: "16px",
            columnWidth: { xs: "150px", md: "180px" },
          }}
        >
          {artistList.map((artist) => (
            <Box
              sx={{
                breakInside: "avoid",
                marginBottom: "16px",
                fontSize: { xs: "16px", md: "18px" },
                fontFamily: "Manrope",
                fontWeight: "600",
              }}
            >
              {artist}
            </Box>
          ))}
        </Box>
        <ImageList variant="masonry" cols={matches ? 4 : 2} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`/images/gallery/${item.img}.jpg?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`/images/gallery/${item.img}.jpg?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </>
  );
};

export default Gallery;
