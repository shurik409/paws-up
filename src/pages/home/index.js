import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

export function EventCard({
  event,
  expanded,
  onChange,
  buttonText,
  backgroundColor = "#FFFBF4",
  buttonColor = "#DBA535",
}) {
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      disableGutters
      elevation={0}
      sx={{
        backgroundColor: backgroundColor,
        borderRadius: "10px !important",
        "&:before": { display: "none" },
        position: "relative",
      }}
    >
      <AccordionSummary
        expandIcon={null}
        sx={{
          minHeight: "auto",
          flexDirection: "column",
          alignItems: "stretch",
          "& .MuiAccordionSummary-content": { flexDirection: "column", m: 0 },
          paddingTop: "18px",
          paddingX: "14px",
        }}
      >
        {event.image && (
          <Box
            sx={{ position: "absolute", ...event.image.position, zIndex: 2 }}
          >
            <img
              src={event.image.src}
              alt={event.id}
              width={event.image.size.width}
              height={event.image.size.height}
            ></img>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: event.description ? "40px" : "18px",
          }}
        >
          <Box sx={{ display: "flex", gap: "4px" }}>
            <svg
              width="13"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488942 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32652 3.81441 7.62394 8.59632 11.9999 8.87625L12.0244 8.12296C8.44713 8.04146 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.62801 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87704C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                fill="#E1AD41"
              />
            </svg>
            <Typography
              sx={{
                fontFamily: "Calypso",
                fontSize: "24px",
                lineHeight: "100%",
                textTransform: "uppercase",
                textAlign: "left",
                color: "#0B0B0B",
                marginTop: "10px",
              }}
            >
              {event.time || event.name}
            </Typography>
          </Box>
          {event.price && (
            <Box
              sx={{
                backgroundImage: "url(/images/home/price_back.webp)",
                backgroundRepeat: "round",
                backgroundSize: "cover",
                height: "28px",
                width: "94px",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "100%",
                fontWeight: "400",
                textAlign: "left",
                color: "#E1AD41",
                display: "flex",
                justifyContent: "center",
                fontStyle: "italic",
                alignItems: "center",
                filter: "drop-shadow(3px 3px 2.8px rgba(0, 0, 0, 0.1))",
              }}
            >
              {event.price}
            </Box>
          )}
        </Box>

        {event.time && (
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              lineHeight: "100%",
              fontWeight: "400",
              textAlign: "left",
              color: "#111111",
              marginBottom: "10px",
            }}
          >
            {event.name}
          </Typography>
        )}

        {!expanded && event.description && (
          <Box
            onClick={(e) => {
              e.stopPropagation();
              onChange(e, true);
            }}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              cursor: "pointer",
              fontFamily: "Montserrat",
              fontSize: "12px",
              lineHeight: "100%",
              fontWeight: "400",
              textAlign: "left",
              color: buttonColor,
              marginBottom: "10px",
            }}
          >
            {buttonText}
            <Box>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.353553"
                  y1="0.353478"
                  x2="5.35355"
                  y2="5.35348"
                  stroke={buttonColor}
                />
                <line
                  y1="-0.5"
                  x2="7.07107"
                  y2="-0.5"
                  transform="matrix(-0.707107 0.707107 0.707107 0.707107 10 0.707031)"
                  stroke={buttonColor}
                />
              </svg>
            </Box>
          </Box>
        )}
      </AccordionSummary>
      <AccordionDetails
        sx={{ px: "14px", pb: "10px", pt: 0 }}
        onClick={(e) => {
          e.stopPropagation();
          onChange(e, false);
        }}
      >
        {event.preDescription && (
          <Typography
            sx={{
              fontFamily: "Montserrat",
              fontSize: "12px",
              lineHeight: "100%",
              fontWeight: "700",
              textAlign: "left",
              color: "#111111",
              mb: "4px",
            }}
          >
            {event.preDescription}
          </Typography>
        )}
        <Typography
          sx={{
            fontFamily: "Montserrat",
            fontSize: "12px",
            lineHeight: "100%",
            fontWeight: "400",
            textAlign: "left",
            color: "#111111",
            mb: "10px",
          }}
        >
          {event.description}
        </Typography>
        <Box
          onClick={(e) => onChange(e, false)}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            cursor: "pointer",
            fontFamily: "Montserrat",
            fontSize: "12px",
            lineHeight: "100%",
            fontWeight: "400",
            textAlign: "left",
            color: buttonColor,
          }}
        >
          {buttonText}
          <Box sx={{ transform: "rotate(180deg)" }}>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.353553"
                y1="0.353478"
                x2="5.35355"
                y2="5.35348"
                stroke={buttonColor}
              />
              <line
                y1="-0.5"
                x2="7.07107"
                y2="-0.5"
                transform="matrix(-0.707107 0.707107 0.707107 0.707107 10 0.707031)"
                stroke={buttonColor}
              />
            </svg>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export function ImageCarousel({ folder, isRight }) {
  const images = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  return (
    <Box
      sx={{
        overflow: "hidden",
        width: "100%",
        position: "relative",
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "60px",
          zIndex: 2,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "fit-content",
          animation: `scroll 20s linear infinite ${isRight ? "" : "reverse"}`,
          "@keyframes scroll": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: `translateX(-${100 / 2}%)` },
          },
        }}
      >
        {images.map((image, i) => (
          <Box
            key={i}
            component="img"
            src={`/images/home/${folder}/${image}.webp`}
            sx={{
              height: 200,
              width: "auto",
              flexShrink: 0,
              mx: 1,
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

const Home = () => {
  const info = {
    scene_1: [
      {
        time: "12:00 – 13:00",
        name: "BEAUTY показ",
      },
      {
        time: "13:00 – 14:30",
        name: "Lampa Just Dance",
      },
      {
        time: "14:30 – 16:00",
        name: "Мультфим",
      },
      {
        time: "16:10 - 16:50",
        name: "Dj Bravo",
      },
      {
        time: "16:50 - 17:30",
        name: "Znichka",
      },
    ],
    scene_2: [
      {
        time: "17:40 - 18:10",
        name: "Dj Frukt",
      },
      {
        time: "18:20 - 19:00",
        name: "Лайтовы Бізнес",
      },
      {
        time: "19:20 - 20:10",
        name: "Dj Sion",
      },
      {
        time: "20:20 - 20:45",
        name: "Wasssup",
      },
      {
        time: "21:00 - 21:30",
        name: "Живая музыка от Виталия Шишпоронка",
      },
    ],
    mk: [
      {
        id: "mk1",
        time: "12:00 – 13:00",
        price: "Бесплатно",
        name: "Вязание крючком для правшей",
        description: (
          <>
            Создайте уникальное украшение на пуговицу своими руками из цветной
            пряжи с помощью крючка. Подойдёт даже тем, кто только знакомится с
            вязанием.
          </>
        ),
      },
      {
        id: "mk2",
        time: "12:00 – 13:00",
        price: "Бесплатно",
        name: "Прыжки на скакалке",
        description: (
          <>
            Потренируйтесь в прыжках на скакалке и попробуйте разные техники и
            комбинации.{" "}
            <span>Для участия необходимо прийти со своей скакалкой.</span>
          </>
        ),
      },
      {
        id: "mk3",
        time: "13:00 – 14:30",
        price: "Бесплатно",
        name: "Плетение из бусин от Conte",
        description: (
          <>
            Создайте ожерелье из бусин для своей собаки с её кличкой и номером
            телефона хозяина. Получится красивый и полезный аксессуар для вашего
            четвероногого друга.
          </>
        ),
      },
      {
        id: "mk4",
        time: "14:30 – 17:00",
        price: "15 ₽ за 1 чел",
        name: "Брелоки из бусин",
        preDescription: <span>2 группы: 14:30 – 15:30, 15:45 – 16:45</span>,
        description: (
          <>
            Создайте яркий брелок из цветных бусин в форме звёздочки своими
            руками.
          </>
        ),
      },
      {
        id: "mk5",
        time: "17:00 – 20:00",
        price: "15 ₽ за 1 чел",
        name: "Живопись на холстах",
        preDescription: <span>2 группы: 17:00 – 18:30, 18:30 – 20:00</span>,
        description: (
          <>
            Распишите собственный холст акриловыми красками и создайте картину,
            которую можно будет забрать с собой.
          </>
        ),
      },
    ],
    activity: [
      {
        id: "ac1",
        time: "12:00 – 16:00",
        name: "Деревянные игры",
        description:
          "Попробуйте разные деревянные игры, испытайте ловкость, внимательность и смекалку. Можно играть с друзьями или присоединиться к игре на месте.",
      },
      {
        id: "ac2",
        time: "12:00 – 16:00",
        name: "Шахматы",
        description:
          "Сыграйте партию с друзьями или новым соперником и проверьте, кому сегодня улыбнётся удача. Подходите в любое время работы зоны.",
        image: {
          src: "/images/home/activity/magic.webp",
          size: { width: "97px", height: "164px" },
          position: {
            right: 0,
            top: "-76px",
          },
        },
      },
      {
        id: "ac3",
        time: "12:00 – 17:00",
        name: "BEAUTYZONE POINT",
        description:
          "Познакомьтесь со специалистами и задайте вопросы о волосах и коже головы. Получите полезные рекомендации по уходу и узнайте больше о здоровье волос.",
        image: {
          src: "/images/home/activity/flags.webp",
          size: { width: "102px", height: "82px" },
          position: {
            right: 0,
            top: 0,
          },
        },
      },
      {
        id: "ac4",
        time: "13:00 – 16:00",
        name: "Аквагрим",
        description:
          "Добавьте немного волшебства в свой образ! Выберите сказочного героя, животное или любой другой образ — и превратитесь в него с помощью красок.",
        image: {
          src: "/images/home/activity/stars.webp",
          size: { width: "89px", height: "125px" },
          position: {
            right: 0,
            top: 0,
          },
        },
      },
      {
        id: "ac5",
        time: "13:00 – 16:00",
        name: "Чайная церемония",
        description:
          "Остановитесь на несколько минут, познакомьтесь с традициями чайной церемонии и насладитесь чашкой ароматного чая. Это место, где можно немного замедлиться и отдохнуть от фестивальной суеты.",
      },
      {
        id: "ac6",
        time: "15:00 - 19:00",
        name: "Таро",
        description:
          "Загляните в мир символов и попробуйте посмотреть на волнующие вас вопросы под другим углом. Расклад может подсказать неожиданный взгляд на привычную ситуацию.",
        image: {
          src: "/images/home/activity/taro.webp",
          size: { width: "101px", height: "115px" },
          position: {
            right: "22px",
            top: "-48px",
          },
        },
      },
    ],
    activity2: [
      {
        id: "ac2_1",
        name: "Беспроигрышная лотерея",
        description:
          "Испытайте удачу и заберите свой подарок — здесь выигрывает каждый билет. А главное, участие в лотерее помогает животным проекта «Мурзики».",
      },
      {
        id: "ac2_2",
        name: "Детская зона",
        description:
          "Добро пожаловать в мастерскую чудес! Здесь маленькие гости смогут мастерить, рисовать, украшать и создавать собственных сказочных героев. Можно сделать корону, волшебную палочку, меч и щит, браслет из цветов и листьев или просто взять раскраски и дать волю фантазии.",
      },
      {
        id: "ac2_3",
        name: "Точка продаж от Conte",
      },
      {
        id: "ac2_4",
        name: "Точка продаж от Random Bedroom",
      },
      {
        id: "ac2_5",
        name: "Мини-активности",
        description: (
          <Box
            sx={{
              ".description": {
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "12px",
                textAlign: "left",
                display: "block",
                marginTop: "4px",
                marginBottom: "10px",
              },
              ".headline": {
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "12px",
                fontWeight: "700",
                textAlign: "left",
                display: "block",
              },
            }}
          >
            <span className="headline">Найди свое пожелание</span>
            <span className="description">
              Иногда нужные слова находят нас сами. Пройдите сквозь волшебную
              завесу и найдите первое слово, которое встретится вам на пути.
              Возможно, именно оно станет вашим пожеланием на сегодня.
            </span>
            <span className="headline">Чек-лист найди слова</span>
            <span className="description">
              Перед вами — настоящее поле слов. Среди множества букв спрятались
              слова, которые ждут, когда вы их найдёте.
              <br />
              <br />
              Внимательно изучайте ватман, ищите знакомые и неожиданные слова и
              обводите те, что удалось обнаружить. Кто знает, может быть, среди
              них спрятано что-то именно для вас?
            </span>
            <span className="headline">Оставь свой след</span>
            <span className="description">
              В Сказочном мире каждый может стать кем угодно. Перед вами —
              заготовка будущего героя. Дорисуйте его так, как подскажет
              воображение: придумайте внешность, характер и настроение.
            </span>
            <span className="headline">Послание тишины</span>
            <span className="description">
              Оставьте доброе слово тому, кого никогда не встретите. Возьмите
              одну открытку, а взамен оставьте свою: пожелание, слова поддержки,
              мысль или маленькое послание для следующего человека. Пусть добрые
              слова продолжают свой путь от сердца к сердцу!
            </span>
          </Box>
        ),
      },
    ],
    auction: {
      name: "Аукцион картин",
      description:
        "Выберите картину, которая вам понравилась, и попробуйте побороться за неё на благотворительном аукционе. Все собранные средства помогут животным проекта «Мурзики».",
    },
  };

  const pets = [
    { image: 1, name: "Юки, 2 года" },
    { image: 2, name: "Шарки, 1.5 года" },
    { image: 3, name: "Мура" },
    { image: 4, name: "Тося, 4 года" },
    { image: 5, name: "Вишня, 5 мес" },
    { image: 6, name: "Агата, 3 мес" },
    { image: 7, name: "Малыши" },
    { image: 8, name: "Лютик, 2 года" },
  ];
  const colapsePets = [...pets, ...pets];

  const [expanded, setExpanded] = useState(false);

  const handleChange = (id) => (event, isExpanded) => {
    setExpanded(isExpanded ? id : false);
  };

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("+375 33 300 99 19");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Ошибка копирования:", err);
    }
  };
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // от 900px и выше

  return !isDesktop ? (
    <Box
      sx={{
        backgroundColor: "#fff",
        a: {
          textDecoration: "none",
        },
      }}
    >
      <Box
        sx={{
          // height: "1080px",
          backgroundImage: "url(/images/home/hero_back.webp)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          maxHeight: "979px",
        }}
      >
        <Box sx={{ width: "360px", marginX: "auto" }}>
          <Box sx={{ paddingTop: "110px", px: "2px", position: "relative" }}>
            <Typography
              sx={{
                fontFamily: "Calypso",
                fontSize: "30px",
                lineHeight: "180%",
                textTransform: "uppercase",
                textAlign: "center",
                color: "#0B0B0B",
                span: {
                  fontSize: "60px",
                  lineHeight: "130%",
                  color: "#EFB53C",
                },
              }}
            >
              самые настоящие <br />
              <span>чудеса</span> <br />
              создаем мы сами
            </Typography>
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translate(-50%)",
              }}
            >
              <img src={"/images/home/hero_headline.webp"} alt="headline" />
            </Box>
          </Box>
          <Box sx={{ paddingX: "42px", marginTop: "26px" }}>
            <Box
              sx={{
                background: "url(/images/home/hero_desc.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                paddingX: "20px",
                height: "106px",
                maxWidth: "250px",
                marginX: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Calypso",
                    fontSize: "30px",
                    lineHeight: "100%",
                    textAlign: "center",
                    color: "#111111",
                  }}
                >
                  PawsUp
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "14px",
                    lineHeight: "100%",
                    fontWeight: "500",
                    textAlign: "center",
                    color: "#111111",
                    marginTop: "4px",
                  }}
                >
                  Благотворительный фестиваль
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "44px",
              justifyContent: "center",
              marginTop: "32px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <img src={"/images/home/calendar.webp"} alt="calendar" />
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    lineHeight: "100%",
                    fontWeight: "700",
                    textAlign: "left",
                    color: "#111111",
                  }}
                >
                  22 августа
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    lineHeight: "100%",
                    fontWeight: "400",
                    textAlign: "left",
                    color: "#111111",
                    marginTop: "2px",
                  }}
                >
                  12:00 - 22:00
                </Typography>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <img src={"/images/home/place.webp"} alt="calendar" />
              <Box>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    lineHeight: "100%",
                    fontWeight: "700",
                    textAlign: "left",
                    color: "#111111",
                  }}
                >
                  ЭХО двор
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    lineHeight: "100%",
                    fontWeight: "400",
                    textAlign: "left",
                    color: "#111111",
                    marginTop: "2px",
                  }}
                >
                  Независимости 95к5
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <a href="#program">
              <Box
                sx={{
                  width: "340px",
                  paddingY: "14px",
                  borderRadius: "100px",
                  background: "#FFFFFF",
                  color: "#DBA535",
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  lineHeight: "14px",
                  fontWeight: "700",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginX: "auto",
                  cursor: "pointer",
                  userSelect: "none",
                  transition:
                    "transform 0.15s ease, background-color 0.2s ease, box-shadow 0.15s ease",
                  "&:hover": {
                    background: "#FFF9EA",
                    boxShadow: "0 2px 8px rgba(219, 165, 53, 0.25)",
                  },
                  "&:active": {
                    transform: "scale(0.95)",
                    background: "#FFF3D9",
                  },
                }}
              >
                Смотреть программу
              </Box>
            </a>
            <a href="#help">
              <Box
                sx={{
                  width: "340px",
                  paddingY: "14px",
                  borderRadius: "100px",
                  background: "#DBA535",
                  color: "#FFFFFF",
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  lineHeight: "14px",
                  fontWeight: "700",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginX: "auto",
                  marginTop: "6px",
                  cursor: "pointer",
                  userSelect: "none",
                  transition:
                    "transform 0.15s ease, background-color 0.2s ease, box-shadow 0.15s ease",
                  "&:hover": {
                    background: "#C9942E",
                    boxShadow: "0 2px 8px rgba(219, 165, 53, 0.35)",
                  },
                  "&:active": {
                    transform: "scale(0.95)",
                    background: "#B8862A",
                  },
                }}
              >
                Помочь прямо сейчас
              </Box>
            </a>
          </Box>
          <Box>
            <Box
              sx={{
                position: "relative",
                marginTop: "26px",
                paddingLeft: "12%",
              }}
            >
              <Box
                sx={{
                  width: "95px",
                  height: "28px",
                  background: "url(/images/home/paper.webp)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  fontStyle: "italic",
                  lineHeight: "14px",
                  fontWeight: "400",
                  textAlign: "center",
                  color: "#E1AD41",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Творчество
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                marginTop: "62px",
                paddingLeft: "49%",
              }}
            >
              <Box
                sx={{
                  width: "81px",
                  height: "28px",
                  background: "url(/images/home/paper.webp)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  fontStyle: "italic",
                  lineHeight: "14px",
                  fontWeight: "400",
                  textAlign: "center",
                  color: "#E1AD41",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Музыка
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                marginTop: "12px",
                paddingLeft: "27%",
              }}
            >
              <Box
                sx={{
                  width: "97px",
                  height: "28px",
                  background: "url(/images/home/paper.webp)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  fontStyle: "italic",
                  lineHeight: "14px",
                  fontWeight: "400",
                  textAlign: "center",
                  color: "#E1AD41",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Знакомства
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                marginTop: "12px",
                paddingLeft: "60%",
              }}
            >
              <Box
                sx={{
                  width: "106px",
                  height: "28px",
                  background: "url(/images/home/paper.webp)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  fontStyle: "italic",
                  lineHeight: "14px",
                  fontWeight: "400",
                  textAlign: "center",
                  color: "#E1AD41",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Добрые дела
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: "32px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "294px",
                height: "58px",
                background: "url(/images/home/big_paper.webp)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "14px",
                fontWeight: "400",
                textAlign: "center",
                color: "#111111",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Добро начинается с маленьких шагов.
              <br /> А чудеса мы создаём вместе!
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundImage: "url(/images/home/hero_end.webp)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "40px",
            zIndex: 1,
            marginTop: "30px",
          }}
        ></Box>
      </Box>
      <Box sx={{ marginTop: "96px", width: "340px", marginX: "auto" }}>
        <Typography
          sx={{
            fontFamily: "Calypso",
            fontSize: "30px",
            lineHeight: "100%",
            textTransform: "uppercase",
            textAlign: "left",
            color: "#0B0B0B",
          }}
        >
          Карта фестиваля
        </Typography>
      </Box>
      <Box
        sx={{
          position: "relative",
          marginX: "auto",
          zIndex: 1,
          marginTop: "20px",
        }}
        id="program"
      >
        <img src="/images/home/map.webp" alt="map" width="100%" height="auto" />
      </Box>
      <Box
        sx={{
          marginTop: "40px",
          width: "360px",
          marginX: "auto",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Calypso",
            fontSize: "30px",
            lineHeight: "100%",
            textTransform: "uppercase",
            textAlign: "left",
            color: "#0B0B0B",
            paddingLeft: "12px",
          }}
        >
          Основная
          <br />
          программа (сцена)
        </Typography>
        <Box
          sx={{
            backgroundImage: "url(/images/home/scene_back.webp)",
            backgroundRepeat: "round",
            backgroundSize: "cover",
            paddingLeft: "30px",
            paddingTop: "50px",
            paddingBottom: "32px",
            position: "relative",
            marginTop: "66px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              backgroundImage: "url(/images/home/scene_clip.webp)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "150px",
              height: "92px",
              left: "45px",
              top: "-58px",
            }}
          ></Box>
          {info.scene_1.map((activity, index) => (
            <Box
              sx={{
                marginTop: index !== 0 ? "20px" : "0px",
                display: "flex",
                gap: "2px",
              }}
            >
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488942 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32652 3.81441 7.62394 8.59632 11.9999 8.87625L12.0244 8.12296C8.44713 8.04146 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.62801 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87704C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                  fill="#E1AD41"
                />
              </svg>
              <Box sx={{ marginTop: "14px" }}>
                <Typography
                  sx={{
                    fontFamily: "Calypso",
                    fontSize: "24px",
                    lineHeight: "100%",
                    textAlign: "left",
                    color: "#0B0B0B",
                  }}
                >
                  {activity.time}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "18px",
                    lineHeight: "100%",
                    textAlign: "left",
                    color: "#111111",
                    marginTop: "2px",
                  }}
                >
                  {activity.name}
                </Typography>
              </Box>
            </Box>
          ))}
          <Box
            sx={{
              position: "absolute",
              backgroundImage: "url(/images/home/scene_star.webp)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "144px",
              height: "376px",
              right: "16px",
              top: "12px",
            }}
          ></Box>
        </Box>
        <Box
          sx={{
            backgroundImage: "url(/images/home/scene_back.webp)",
            backgroundRepeat: "round",
            backgroundSize: "cover",
            paddingRight: "30px",
            paddingTop: "50px",
            paddingBottom: "32px",
            position: "relative",
            marginTop: "66px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              backgroundImage: "url(/images/home/scene_clip.webp)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "150px",
              height: "92px",
              right: "45px",
              top: "-58px",
            }}
          ></Box>
          {info.scene_2.map((activity, index) => (
            <Box
              sx={{
                marginTop: index !== 0 ? "20px" : "0px",
                display: "flex",
                gap: "2px",
                justifyContent: "end",
              }}
            >
              <Box sx={{ marginTop: "14px" }}>
                <Typography
                  sx={{
                    fontFamily: "Calypso",
                    fontSize: "24px",
                    lineHeight: "100%",
                    textAlign: "right",
                    color: "#0B0B0B",
                  }}
                >
                  {activity.time}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: "18px",
                    lineHeight: "100%",
                    textAlign: "right",
                    color: "#111111",
                    marginTop: "2px",
                  }}
                >
                  {activity.name}
                </Typography>
              </Box>
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488942 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32652 3.81441 7.62394 8.59632 11.9999 8.87625L12.0244 8.12296C8.44713 8.04146 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.62801 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87704C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                  fill="#E1AD41"
                />
              </svg>
            </Box>
          ))}
          <Box
            sx={{
              position: "absolute",
              backgroundImage: "url(/images/home/scene_star.webp)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "144px",
              height: "376px",
              left: "16px",
              top: "12px",
            }}
          ></Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: "40px" }}>
        <ImageCarousel folder="courusel1" isRight={false}></ImageCarousel>
      </Box>
      <Box sx={{ marginTop: "20px", marginBottom: "70px" }}>
        <ImageCarousel folder="courusel2" isRight={true}></ImageCarousel>
      </Box>
      <Box
        sx={{
          background: "url(/images/home/green_start.webp)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "36px",
        }}
      ></Box>
      <Box sx={{ backgroundColor: "#C8D399" }}>
        <Box sx={{ width: "340px", marginX: "auto" }}>
          <Typography
            sx={{
              color: "#0B0B0B",
              fontFamily: "Calypso",
              fontSize: "30px",
              lineHeight: "100%",
              textAlign: "left",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            Мастер-классы
          </Typography>
          {info.mk.map((activity, index) => (
            <Box sx={{ marginTop: index !== 0 ? "10px" : 0 }}>
              <EventCard
                event={activity}
                expanded={expanded === activity.id}
                onChange={handleChange(activity.id)}
                buttonText={"Подробнее о мастер-классе"}
              />
            </Box>
          ))}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfkN4N51uf7hC_07yjg0ykF4zpIz8_GeW9ntEaHIzxo5LUB9A/viewform"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              sx={{
                width: "340px",
                paddingY: "14px",
                borderRadius: "100px",
                background: "#DBA535",
                color: "#FFF",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "14px",
                fontWeight: "700",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginX: "auto",
                marginTop: "20px",
                textTransform: "uppercase",
                cursor: "pointer",
                userSelect: "none",
                transition:
                  "transform 0.15s ease, background-color 0.2s ease, box-shadow 0.15s ease",
                "&:hover": {
                  background: "#C9942E",
                  boxShadow: "0 2px 8px rgba(219, 165, 53, 0.35)",
                },
                "&:active": {
                  transform: "scale(0.95)",
                  background: "#B8862A",
                },
              }}
            >
              Регистрация на мастер-классы
            </Box>
          </a>
          <Typography
            sx={{
              color: "#0B0B0B",
              fontFamily: "Calypso",
              fontSize: "30px",
              lineHeight: "100%",
              textAlign: "left",
              marginTop: "50px",
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            Активности
          </Typography>
          <Box>
            {info.activity.map((activity, index) => (
              <Box sx={{ marginTop: index !== 0 ? "10px" : 0 }}>
                <EventCard
                  event={activity}
                  expanded={expanded === activity.id}
                  onChange={handleChange(activity.id)}
                  buttonText={"Подробнее"}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "url(/images/home/green_end.webp)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "40px",
        }}
      ></Box>
      <Box sx={{ width: "340px", marginX: "auto" }}>
        <Typography
          sx={{
            color: "#0B0B0B",
            fontFamily: "Calypso",
            fontSize: "30px",
            lineHeight: "100%",
            textAlign: "left",
            marginTop: "50px",
            marginBottom: "20px",
            textTransform: "uppercase",
          }}
        >
          а еще...
        </Typography>
        <Typography
          sx={{
            color: "#0B0B0B",
            fontFamily: "Montserrat",
            fontSize: "12px",
            lineHeight: "14px",
            textAlign: "left",
          }}
        >
          Некоторые активности будут ждать вас практически весь фестиваль —
          можно заглянуть в удобное время!
        </Typography>
        <Box sx={{ marginTop: "6px" }}>
          <EventCard
            event={info.auction}
            expanded={expanded === "auction"}
            onChange={handleChange("auction")}
            buttonText={"Подробнее"}
            backgroundColor="#DBECF0"
            buttonColor="#111111"
          />
        </Box>
        <Link to="/auction">
          <Box
            sx={{
              width: "340px",
              paddingY: "14px",
              borderRadius: "100px",
              background: "#DBA535",
              color: "#FFF",
              fontFamily: "Montserrat",
              fontSize: "12px",
              lineHeight: "14px",
              fontWeight: "700",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginX: "auto",
              marginTop: "10px",
              textTransform: "uppercase",
              cursor: "pointer",
              userSelect: "none",
              transition:
                "transform 0.15s ease, background-color 0.2s ease, box-shadow 0.15s ease",
              "&:hover": {
                background: "#C9942E",
                boxShadow: "0 2px 8px rgba(219, 165, 53, 0.35)",
              },
              "&:active": {
                transform: "scale(0.95)",
                background: "#B8862A",
              },
            }}
          >
            Посмотреть лоты аукциона
          </Box>
        </Link>
        <Box sx={{ marginTop: "10px" }}>
          {info.activity2.map((activity, index) => (
            <Box sx={{ marginTop: index !== 0 ? "10px" : 0 }}>
              <EventCard
                event={activity}
                expanded={expanded === activity.id}
                onChange={activity.description && handleChange(activity.id)}
                buttonText={"Подробнее"}
                backgroundColor="#DBECF0"
                buttonColor="#111111"
              />
            </Box>
          ))}
        </Box>
      </Box>
      {/* О нас */}
      <Box sx={{ marginTop: "60px" }}>
        <img
          src="/images/home/we_stars.webp"
          alt="stars"
          width="100%"
          height="auto"
        />
      </Box>
      <Box sx={{ width: "340px", marginX: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "40px",
            alignItems: "start",
          }}
        >
          <Box>
            <Typography
              sx={{
                color: "#0B0B0B",
                fontFamily: "Calypso",
                fontSize: "30px",
                lineHeight: "100%",
                textAlign: "left",
                marginTop: "8px",
                maxWidth: "174px",
                textTransform: "uppercase",
              }}
            >
              Кто мы?
            </Typography>
            <Typography
              sx={{
                color: "#111111",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "100%",
                textAlign: "left",
                marginTop: "20px",
                maxWidth: "174px",
              }}
            >
              Мы — небольшой волонтерский проект
            </Typography>
            <Typography
              sx={{
                color: "#111111",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "100%",
                textAlign: "left",
                marginTop: "6px",
                maxWidth: "174px",
              }}
            >
              Наша главная цель — показать, что делать добро можно легко,
              красиво <br />и с удовольствием
            </Typography>
          </Box>
          <Box>
            <img
              src="images/home/logo.webp"
              alt="murziki"
              width="152px"
              height="158px"
            />
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "50px",
          }}
        >
          <Typography
            sx={{
              color: "#0B0B0B",
              fontFamily: "Calypso",
              fontSize: "30px",
              lineHeight: "100%",
              textAlign: "left",
              textTransform: "uppercase",
            }}
          >
            Мы рассказываем...
          </Typography>
        </Box>
        <Box sx={{ marginTop: "15px" }}>
          <Box
            sx={{
              background: "url(/images/home/paws_paper.webp)",
              filter: "drop-shadow(-3px 3px 4.7px rgba(0, 0, 0, 0.1))",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "286px",
              height: "92px",
            }}
          >
            <svg
              width="13"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488942 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32652 3.81441 7.62394 8.59632 11.9999 8.87625L12.0244 8.12296C8.44713 8.04146 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.62801 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87704C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                fill="#E1AD41"
              />
            </svg>
            <Typography
              sx={{
                color: "#111111",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "14px",
                textAlign: "center",
                marginTop: "6px",
              }}
            >
              О том, как можно помогать
              <br /> приютам и бездомным животным
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end", marginY: "10px" }}>
            <Box
              sx={{
                background: "url(/images/home/paws_paper.webp)",
                filter: "drop-shadow(-3px 3px 4.7px rgba(0, 0, 0, 0.1))",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "286px",
                height: "92px",
              }}
            >
              <Box sx={{ display: "flex", gap: "4px" }}>
                <svg
                  width="13"
                  height="17"
                  viewBox="0 0 13 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488942 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32652 3.81441 7.62394 8.59632 11.9999 8.87625L12.0244 8.12296C8.44713 8.04146 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.62801 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87704C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                    fill="#E1AD41"
                  />
                </svg>
                <svg
                  width="13"
                  height="17"
                  viewBox="0 0 13 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488942 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32652 3.81441 7.62394 8.59632 11.9999 8.87625L12.0244 8.12296C8.44713 8.04146 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.62801 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87704C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                    fill="#E1AD41"
                  />
                </svg>
              </Box>
              <Typography
                sx={{
                  color: "#111111",
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  lineHeight: "14px",
                  textAlign: "center",
                  marginTop: "6px",
                }}
              >
                О том, где познакомиться с<br />
                пушистыми друзьями и, возможно,
                <br /> найти того самого
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              background: "url(/images/home/paws_paper.webp)",
              filter: "drop-shadow(-3px 3px 4.7px rgba(0, 0, 0, 0.1))",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "286px",
              height: "92px",
            }}
          >
            <Box sx={{ display: "flex", gap: "4px" }}>
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488942 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32652 3.81441 7.62394 8.59632 11.9999 8.87625L12.0244 8.12296C8.44713 8.04146 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.62801 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87704C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                  fill="#E1AD41"
                />
              </svg>
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488942 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32652 3.81441 7.62394 8.59632 11.9999 8.87625L12.0244 8.12296C8.44713 8.04146 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.62801 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87704C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                  fill="#E1AD41"
                />
              </svg>
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488942 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32652 3.81441 7.62394 8.59632 11.9999 8.87625L12.0244 8.12296C8.44713 8.04146 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.62801 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87704C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                  fill="#E1AD41"
                />
              </svg>
            </Box>
            <Typography
              sx={{
                color: "#111111",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "14px",
                textAlign: "center",
                marginTop: "6px",
              }}
            >
              О том, на какие события можно
              <br />
              прийти, хорошо провести время и<br />
              одновременно помочь животным
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            color: "#111111",
            fontFamily: "Montserrat",
            fontSize: "12px",
            lineHeight: "14px",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          Мы объединяем людей, творчество, музыку и заботу о животных — и
          создаём пространство, в котором делать добро легко и приятно
        </Typography>
      </Box>

      <Box sx={{ marginTop: "20px" }}>
        <ImageCarousel folder="paws" isRight={true}></ImageCarousel>
      </Box>
      <Box sx={{ width: "340px", marginX: "auto" }}>
        <Typography
          sx={{
            color: "#111111",
            fontFamily: "Montserrat",
            fontSize: "18px",
            textAlign: "left",
            marginTop: "50px",
          }}
        >
          В этом году мы приглашаем вас <br />
          стать частью новой истории
        </Typography>
      </Box>
      <Box sx={{ paddingRight: "2vw" }}>
        <Box
          sx={{
            background: "url(/images/home/book3.webp)",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "end",
            // width: "350px",
            position: "relative",
            height: "463px",
            paddingRight: "100px",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Box sx={{ position: "absolute", right: "30px", top: "15px" }}>
              <svg
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488951 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32653 3.81441 7.62394 8.59633 11.9999 8.87626L12.0244 8.12296C8.44713 8.04147 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.628 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87705C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                  fill="#E1AD41"
                />
                <path
                  d="M18.0244 22C18.0244 22 18.0244 22 18.0244 22C18.0576 21.4939 18.0545 20.986 18.0025 20.476C17.9015 18.4851 16.4231 16.0828 14.0244 16.123L14.0482 16.8763C16.9955 16.7502 18.676 13.5501 18.5244 11L17.5244 11C17.5244 11 17.5244 11 17.5244 11C17.3728 13.5501 19.0533 16.7502 22.0007 16.8763L22.0244 16.123C19.6258 16.0828 18.1473 18.4851 18.0463 20.476C17.9943 20.986 17.9912 21.4939 18.0244 22C18.0244 22 18.0244 22 18.0244 22C18.0579 21.4939 18.1245 20.9952 18.2339 20.5063C18.6013 18.5411 20.0852 16.704 22.0244 16.877L22.0482 16.1237C19.7027 15.84 18.4266 13.3474 18.5244 11C18.5244 11 18.5244 11 18.5244 11L17.5244 11C17.6222 13.3473 16.3461 15.84 14.0007 16.1237L14.0244 16.877C15.9636 16.704 17.4475 18.5411 17.815 20.5063C17.9243 20.9952 17.991 21.4939 18.0244 22ZM18.0244 22"
                  fill="#E1AD41"
                />
              </svg>
            </Box>
            <Box
              sx={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                top: "16px",
              }}
            >
              <svg
                width="259"
                height="144"
                viewBox="0 0 259 144"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_148_8" fill="white">
                  <ellipse
                    cx="131.988"
                    cy="74.4223"
                    rx="117.807"
                    ry="44.2259"
                    transform="rotate(10.7493 131.988 74.4223)"
                  />
                </mask>
                <path
                  d="M247.728 96.3948C245.922 105.463 237.439 111.043 229.478 114.504C195.78 127.172 158.647 123.674 123.81 117.504C101.925 113.271 80.3659 106.953 60.1819 97.5298C41.5649 87.9235 15.9586 75.8005 16.7399 52.5431C24.5363 30.6175 52.8039 28.7221 73.6462 26.6069C95.8794 25.2361 118.254 27.259 140.167 31.3409C174.842 38.3675 210.674 48.7216 237.384 72.8576C243.523 78.9949 249.371 87.296 247.728 96.3948C249.443 87.3049 243.636 78.9173 237.518 72.7234C210.89 48.3377 175.036 37.777 140.307 30.6041C118.357 26.431 95.9275 24.3363 73.5869 25.6713C52.6392 27.8798 24.1964 29.2032 15.7574 52.3566C15.7574 52.3566 15.7574 52.3566 15.7574 52.3566C15.124 76.9918 41.1029 88.6468 59.7838 98.3786C80.0809 107.808 101.717 114.079 123.67 118.241C158.611 124.294 195.841 127.608 229.554 114.678C237.515 111.157 245.992 105.481 247.728 96.3948ZM247.728 96.3948"
                  fill="#E1AD41"
                  mask="url(#path-1-inside-1_148_8)"
                />
                <mask id="path-3-inside-2_148_8" fill="white">
                  <ellipse
                    cx="122.233"
                    cy="50.0735"
                    rx="122.233"
                    ry="50.0735"
                    transform="matrix(0.982453 -0.186513 -0.186513 -0.982453 18.6787 143.986)"
                  />
                </mask>
                <path
                  d="M249.516 49.1949C247.693 39.6923 239.529 33.1161 231.273 28.9561C196.501 13.526 156.849 16.6911 120.158 23.1666C97.0618 27.636 74.3693 34.5436 53.313 45.0813C33.8469 55.608 7.94602 70.1063 9.8306 94.6978C17.0894 118.269 46.5016 122.266 68.4712 124.927C91.9243 127.015 115.57 125.125 138.697 120.819C175.209 113.398 213.261 101.811 239.959 74.7114C246.117 67.8151 251.303 58.7045 249.516 49.1949C251.374 58.6933 246.235 67.8831 240.102 74.8372C213.493 102.188 175.411 113.987 138.837 121.556C115.667 125.954 91.9592 127.916 68.386 125.86C46.317 123.13 16.6288 119.577 8.84815 94.8843C8.84815 94.8843 8.84815 94.8843 8.84815 94.8843C7.03812 69.0581 33.3586 54.8719 52.8916 44.2438C74.0712 33.692 96.8483 26.8291 120.019 22.4297C156.822 16.0688 196.579 13.09 231.359 28.7869C239.615 33.0094 247.764 39.6766 249.516 49.1949ZM249.516 49.1949"
                  fill="#E1AD41"
                  mask="url(#path-3-inside-2_148_8)"
                />
              </svg>
            </Box>
            <Typography
              sx={{
                color: "#0B0B0B",
                fontFamily: "Calypso",
                fontSize: "30px",
                lineHeight: "100%",
                textAlign: "center",
                marginTop: "74px",
                maxWidth: "220px",
                textTransform: "uppercase",
              }}
            >
              Сказочный мир
            </Typography>
          </Box>
          <Box sx={{ width: "216px" }}>
            <Typography
              sx={{
                color: "#111111",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "100%",
                textAlign: "left",
                marginTop: "32px",
              }}
            >
              Место, где можно:
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                gap: "8px",
              }}
            >
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488951 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32653 3.81441 7.62394 8.59633 11.9999 8.87626L12.0244 8.12296C8.44713 8.04147 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.628 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87705C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                  fill="#E1AD41"
                />
              </svg>

              <Typography
                sx={{
                  color: "#111111",
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  lineHeight: "100%",
                  textAlign: "left",
                  fontStyle: "italic",
                }}
              >
                отвлечься от повседневности
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                gap: "8px",
              }}
            >
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488951 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32653 3.81441 7.62394 8.59633 11.9999 8.87626L12.0244 8.12296C8.44713 8.04147 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.628 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87705C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                  fill="#E1AD41"
                />
              </svg>

              <Typography
                sx={{
                  color: "#111111",
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  lineHeight: "100%",
                  textAlign: "left",
                  fontStyle: "italic",
                }}
              >
                поверить в хорошее
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                gap: "8px",
              }}
            >
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488951 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32653 3.81441 7.62394 8.59633 11.9999 8.87626L12.0244 8.12296C8.44713 8.04147 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.628 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87705C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                  fill="#E1AD41"
                />
              </svg>

              <Typography
                sx={{
                  color: "#111111",
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  lineHeight: "100%",
                  textAlign: "left",
                  fontStyle: "italic",
                }}
              >
                сделать добрые дела
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                gap: "8px",
              }}
            >
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488951 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32653 3.81441 7.62394 8.59633 11.9999 8.87626L12.0244 8.12296C8.44713 8.04147 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.628 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87705C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                  fill="#E1AD41"
                />
              </svg>

              <Typography
                sx={{
                  color: "#111111",
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  lineHeight: "100%",
                  textAlign: "left",
                  fontStyle: "italic",
                }}
              >
                и почувствовать, что...
              </Typography>
            </Box>
          </Box>
          <Typography
            sx={{
              color: "#0B0B0B",
              fontFamily: "Calypso",
              fontSize: "16px",
              lineHeight: "100%",
              textAlign: "center",
              marginTop: "22px",
              maxWidth: "186px",
              textTransform: "uppercase",
            }}
          >
            самые настоящие чудеса создаём мы сами
          </Typography>
          <Box sx={{ display: "flex", gap: "164px" }}>
            <svg
              width="30"
              height="39"
              viewBox="0 0 30 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.0251 17C22.992 16.2269 23.0114 15.4528 23.1008 14.6794C23.3146 11.6636 25.4479 8.04146 29.0251 8.12295L29.0007 8.87625C24.6247 8.59632 22.3273 3.81441 22.5251 -1.42652e-06L23.5251 -1.3391e-06C23.5251 -1.3391e-06 23.5251 -1.3391e-06 23.5251 -1.3391e-06C23.723 3.81441 21.4256 8.59633 17.0496 8.87626L17.0251 8.12296C20.6024 8.04147 22.7357 11.6636 22.9495 14.6794C23.0389 15.4528 23.0583 16.2269 23.0251 17C22.9917 16.2269 22.9087 15.4617 22.7618 14.7085C22.2863 11.7115 20.1149 8.65342 17.0251 8.87705L17.0007 8.12375C20.7406 7.70293 22.6761 3.628 22.5251 -1.42652e-06C22.5251 -1.42652e-06 22.5251 -1.42652e-06 22.5251 -1.42652e-06L23.5251 -1.3391e-06C23.3742 3.628 25.3097 7.70293 29.0496 8.12375L29.0251 8.87705C25.9354 8.65341 23.764 11.7115 23.2885 14.7085C23.1416 15.4617 23.0586 16.2269 23.0251 17ZM23.0251 17"
                fill="#E1AD41"
              />
              <path
                d="M10.0251 39C9.99209 37.6928 10.0443 36.386 10.2087 35.0854C10.6482 30.0153 14.1072 23.957 20.0251 24.1229L20.0001 24.8762C12.7896 24.2945 9.23142 16.355 9.52515 10C9.52515 10 9.52515 10 9.52515 10L10.5251 10C10.8189 16.355 7.26069 24.2945 0.0502009 24.8762L0.0251478 24.123C5.94312 23.957 9.40214 30.0153 9.84163 35.0854C10.006 36.386 10.0582 37.6928 10.0251 39C9.99156 37.6928 9.87588 36.3946 9.65373 35.1135C8.95686 30.0574 5.43302 24.5609 0.0251477 24.8771L9.46116e-05 24.1238C6.54762 23.4153 9.77772 16.1802 9.52515 10L10.5251 10C10.5251 10 10.5251 10 10.5251 10C10.2726 16.1802 13.5027 23.4153 20.0502 24.1238L20.0251 24.877C14.6173 24.5609 11.0934 30.0574 10.3966 35.1135C10.1744 36.3946 10.0587 37.6928 10.0251 39ZM10.0251 39"
                fill="#E1AD41"
              />
            </svg>
            <svg
              width="30"
              height="39"
              viewBox="0 0 30 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.0251 17C22.992 16.2269 23.0114 15.4528 23.1008 14.6794C23.3146 11.6636 25.4479 8.04146 29.0251 8.12295L29.0007 8.87625C24.6247 8.59632 22.3273 3.81441 22.5251 -1.42652e-06L23.5251 -1.3391e-06C23.5251 -1.3391e-06 23.5251 -1.3391e-06 23.5251 -1.3391e-06C23.723 3.81441 21.4256 8.59633 17.0496 8.87626L17.0251 8.12296C20.6024 8.04147 22.7357 11.6636 22.9495 14.6794C23.0389 15.4528 23.0583 16.2269 23.0251 17C22.9917 16.2269 22.9087 15.4617 22.7618 14.7085C22.2863 11.7115 20.1149 8.65342 17.0251 8.87705L17.0007 8.12375C20.7406 7.70293 22.6761 3.628 22.5251 -1.42652e-06C22.5251 -1.42652e-06 22.5251 -1.42652e-06 22.5251 -1.42652e-06L23.5251 -1.3391e-06C23.3742 3.628 25.3097 7.70293 29.0496 8.12375L29.0251 8.87705C25.9354 8.65341 23.764 11.7115 23.2885 14.7085C23.1416 15.4617 23.0586 16.2269 23.0251 17ZM23.0251 17"
                fill="#E1AD41"
              />
              <path
                d="M10.0251 39C9.99209 37.6928 10.0443 36.386 10.2087 35.0854C10.6482 30.0153 14.1072 23.957 20.0251 24.1229L20.0001 24.8762C12.7896 24.2945 9.23142 16.355 9.52515 10C9.52515 10 9.52515 10 9.52515 10L10.5251 10C10.8189 16.355 7.26069 24.2945 0.0502009 24.8762L0.0251478 24.123C5.94312 23.957 9.40214 30.0153 9.84163 35.0854C10.006 36.386 10.0582 37.6928 10.0251 39C9.99156 37.6928 9.87588 36.3946 9.65373 35.1135C8.95686 30.0574 5.43302 24.5609 0.0251477 24.8771L9.46116e-05 24.1238C6.54762 23.4153 9.77772 16.1802 9.52515 10L10.5251 10C10.5251 10 10.5251 10 10.5251 10C10.2726 16.1802 13.5027 23.4153 20.0502 24.1238L20.0251 24.877C14.6173 24.5609 11.0934 30.0574 10.3966 35.1135C10.1744 36.3946 10.0587 37.6928 10.0251 39ZM10.0251 39"
                fill="#E1AD41"
              />
            </svg>
          </Box>
        </Box>
      </Box>
      {/* кому помогаем */}
      <Box sx={{ width: "340px", marginX: "auto" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography
              sx={{
                color: "#0B0B0B",
                fontFamily: "Calypso",
                fontSize: "30px",
                lineHeight: "100%",
                textAlign: "left",
                marginTop: "50px",
                maxWidth: "185px",
                textTransform: "uppercase",
              }}
            >
              Кому мы помогаем
            </Typography>
            <Typography
              sx={{
                color: "#111111",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "100%",
                textAlign: "left",
                marginTop: "20px",
                maxWidth: "165px",
              }}
            >
              В этом году PawsUp проходит в поддержку Учреждения помощи животным
              «Мурзики».
            </Typography>
            <Typography
              sx={{
                color: "#111111",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "100%",
                textAlign: "left",
                marginTop: "6px",
                fontStyle: "italic",
              }}
            >
              «Мурзикам» уже 6 лет.
            </Typography>
          </Box>
          <Box sx={{ marginTop: "54px" }}>
            <img
              src="images/home/murziki.webp"
              alt="murziki"
              width="142px"
              height="152px"
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: "#111111",
              fontFamily: "Montserrat",
              fontSize: "12px",
              lineHeight: "100%",
              textAlign: "center",
              marginTop: "20px",
              maxWidth: "176px",
            }}
          >
            Все начиналось
            <br />с обычного волонтерства
          </Typography>
          <img
            src="images/home/pet_arrow.webp"
            alt="arrow"
            width="208px"
            height="59px"
          />
          <Typography
            sx={{
              color: "#111111",
              fontFamily: "Montserrat",
              fontSize: "12px",
              lineHeight: "100%",
              textAlign: "center",
              maxWidth: "340px",
              span: {
                fontWeight: "700",
              },
            }}
          >
            Постепенно команда брала на себя все больше ответственности, а
            последние 4 года{" "}
            <span>полностью опекает пункт содержания животных</span> и работает
            <br />с ним по договору с ЖКХ
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "#111111",
            fontFamily: "Montserrat",
            fontSize: "18px",
            lineHeight: "100%",
            textAlign: "center",
            maxWidth: "310px",
            marginTop: "40px",
            marginX: "auto",
          }}
        >
          Сегодня на пункте находится около 250 животных
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "10px",
          }}
        >
          <Box
            sx={{
              background: "url(/images/home/paper.webp)",
              filter: "drop-shadow(3px 3px 2.8px rgba(0, 0, 0, 0.1))",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "96px",
              height: "28px",
              color: "#E1AD41",
              fontFamily: "Montserrat",
              fontSize: "12px",
              lineHeight: "14px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            ≈ 200 собак
          </Box>
          <Box
            sx={{
              background: "url(/images/home/paper.webp)",
              filter: "drop-shadow(3px 3px 2.8px rgba(0, 0, 0, 0.1))",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "84px",
              height: "28px",
              color: "#E1AD41",
              fontFamily: "Montserrat",
              fontSize: "12px",
              lineHeight: "14px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            ≈ 50 котов
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          overflow: "hidden",
          marginTop: "30px",
          width: "100%",
          position: "relative",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "60px",
            zIndex: 2,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            width: "fit-content",
            animation: `scroll 20s linear infinite `,
            "@keyframes scroll": {
              "0%": { transform: "translateX(0)" },
              "100%": { transform: `translateX(-${100 / 2}%)` },
            },
          }}
        >
          {colapsePets.map((pet, i) => (
            <Box
              sx={{
                width: "180px",
                height: "200px",
                padding: "10px",
                backgroundColor: "#C8D399",
                borderRadius: "10px",
              }}
            >
              <Box
                key={i}
                component="img"
                src={`/images/home/pets/${pet.image}.webp`}
                sx={{
                  height: "158px",
                  width: "auto",
                  flexShrink: 0,
                  mx: 1,
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
              <Typography
                sx={{
                  color: "#111111",
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  fontStyle: "italic",
                  marginTop: "6px",
                }}
              >
                {pet.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ width: "340px", marginX: "auto" }}>
        <Typography
          sx={{
            color: "#111111",
            fontFamily: "Montserrat",
            fontSize: "10px",
            fontStyle: "italic",
            lineHeight: "100%",
            textAlign: "center",
            marginTop: "10px",
            marginX: "auto",
          }}
        >
          * Но на самом деле под опекой команды их ещё больше!
        </Typography>
        <Typography
          sx={{
            color: "#111111",
            fontFamily: "Montserrat",
            fontSize: "12px",
            lineHeight: "100%",
            marginTop: "30px",
          }}
        >
          Волонтеры помогают животным по всему Барановичскому району и в
          близлежащих населенных пунктах: выезжают по обращениям, помогают
          бездомным кошкам и собакам, организуют стерилизацию и кастрацию,
          спасают животных, которым требуется лечение.
        </Typography>
        <Typography
          sx={{
            color: "#111111",
            fontFamily: "Montserrat",
            fontSize: "12px",
            lineHeight: "100%",
            textAlign: "left",
            marginTop: "10px",
            maxWidth: "294px",
            span: {
              fontWeight: "700",
            },
          }}
        >
          И все это возможно <span>благодаря людям, которым не все равно.</span>
        </Typography>
      </Box>
      {/* Как помогает фестиваль */}
      <Box sx={{ width: "340px", marginX: "auto" }}>
        <Typography
          sx={{
            color: "#0B0B0B",
            fontFamily: "Calypso",
            fontSize: "30px",
            lineHeight: "100%",
            textAlign: "left",
            marginTop: "50px",
            textTransform: "uppercase",
          }}
        >
          Как помогает фестиваль
        </Typography>
        <Box
          sx={{
            background: "url(/images/home/fest_paper.webp)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "340px",
            height: "130px",
            marginTop: "20px",
          }}
        >
          <Typography
            sx={{
              color: "#111111",
              fontFamily: "Montserrat",
              fontSize: "12px",
              lineHeight: "100%",
              textAlign: "left",
              paddingTop: "28px",
              marginLeft: "26px",
              maxWidth: "220px",
            }}
          >
            Каждый билет, донат и участие в благотворительных активностях
          </Typography>
          <Typography
            sx={{
              color: "#111111",
              fontFamily: "Montserrat",
              fontSize: "18px",
              lineHeight: "100%",
              textAlign: "left",
              marginTop: "6px",
              marginLeft: "26px",
              maxWidth: "220px",
            }}
          >
            становится реальной помощью животным
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "#111111",
            fontFamily: "Montserrat",
            fontSize: "18px",
            lineHeight: "120%",
            textAlign: "center",
            marginTop: "20px",
            maxWidth: "275px",
            marginX: "auto",
          }}
        >
          Собранные средства помогают оплачивать:
        </Typography>
        <Box sx={{ marginTop: "20px" }}>
          <Box sx={{ display: "flex", justifyContent: "center", gap: "24px" }}>
            <Box
              sx={{
                background: "url(/images/home/pet_paper.webp)",
                backgroundRepeat: "round",
                backgroundSize: "cover",
                width: "86px",
                height: "30px",
                color: "#111111",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "14px",
                fontStyle: "italic",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                span: {
                  paddingRight: "10px",
                  maxWidth: "36px",
                },
                position: "relative",
                svg: {
                  position: "absolute",
                  top: "-2px",
                  left: "10px",
                },
              }}
            >
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488951 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32653 3.81441 7.62394 8.59633 11.9999 8.87626L12.0244 8.12296C8.44713 8.04147 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.628 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87705C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                  fill="#E1AD41"
                />
              </svg>
              <span>Корм</span>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "42px",
              marginTop: "6px",
            }}
          >
            <Box
              sx={{
                background: "url(/images/home/pet_paper.webp)",
                backgroundRepeat: "round",
                backgroundSize: "cover",
                width: "136px",
                height: "43px",
                color: "#111111",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "14px",
                fontStyle: "italic",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                span: {
                  paddingRight: "10px",
                  maxWidth: "88px",
                },
                position: "relative",
                svg: {
                  position: "absolute",
                  top: "-2px",
                  left: "10px",
                },
              }}
            >
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488951 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32653 3.81441 7.62394 8.59633 11.9999 8.87626L12.0244 8.12296C8.44713 8.04147 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.628 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87705C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                  fill="#E1AD41"
                />
              </svg>
              <span>Содержание животных</span>
            </Box>
            <Box
              sx={{
                background: "url(/images/home/pet_paper.webp)",
                backgroundRepeat: "round",
                backgroundSize: "cover",
                width: "133px",
                height: "43px",
                color: "#111111",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "14px",
                fontStyle: "italic",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                span: {
                  paddingRight: "10px",
                  maxWidth: "82px",
                },
                position: "relative",
                svg: {
                  position: "absolute",
                  top: "-2px",
                  left: "10px",
                },
              }}
            >
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488951 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32653 3.81441 7.62394 8.59633 11.9999 8.87626L12.0244 8.12296C8.44713 8.04147 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.628 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87705C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                  fill="#E1AD41"
                />
              </svg>
              <span>Экстренную помощь</span>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              marginTop: "6px",
            }}
          >
            <Box
              sx={{
                background: "url(/images/home/pet_paper.webp)",
                backgroundRepeat: "round",
                backgroundSize: "cover",
                width: "155px",
                height: "43px",
                color: "#111111",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "14px",
                fontStyle: "italic",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                span: {
                  paddingRight: "10px",
                  maxWidth: "100px",
                },
                position: "relative",
                svg: {
                  position: "absolute",
                  top: "-2px",
                  left: "10px",
                },
              }}
            >
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488951 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32653 3.81441 7.62394 8.59633 11.9999 8.87626L12.0244 8.12296C8.44713 8.04147 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.628 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87705C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                  fill="#E1AD41"
                />
              </svg>
              <span>Лечение и медикаменты</span>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              marginTop: "6px",
            }}
          >
            <Box
              sx={{
                background: "url(/images/home/pet_paper.webp)",
                backgroundRepeat: "round",
                backgroundSize: "cover",
                width: "155px",
                height: "43px",
                color: "#111111",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "14px",
                fontStyle: "italic",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                span: {
                  paddingRight: "10px",
                  maxWidth: "100px",
                },
                position: "relative",
                svg: {
                  position: "absolute",
                  top: "-2px",
                  left: "10px",
                },
              }}
            >
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488951 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32653 3.81441 7.62394 8.59633 11.9999 8.87626L12.0244 8.12296C8.44713 8.04147 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.628 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87705C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                  fill="#E1AD41"
                />
              </svg>
              <span>Ветеринарную помощь</span>
            </Box>
            <Box
              sx={{
                background: "url(/images/home/pet_paper.webp)",
                backgroundRepeat: "round",
                backgroundSize: "cover",
                width: "149px",
                height: "43px",
                color: "#111111",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "14px",
                fontStyle: "italic",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                span: {
                  paddingRight: "10px",
                  maxWidth: "100px",
                },
                position: "relative",
                svg: {
                  position: "absolute",
                  top: "-2px",
                  left: "10px",
                },
              }}
            >
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488951 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32653 3.81441 7.62394 8.59633 11.9999 8.87626L12.0244 8.12296C8.44713 8.04147 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.628 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87705C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                  fill="#E1AD41"
                />
              </svg>
              <span>Стерилизацию и кастрацию</span>
            </Box>
          </Box>
        </Box>
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", top: "-52px", right: "4px" }}>
            <img src="images/home/flowRight.webp" alt="flower" />
          </Box>
          <Typography
            sx={{
              color: "#111111",
              fontFamily: "Montserrat",
              fontSize: "12px",
              lineHeight: "14px",
              textAlign: "center",
              maxWidth: "226px",
              marginX: "auto",
              marginTop: "76px",
            }}
          >
            Так обычный день на фестивале превращается во что-то большее
          </Typography>
          <Box sx={{ position: "absolute", bottom: "-52px", left: "4px" }}>
            <img src="images/home/flowLeft.webp" alt="flower" />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          background: "url(/images/home/pay_start.webp)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "36px",
          marginTop: "50px",
        }}
      ></Box>
      <Box
        sx={{
          background: "#FFEEAC",
          paddingBottom: "23px",
        }}
      >
        <Box
          sx={{
            width: "340px",
            marginX: "auto",
          }}
          id="help"
        >
          <Typography
            sx={{
              color: "#0B0B0B",
              fontFamily: "Calypso",
              fontSize: "30px",
              lineHeight: "100%",
              textAlign: "left",
              paddingTop: "30px",
              textTransform: "uppercase",
            }}
          >
            Помочь прямо сейчас
          </Typography>
          <Typography
            sx={{
              color: "#111111",
              fontFamily: "Montserrat",
              fontSize: "12px",
              lineHeight: "14px",
              textAlign: "left",
              marginY: "20px",
            }}
          >
            Даже если вы не сможете прийти на фестиваль,
            <br />
            стать частью доброй истории все равно можно!
          </Typography>
          <Typography
            sx={{
              color: "#111111",
              fontFamily: "Montserrat",
              fontSize: "18px",
              lineHeight: "120%",
              textAlign: "left",
            }}
          >
            Поддержать «Мурзиков»:
          </Typography>
          <Box
            sx={{
              background: "#FFFBF4",
              borderRadius: "10px",
              paddingLeft: "15px",
              paddingRight: "16px",
              paddingBottom: "20px",
              marginTop: "20px",
              position: "relative",
            }}
          >
            <Box sx={{ position: "absolute", right: "10px", top: "-30px" }}>
              <img src="/images/home/star_pay.webp" alt="star" />
            </Box>
            <Box sx={{ position: "absolute", left: "10px", top: "8px" }}>
              <svg
                width="13"
                height="17"
                viewBox="0 0 13 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488942 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32652 3.81441 7.62394 8.59632 11.9999 8.87625L12.0244 8.12296C8.44713 8.04146 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.62801 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87704C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                  fill="#E1AD41"
                />
              </svg>
            </Box>
            <Typography
              sx={{
                color: "#0B0B0B",
                fontFamily: "Calypso",
                fontSize: "30px",
                lineHeight: "100%",
                textAlign: "left",
                paddingTop: "30px",
                paddingLeft: "10px",
                textTransform: "uppercase",
              }}
            >
              Через ерип
            </Typography>
            <Box
              sx={{
                marginTop: "20px",
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <Box>
                <svg
                  width="8"
                  height="128"
                  viewBox="0 0 8 128"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.71404 23.9226C7.9636 23.8044 8.07008 23.5062 7.95187 23.2567L6.02548 19.1898C5.90727 18.9403 5.60913 18.8338 5.35957 18.952C5.11001 19.0702 5.00353 19.3684 5.12174 19.6179L6.83409 23.2329L3.21914 24.9452C2.96958 25.0634 2.8631 25.3616 2.98131 25.6111C3.09952 25.8607 3.39766 25.9672 3.64722 25.849L7.71404 23.9226ZM7.5 0.470703C7.33183 -0.000167884 7.33154 -6.44996e-05 7.33123 4.86002e-05C7.33109 9.91449e-05 7.33074 0.000222288 7.33046 0.000323676C7.3299 0.0005266 7.32923 0.000768714 7.32845 0.00105026C7.32689 0.00161331 7.32491 0.00233408 7.32252 0.0032145C7.31772 0.00497531 7.31126 0.00737499 7.30318 0.0104292C7.28701 0.0165371 7.26437 0.0252651 7.23569 0.0367381C7.17833 0.059681 7.09676 0.0936228 6.99442 0.139568C6.78983 0.231425 6.5018 0.371477 6.15818 0.567831C5.47153 0.9602 4.55891 1.57969 3.64645 2.49215C1.81297 4.32562 1.77261e-07 7.32421 4.50993e-07 11.9707L0.5 11.9707L1 11.9707C1 7.61719 2.68703 4.86578 4.35355 3.19926C5.19109 2.36172 6.02847 1.79371 6.65432 1.43607C6.96695 1.25743 7.22579 1.13186 7.40401 1.05184C7.49309 1.01185 7.5619 0.983288 7.60708 0.965215C7.62967 0.95618 7.64634 0.949771 7.65666 0.94587C7.66182 0.943919 7.6654 0.942595 7.66734 0.941884C7.6683 0.941529 7.66886 0.941326 7.669 0.941275C7.66907 0.94125 7.66904 0.941262 7.6689 0.941312C7.66883 0.941337 7.66865 0.941403 7.66861 0.941415C7.6684 0.94149 7.66817 0.941574 7.5 0.470703ZM0.5 11.9707L4.50993e-07 11.9707C7.24726e-07 16.6172 1.81297 19.6158 3.64645 21.4493C4.55891 22.3617 5.47153 22.9812 6.15818 23.3736C6.5018 23.5699 6.78983 23.71 6.99442 23.8018C7.09676 23.8478 7.17833 23.8817 7.23569 23.9047C7.26437 23.9161 7.28701 23.9249 7.30318 23.931C7.31126 23.934 7.31772 23.9364 7.32252 23.9382C7.32491 23.9391 7.32689 23.9398 7.32845 23.9404C7.32922 23.9406 7.3299 23.9409 7.33046 23.9411C7.33074 23.9412 7.33108 23.9413 7.33123 23.9414C7.33154 23.9415 7.33183 23.9416 7.5 23.4707C7.66817 22.9998 7.6684 22.9999 7.66861 23C7.66865 23 7.66883 23.0001 7.6689 23.0001C7.66904 23.0001 7.66907 23.0002 7.669 23.0001C7.66886 23.0001 7.6683 22.9999 7.66733 22.9995C7.6654 22.9988 7.66182 22.9975 7.65666 22.9955C7.64634 22.9916 7.62967 22.9852 7.60708 22.9762C7.5619 22.9581 7.49309 22.9296 7.40401 22.8896C7.22579 22.8096 6.96695 22.684 6.65432 22.5053C6.02846 22.1477 5.19109 21.5797 4.35355 20.7421C2.68703 19.0756 1 16.3242 1 11.9707L0.5 11.9707Z"
                    fill="#E1AD41"
                  />
                  <path
                    d="M7.71404 57.9226C7.9636 57.8044 8.07008 57.5062 7.95187 57.2567L6.02548 53.1898C5.90727 52.9403 5.60913 52.8338 5.35957 52.952C5.11001 53.0702 5.00353 53.3684 5.12174 53.6179L6.83409 57.2329L3.21914 58.9452C2.96958 59.0634 2.8631 59.3616 2.98131 59.6111C3.09952 59.8607 3.39766 59.9672 3.64722 59.849L7.71404 57.9226ZM7.5 34.4707C7.33183 33.9998 7.33154 33.9999 7.33123 34C7.33109 34.0001 7.33074 34.0002 7.33046 34.0003C7.3299 34.0005 7.32923 34.0008 7.32845 34.0011C7.32689 34.0016 7.32491 34.0023 7.32252 34.0032C7.31772 34.005 7.31126 34.0074 7.30318 34.0104C7.28701 34.0165 7.26437 34.0253 7.23569 34.0367C7.17833 34.0597 7.09676 34.0936 6.99442 34.1396C6.78983 34.2314 6.5018 34.3715 6.15818 34.5678C5.47153 34.9602 4.55891 35.5797 3.64645 36.4921C1.81297 38.3256 1.77261e-07 41.3242 4.50993e-07 45.9707L0.5 45.9707L1 45.9707C1 41.6172 2.68703 38.8658 4.35355 37.1993C5.19109 36.3617 6.02847 35.7937 6.65432 35.4361C6.96695 35.2574 7.22579 35.1319 7.40401 35.0518C7.49309 35.0118 7.5619 34.9833 7.60708 34.9652C7.62967 34.9562 7.64634 34.9498 7.65666 34.9459C7.66182 34.9439 7.6654 34.9426 7.66734 34.9419C7.6683 34.9415 7.66886 34.9413 7.669 34.9413C7.66907 34.9412 7.66904 34.9413 7.6689 34.9413C7.66883 34.9413 7.66865 34.9414 7.66861 34.9414C7.6684 34.9415 7.66817 34.9416 7.5 34.4707ZM0.5 45.9707L4.50993e-07 45.9707C7.24726e-07 50.6172 1.81297 53.6158 3.64645 55.4493C4.55891 56.3617 5.47153 56.9812 6.15818 57.3736C6.5018 57.5699 6.78983 57.71 6.99442 57.8018C7.09676 57.8478 7.17833 57.8817 7.23569 57.9047C7.26437 57.9161 7.28701 57.9249 7.30318 57.931C7.31126 57.934 7.31772 57.9364 7.32252 57.9382C7.32491 57.9391 7.32689 57.9398 7.32845 57.9404C7.32922 57.9406 7.3299 57.9409 7.33046 57.9411C7.33074 57.9412 7.33108 57.9413 7.33123 57.9414C7.33154 57.9415 7.33183 57.9416 7.5 57.4707C7.66817 56.9998 7.6684 56.9999 7.66861 57C7.66865 57 7.66883 57.0001 7.6689 57.0001C7.66904 57.0001 7.66907 57.0002 7.669 57.0001C7.66886 57.0001 7.6683 56.9999 7.66733 56.9995C7.6654 56.9988 7.66182 56.9975 7.65666 56.9955C7.64634 56.9916 7.62967 56.9852 7.60708 56.9762C7.5619 56.9581 7.49309 56.9296 7.40401 56.8896C7.22579 56.8096 6.96695 56.684 6.65432 56.5053C6.02846 56.1477 5.19109 55.5797 4.35355 54.7421C2.68703 53.0756 1 50.3242 1 45.9707L0.5 45.9707Z"
                    fill="#E1AD41"
                  />
                  <path
                    d="M7.71404 91.9226C7.9636 91.8044 8.07008 91.5062 7.95187 91.2567L6.02548 87.1898C5.90727 86.9403 5.60913 86.8338 5.35957 86.952C5.11001 87.0702 5.00353 87.3684 5.12174 87.6179L6.83409 91.2329L3.21914 92.9452C2.96958 93.0634 2.8631 93.3616 2.98131 93.6111C3.09952 93.8607 3.39766 93.9672 3.64722 93.849L7.71404 91.9226ZM7.5 68.4707C7.33183 67.9998 7.33154 67.9999 7.33123 68C7.33109 68.0001 7.33074 68.0002 7.33046 68.0003C7.3299 68.0005 7.32923 68.0008 7.32845 68.0011C7.32689 68.0016 7.32491 68.0023 7.32252 68.0032C7.31772 68.005 7.31126 68.0074 7.30318 68.0104C7.28701 68.0165 7.26437 68.0253 7.23569 68.0367C7.17833 68.0597 7.09676 68.0936 6.99442 68.1396C6.78983 68.2314 6.5018 68.3715 6.15818 68.5678C5.47153 68.9602 4.55891 69.5797 3.64645 70.4921C1.81297 72.3256 1.77261e-07 75.3242 4.50993e-07 79.9707L0.5 79.9707L1 79.9707C1 75.6172 2.68703 72.8658 4.35355 71.1993C5.19109 70.3617 6.02847 69.7937 6.65432 69.4361C6.96695 69.2574 7.22579 69.1319 7.40401 69.0518C7.49309 69.0118 7.5619 68.9833 7.60708 68.9652C7.62967 68.9562 7.64634 68.9498 7.65666 68.9459C7.66182 68.9439 7.6654 68.9426 7.66734 68.9419C7.6683 68.9415 7.66886 68.9413 7.669 68.9413C7.66907 68.9412 7.66904 68.9413 7.6689 68.9413C7.66883 68.9413 7.66865 68.9414 7.66861 68.9414C7.6684 68.9415 7.66817 68.9416 7.5 68.4707ZM0.5 79.9707L4.50993e-07 79.9707C7.24726e-07 84.6172 1.81297 87.6158 3.64645 89.4493C4.55891 90.3617 5.47153 90.9812 6.15818 91.3736C6.5018 91.5699 6.78983 91.71 6.99442 91.8018C7.09676 91.8478 7.17833 91.8817 7.23569 91.9047C7.26437 91.9161 7.28701 91.9249 7.30318 91.931C7.31126 91.934 7.31772 91.9364 7.32252 91.9382C7.32491 91.9391 7.32689 91.9398 7.32845 91.9404C7.32922 91.9406 7.3299 91.9409 7.33046 91.9411C7.33074 91.9412 7.33108 91.9413 7.33123 91.9414C7.33154 91.9415 7.33183 91.9416 7.5 91.4707C7.66817 90.9998 7.6684 90.9999 7.66861 91C7.66865 91 7.66883 91.0001 7.6689 91.0001C7.66904 91.0001 7.66907 91.0002 7.669 91.0001C7.66886 91.0001 7.6683 90.9999 7.66733 90.9995C7.6654 90.9988 7.66182 90.9975 7.65666 90.9955C7.64634 90.9916 7.62967 90.9852 7.60708 90.9762C7.5619 90.9581 7.49309 90.9296 7.40401 90.8896C7.22579 90.8096 6.96695 90.684 6.65432 90.5053C6.02846 90.1477 5.19109 89.5797 4.35355 88.7421C2.68703 87.0756 1 84.3242 1 79.9707L0.5 79.9707Z"
                    fill="#E1AD41"
                  />
                  <path
                    d="M7.71404 125.923C7.9636 125.804 8.07008 125.506 7.95187 125.257L6.02548 121.19C5.90727 120.94 5.60913 120.834 5.35957 120.952C5.11001 121.07 5.00353 121.368 5.12174 121.618L6.83409 125.233L3.21914 126.945C2.96958 127.063 2.8631 127.362 2.98131 127.611C3.09952 127.861 3.39766 127.967 3.64722 127.849L7.71404 125.923ZM7.5 102.471C7.33183 102 7.33154 102 7.33123 102C7.33109 102 7.33074 102 7.33046 102C7.3299 102.001 7.32923 102.001 7.32845 102.001C7.32689 102.002 7.32491 102.002 7.32252 102.003C7.31772 102.005 7.31126 102.007 7.30318 102.01C7.28701 102.017 7.26437 102.025 7.23569 102.037C7.17833 102.06 7.09676 102.094 6.99442 102.14C6.78983 102.231 6.5018 102.371 6.15818 102.568C5.47153 102.96 4.55891 103.58 3.64645 104.492C1.81297 106.326 1.77261e-07 109.324 4.50993e-07 113.971L0.5 113.971L1 113.971C1 109.617 2.68703 106.866 4.35355 105.199C5.19109 104.362 6.02847 103.794 6.65432 103.436C6.96695 103.257 7.22579 103.132 7.40401 103.052C7.49309 103.012 7.5619 102.983 7.60708 102.965C7.62967 102.956 7.64634 102.95 7.65666 102.946C7.66182 102.944 7.6654 102.943 7.66734 102.942C7.6683 102.942 7.66886 102.941 7.669 102.941C7.66907 102.941 7.66904 102.941 7.6689 102.941C7.66883 102.941 7.66865 102.941 7.66861 102.941C7.6684 102.941 7.66817 102.942 7.5 102.471ZM0.5 113.971L4.50993e-07 113.971C7.24726e-07 118.617 1.81297 121.616 3.64645 123.449C4.55891 124.362 5.47153 124.981 6.15818 125.374C6.5018 125.57 6.78983 125.71 6.99442 125.802C7.09676 125.848 7.17833 125.882 7.23569 125.905C7.26437 125.916 7.28701 125.925 7.30318 125.931C7.31126 125.934 7.31772 125.936 7.32252 125.938C7.32491 125.939 7.32689 125.94 7.32845 125.94C7.32922 125.941 7.3299 125.941 7.33046 125.941C7.33074 125.941 7.33108 125.941 7.33123 125.941C7.33154 125.941 7.33183 125.942 7.5 125.471C7.66817 125 7.6684 125 7.66861 125C7.66865 125 7.66883 125 7.6689 125C7.66904 125 7.66907 125 7.669 125C7.66886 125 7.6683 125 7.66733 125C7.6654 124.999 7.66182 124.997 7.65666 124.996C7.64634 124.992 7.62967 124.985 7.60708 124.976C7.5619 124.958 7.49309 124.93 7.40401 124.89C7.22579 124.81 6.96695 124.684 6.65432 124.505C6.02846 124.148 5.19109 123.58 4.35355 122.742C2.68703 121.076 1 118.324 1 113.971L0.5 113.971Z"
                    fill="#E1AD41"
                  />
                </svg>
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#111111",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    lineHeight: "14px",
                    textAlign: "left",
                  }}
                >
                  Банковские, финансовые услуги
                </Typography>
                <Typography
                  sx={{
                    color: "#111111",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    lineHeight: "14px",
                    textAlign: "left",
                    marginTop: "20px",
                  }}
                >
                  Банки, НКФО
                </Typography>
                <Typography
                  sx={{
                    color: "#111111",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    lineHeight: "14px",
                    textAlign: "left",
                    marginTop: "20px",
                  }}
                >
                  Альфа-Банк
                </Typography>
                <Typography
                  sx={{
                    color: "#111111",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    lineHeight: "14px",
                    textAlign: "left",
                    marginTop: "20px",
                  }}
                >
                  Пополнение счета
                </Typography>
                <Typography
                  sx={{
                    color: "#111111",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    lineHeight: "14px",
                    textAlign: "left",
                    marginTop: "20px",
                  }}
                >
                  Ввести номер телефона:
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  color: "#111111",
                  fontFamily: "Montserrat",
                  fontSize: "18px",
                  lineHeight: "120%",
                  textAlign: "left",
                  paddingLeft: "17px",
                }}
              >
                +375 33 300 99 19
              </Typography>
              <Box
                sx={{
                  color: "#111111",
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  lineHeight: "14px",
                  textAlign: "center",
                  background: "#FFEEAC",
                  borderRadius: "100px",
                  width: "128px",
                  height: "24px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  userSelect: "none",
                  transition:
                    "transform 0.15s ease, background-color 0.2s ease, box-shadow 0.15s ease",
                  "&:hover": {
                    background: "#FFE585",
                  },
                  "&:active": {
                    transform: "scale(0.92)",
                    background: "#FFE070",
                  },
                }}
                onClick={handleCopy}
              >
                {copied ? "Скопировано" : "Скопировать"}
              </Box>
            </Box>
            <Typography
              sx={{
                color: "#111111",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "14px",
                textAlign: "left",
                paddingLeft: "17px",
                fontStyle: "italic",
                marginTop: "24px",
              }}
            >
              Любая сумма становится частью ежедневной заботы о животных
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "url(/images/home/pay_end.webp)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "40px",
        }}
      ></Box>
      <Box sx={{ width: "340px", marginX: "auto" }}>
        <Box sx={{ position: "relative" }}>
          <Typography
            sx={{
              color: "#0B0B0B",
              fontFamily: "Calypso",
              fontSize: "29px",
              lineHeight: "100%",
              textAlign: "center",
              paddingTop: "30px",
              textTransform: "uppercase",
            }}
          >
            Давайте вместе создадим немного волшебства
          </Typography>
          <Box sx={{ position: "absolute", top: "24px", left: "8px" }}>
            <svg
              width="13"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488942 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32652 3.81441 7.62394 8.59632 11.9999 8.87625L12.0244 8.12296C8.44713 8.04146 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.62801 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87704C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                fill="#E1AD41"
              />
            </svg>
          </Box>
          <Box sx={{ position: "absolute", bottom: "-4px", right: "20px" }}>
            <svg
              width="13"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.02442 17C6.05755 16.2269 6.03812 15.4528 5.9488 14.6794C5.73497 11.6636 3.6017 8.04146 0.0244152 8.12295L0.0488942 8.87625C4.42489 8.59632 6.7223 3.81441 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.52441 -1.3391e-06 5.52441 -1.3391e-06 5.52441 -1.3391e-06C5.32652 3.81441 7.62394 8.59632 11.9999 8.87625L12.0244 8.12296C8.44713 8.04146 6.31386 11.6636 6.10003 14.6794C6.01071 15.4528 5.99128 16.2269 6.02442 17C6.05791 16.2269 6.14085 15.4617 6.28779 14.7085C6.76323 11.7115 8.93466 8.65342 12.0244 8.87705L12.0489 8.12375C8.30898 7.70293 6.37344 3.62801 6.52441 -1.42652e-06C6.52441 -1.42652e-06 6.52441 -1.42652e-06 6.52441 -1.42652e-06L5.52441 -1.3391e-06C5.67539 3.628 3.73985 7.70293 -6.46722e-05 8.12375L0.0244153 8.87704C3.11417 8.65341 5.2856 11.7115 5.76104 14.7085C5.90798 15.4617 5.99092 16.2269 6.02442 17ZM6.02442 17"
                fill="#E1AD41"
              />
            </svg>
          </Box>
        </Box>
        <Box
          sx={{
            background: "url(/images/home/footer_paper.webp)",
            backgroundRepeat: "round",
            backgroundSize: "cover",
            filter: "drop-shadow(-3px 3px 4.7px rgba(0, 0, 0, 0.1))",
            width: "298px",
            height: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginX: "auto",
            marginTop: "20px",
          }}
        >
          <Typography
            sx={{
              color: "#111111",
              fontFamily: "Montserrat",
              fontSize: "12px",
              lineHeight: "14px",
              textAlign: "center",
              maxWidth: "270px",
            }}
          >
            Приходите провести день с музыкой, творчеством, друзьями и теми, кто
            тоже верит, что добро может быть легким!
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#0B0B0B",
              fontFamily: "Calypso",
              fontSize: "29px",
              lineHeight: "100%",
              textAlign: "center",
              paddingTop: "30px",
            }}
          >
            PawsUp 2026
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <Box>
              <img src="/images/home/calendar2.webp" alt="calendar" />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#111111",
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  lineHeight: "14px",
                  fontWeight: "700",
                  textAlign: "left",
                }}
              >
                22 августа
              </Typography>
              <Typography
                sx={{
                  color: "#111111",
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  lineHeight: "14px",
                  textAlign: "left",
                  marginTop: "2px",
                }}
              >
                ЭХО двор
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "40px", alignItems: "center" }}>
            <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <Box>
                <img src="/images/home/threads.webp" alt="threads" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#111111",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    lineHeight: "14px",
                    fontWeight: "700",
                    textAlign: "left",
                  }}
                >
                  Threads
                </Typography>
                <Typography
                  sx={{
                    color: "#111111",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    lineHeight: "14px",
                    textAlign: "left",
                    marginTop: "2px",
                  }}
                >
                  @hey.pawsup
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
              <Box>
                <img src="/images/home/inst.webp" alt="inst" />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#111111",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    lineHeight: "14px",
                    fontWeight: "700",
                    textAlign: "left",
                  }}
                >
                  Instagram
                </Typography>
                <Typography
                  sx={{
                    color: "#111111",
                    fontFamily: "Montserrat",
                    fontSize: "12px",
                    lineHeight: "14px",
                    textAlign: "left",
                    marginTop: "2px",
                  }}
                >
                  @hey.pawsup
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: "url(/images/home/envelope.webp)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "391px",
        }}
      >
        <Box
          sx={{
            width: "340px",
            marginX: "auto",
            paddingTop: "168px",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              color: "#0B0B0B",
              fontFamily: "Calypso",
              fontSize: "25px",
              lineHeight: "100%",
              textAlign: "center",
              textTransform: "uppercase",
            }}
          >
            ведь самые настоящие чудеса создаём мы сами
          </Typography>

          <Box sx={{ position: "absolute", left: "7px", top: "213px" }}>
            <svg
              width="34"
              height="46"
              viewBox="0 0 34 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.278 45.0693C27.3128 44.259 27.2924 43.4477 27.1988 42.637C26.9746 39.476 24.7387 35.6795 20.9891 35.7649L21.0148 36.5545C25.6015 36.2611 28.0095 31.2489 27.8021 27.2508C27.8021 27.2508 27.8021 27.2508 27.8021 27.2508L26.7539 27.2508C26.5465 31.2489 28.9546 36.2611 33.5412 36.5545L33.5669 35.7649C29.8174 35.6795 27.5814 39.476 27.3573 42.637C27.2637 43.4477 27.2433 44.259 27.278 45.0693C27.3131 44.259 27.4001 43.4569 27.5541 42.6675C28.0524 39.5262 30.3284 36.3209 33.5669 36.5553L33.5926 35.7657C29.6726 35.3246 27.6438 31.0535 27.8021 27.2508L26.7539 27.2508C26.7539 27.2508 26.7539 27.2508 26.7539 27.2508C26.9122 31.0535 24.8835 35.3246 20.9635 35.7657L20.9891 36.5553C24.2277 36.3209 26.5036 39.5262 27.002 42.6675C27.156 43.4569 27.2429 44.259 27.278 45.0693ZM27.278 45.0693"
                fill="#E1AD41"
              />
              <path
                d="M10.5078 30.3965C10.5424 29.0264 10.4877 27.6567 10.3154 26.2934C9.85479 20.9792 6.22924 14.6292 0.0263296 14.8031L0.05259 15.5927C7.61023 14.983 11.3397 6.66119 11.0319 0.000233567L9.98372 0.000233659C9.67585 6.66119 13.4054 14.983 20.963 15.5927L20.9893 14.8032C14.7864 14.6293 11.1608 20.9792 10.7002 26.2934C10.5278 27.6567 10.4732 29.0264 10.5078 30.3965C10.543 29.0264 10.6642 27.6656 10.8971 26.3229C11.6275 21.0233 15.321 15.2622 20.9893 15.5936L21.0155 14.804C14.1528 14.0615 10.7671 6.47801 11.0319 0.000233567C11.0319 0.000233567 11.0319 0.000233567 11.0319 0.000233567L9.98372 0.000233659C10.2485 6.47801 6.86284 14.0615 7.11161e-05 14.804L0.0263297 15.5936C5.69458 15.2622 9.38807 21.0233 10.1185 26.3229C10.3513 27.6656 10.4726 29.0264 10.5078 30.3965ZM10.5078 30.3965"
                fill="#E1AD41"
              />
            </svg>
          </Box>
          <Box sx={{ position: "absolute", right: "16px", top: "150px" }}>
            <svg
              width="31"
              height="41"
              viewBox="0 0 31 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.31464 17.8184C6.34937 17.008 6.329 16.1967 6.23538 15.386C6.01126 12.225 3.77528 8.4285 0.0257589 8.51391L0.0514166 9.30348C4.6381 9.01008 7.04613 3.99793 6.83871 -0.000131103C6.83871 -0.000131103 6.83871 -0.00013301 6.83871 -0.00013301L5.79056 -0.000132919C5.58315 3.99793 7.99117 9.01008 12.5779 9.30349L12.6035 8.51392C8.854 8.4285 6.61802 12.225 6.39389 15.386C6.30027 16.1967 6.2799 17.008 6.31464 17.8184C6.34974 17.008 6.43668 16.206 6.59069 15.4165C7.08902 12.2752 9.365 9.06992 12.6035 9.30432L12.6292 8.51475C8.70919 8.07367 6.68046 3.80255 6.83871 -0.00013301L5.79056 -0.000132919C5.79056 -0.000132919 5.79056 -0.000131011 5.79056 -0.000131011C5.94881 3.80255 3.92008 8.07367 0.00010123 8.51475L0.025759 9.30432C3.26427 9.06992 5.54025 12.2752 6.03859 15.4165C6.1926 16.206 6.27953 17.008 6.31464 17.8184ZM6.31464 17.8184"
                fill="#E1AD41"
              />
              <path
                d="M19.9404 40.8769C19.9751 39.5068 19.9204 38.1371 19.7481 36.7738C19.2874 31.4597 15.6619 25.1097 9.45895 25.2836L9.48521 26.0732C17.0428 25.4634 20.7724 17.1417 20.4645 10.4807L19.4163 10.4807C19.1085 17.1417 22.838 25.4634 30.3956 26.0732L30.4219 25.2836C24.219 25.1097 20.5934 31.4597 20.1328 36.7738C19.9605 38.1371 19.9058 39.5068 19.9404 40.8769C19.9756 39.5069 20.0969 38.1461 20.3297 36.8034C21.0601 31.5038 24.7536 25.7426 30.4219 26.074L30.4481 25.2845C23.5854 24.5419 20.1997 16.9585 20.4645 10.4807C20.4645 10.4807 20.4645 10.4807 20.4645 10.4807L19.4163 10.4807C19.6811 16.9585 16.2955 24.5419 9.43269 25.2845L9.45895 26.074C15.1272 25.7426 18.8207 31.5038 19.5511 36.8034C19.784 38.1461 19.9052 39.5069 19.9404 40.8769ZM19.9404 40.8769"
                fill="#E1AD41"
              />
            </svg>
          </Box>
          <Box sx={{ position: "absolute", right: "30px", top: "245px" }}>
            <svg
              width="165"
              height="17"
              viewBox="0 0 165 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 7.39463C5.63177 6.80876 11.1766 6.25632 16.7256 5.73132C65.8792 1.33989 115.654 -2.49228 164.473 5.70525L164.582 4.66506C163.666 4.62443 162.681 4.58802 161.736 4.55869C133.588 4.03747 105.19 5.34726 77.773 12.1633L77.9162 12.9315C99.9885 10.6171 122.381 10.0504 144.459 12.8497C149.996 13.6063 155.53 14.6408 160.886 16.2193C155.55 14.5737 150.022 13.4723 144.487 12.6525C122.408 9.60153 99.9853 9.97017 77.8271 12.1532L77.9703 12.9214C105.282 6.31023 133.647 5.08519 161.703 5.60633C162.644 5.63554 163.625 5.67169 164.536 5.71189L164.645 4.67169C115.638 -3.54232 65.8042 0.591447 16.7057 5.53317C11.1622 6.12081 5.62412 6.73931 0 7.39463Z"
                fill="#E1AD41"
              />
            </svg>
          </Box>
        </Box>
      </Box>
    </Box>
  ) : (
    <Box sx={{ paddingTop: "50px" }}>
      <Box sx={{ display: "flex", gap: "30px", justifyContent: "center" }}>
        <img
          src="/images/home/desktop/logo.webp"
          alt="logo"
          width="auto"
          height="120px"
        ></img>
        <img
          src="/images/home/desktop/murziki.webp"
          alt="logo"
          width="auto"
          height="120px"
        ></img>
      </Box>
      <Box
        sx={{
          marginTop: "50px",
          maxWidth: "600px",
          marginX: "auto",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            color: "#0B0B0B",
            fontFamily: "Calypso",
            fontSize: "30px",
            lineHeight: "100%",
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Сказочный мир помещается
          <br />в вашем телефоне
        </Typography>
        <Box sx={{ position: "absolute", left: "0", top: "26px" }}>
          <svg
            width="34"
            height="46"
            viewBox="0 0 34 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5293 29C8.56249 27.7648 8.53013 26.5257 8.4133 25.2948C8.02716 20.6252 5.86682 14.2071 0.0292975 14.1229L0.058747 14.8759C7.02703 13.8395 9.13131 5.87254 9.02929 2.60673e-06C9.0293 -3.11532e-06 9.02929 6.99382e-07 9.02929 -1.20797e-06L8.0293 -1.12054e-06C7.92728 5.87254 10.0316 13.8395 16.9998 14.8759L17.0293 14.123C11.1918 14.2071 9.03143 20.6252 8.6453 25.2948C8.52846 26.5257 8.4961 27.7648 8.5293 29C8.56275 27.7648 8.65855 26.5326 8.83395 25.3173C9.43843 20.6414 11.8724 14.7314 17.0293 14.8771L17.0587 14.1241C10.9405 13.0861 8.92202 5.75436 9.0293 -1.20797e-06L8.0293 -1.12054e-06C8.0293 -1.12054e-06 8.0293 -1.12054e-06 8.0293 -1.12054e-06C8.13657 5.75436 6.11811 13.0861 -0.000151981 14.1241L0.0292975 14.877C5.18621 14.7314 7.62017 20.6414 8.22464 25.3173C8.40005 26.5326 8.49584 27.7648 8.5293 29ZM8.5293 29"
              fill="#E1AD41"
            />
            <path
              d="M27.0293 46C27.0624 45.2269 27.043 44.4528 26.9537 43.6794C26.7399 40.6636 24.6066 37.0415 21.0293 37.1229L21.0538 37.8762C25.4298 37.5963 27.7272 32.8144 27.5293 29L26.5293 29C26.5293 29 26.5293 29 26.5293 29C26.3314 32.8144 28.6288 37.5963 33.0048 37.8763L33.0293 37.123C29.452 37.0415 27.3187 40.6636 27.1049 43.6794C27.0156 44.4528 26.9962 45.2269 27.0293 46C27.0628 45.2269 27.1457 44.4617 27.2927 43.7085C27.7681 40.7115 29.9395 37.6534 33.0293 37.877L33.0538 37.1238C29.3139 36.7029 27.3783 32.628 27.5293 29C27.5293 29 27.5293 29 27.5293 29L26.5293 29C26.6803 32.628 24.7447 36.7029 21.0048 37.1237L21.0293 37.877C24.1191 37.6534 26.2905 40.7115 26.7659 43.7085C26.9129 44.4617 26.9958 45.2269 27.0293 46ZM27.0293 46"
              fill="#E1AD41"
            />
          </svg>
        </Box>
        <Box sx={{ position: "absolute", right: "0", top: "0" }}>
          <svg
            width="35"
            height="50"
            viewBox="0 0 35 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5293 50C8.56249 48.7648 8.53013 47.5257 8.4133 46.2948C8.02716 41.6252 5.86682 35.2071 0.0292975 35.1229L0.058747 35.8759C7.02703 34.8395 9.13131 26.8725 9.02929 21C9.0293 21 9.02929 21 9.02929 21L8.0293 21C7.92728 26.8725 10.0316 34.8395 16.9998 35.8759L17.0293 35.123C11.1918 35.2071 9.03143 41.6252 8.6453 46.2948C8.52846 47.5257 8.4961 48.7648 8.5293 50C8.56275 48.7648 8.65855 47.5326 8.83395 46.3173C9.43843 41.6414 11.8724 35.7314 17.0293 35.8771L17.0587 35.1241C10.9405 34.0861 8.92202 26.7544 9.0293 21L8.0293 21C8.0293 21 8.0293 21 8.0293 21C8.13657 26.7544 6.11811 34.0861 -0.000151981 35.1241L0.0292975 35.877C5.18621 35.7314 7.62017 41.6414 8.22464 46.3173C8.40005 47.5326 8.49584 48.7648 8.5293 50ZM8.5293 50"
              fill="#E1AD41"
            />
            <path
              d="M28.0293 17C28.0624 16.2269 28.043 15.4528 27.9537 14.6794C27.7399 11.6636 25.6066 8.04146 22.0293 8.12295L22.0538 8.87625C26.4298 8.59632 28.7272 3.81441 28.5293 -1.42652e-06L27.5293 -1.3391e-06C27.5293 -1.3391e-06 27.5293 -1.3391e-06 27.5293 -1.3391e-06C27.3314 3.81441 29.6288 8.59632 34.0048 8.87625L34.0293 8.12296C30.452 8.04146 28.3187 11.6636 28.1049 14.6794C28.0156 15.4528 27.9962 16.2269 28.0293 17C28.0628 16.2269 28.1457 15.4617 28.2927 14.7085C28.7681 11.7115 30.9395 8.65342 34.0293 8.87705L34.0538 8.12375C30.3139 7.70293 28.3783 3.62801 28.5293 -1.42652e-06C28.5293 -1.42652e-06 28.5293 -1.42652e-06 28.5293 -1.42652e-06L27.5293 -1.3391e-06C27.6803 3.628 25.7447 7.70293 22.0048 8.12375L22.0293 8.87704C25.1191 8.65341 27.2905 11.7115 27.7659 14.7085C27.9129 15.4617 27.9958 16.2269 28.0293 17ZM28.0293 17"
              fill="#E1AD41"
            />
          </svg>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-40px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <svg
            width="290"
            height="30"
            viewBox="0 0 290 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 13.2395C9.88665 12.128 19.6212 11.0796 29.3641 10.0834C115.633 1.73768 203.172 -5.46098 288.914 9.6625L289.023 8.67083C287.399 8.59527 285.656 8.5278 283.978 8.47329C234.571 7.51208 184.651 9.91369 136.66 22.374L136.804 23.1056C175.602 18.8942 214.996 17.9375 253.763 23.2213C263.482 24.646 273.185 26.5857 282.549 29.5167C273.205 26.522 263.508 24.5183 253.791 23.0334C215.022 17.5092 175.599 18.2766 136.714 22.3634L136.857 23.0951C184.744 10.8326 234.631 8.51166 283.945 9.47276C285.62 9.52714 287.358 9.59434 288.977 9.66946L289.086 8.67779C203.156 -6.4639 115.558 1.02429 29.3442 9.89443C19.6069 10.9504 9.87898 12.0618 0 13.2395Z"
              fill="#E1AD41"
            />
          </svg>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "430px",
          marginX: "auto",
          marginTop: "76px",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            color: "#111111",
            fontFamily: "Montserrat",
            fontSize: "14px",
            lineHeight: "14px",
            textAlign: "center",
          }}
        >
          Мы создали эту страницу специально для мобильных устройств. Так гулять
          по программе фестиваля будет удобнее прямо 22 августа.
        </Typography>
        <Typography
          sx={{
            color: "#111111",
            fontFamily: "Montserrat",
            fontSize: "14px",
            lineHeight: "14px",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          Отсканируйте QR-код телефоном, чтобы войти
        </Typography>
        <Box sx={{ position: "absolute", right: "-118px", bottom: "-106px" }}>
          <svg
            width="174"
            height="103"
            viewBox="0 0 174 103"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.7084 0.0983841L14.2086 0.109739L14.2313 1.10948L14.7311 1.09813L14.7198 0.598255L14.7084 0.0983841ZM133 76.9854L132.881 77.471L133 76.9854ZM0.00177842 101.443C-0.0214915 101.718 0.182706 101.96 0.457866 101.984L4.94186 102.363C5.21702 102.386 5.45895 102.182 5.48222 101.907C5.50549 101.632 5.30129 101.39 5.02613 101.366L1.04036 101.029L1.37743 97.0435C1.4007 96.7684 1.1965 96.5265 0.921339 96.5032C0.646179 96.4799 0.404253 96.6841 0.380983 96.9593L0.00177842 101.443ZM14.7198 0.598255L14.7311 1.09813C95.0649 -0.726668 144.339 23.2261 163.609 45.0652C168.424 50.5227 171.345 55.824 172.431 60.5344C173.515 65.2355 172.77 69.3287 170.283 72.4512C167.788 75.5842 163.477 77.8187 157.273 78.6564C151.07 79.4939 143.018 78.9278 133.119 76.4998L133 76.9854L132.881 77.471C142.857 79.918 151.041 80.5069 157.406 79.6474C163.77 78.7883 168.358 76.474 171.066 73.0742C173.782 69.6642 174.542 65.2409 173.406 60.3098C172.271 55.3881 169.245 49.9415 164.359 44.4035C144.821 22.2607 95.2053 -1.73012 14.7084 0.0983841L14.7198 0.598255ZM133 76.9854L133.119 76.4998C90.5406 66.056 59.5617 70.2863 38.0841 78.104C16.6105 85.9203 4.66736 97.3136 0.177497 101.103L0.5 101.485L0.822503 101.867C5.32216 98.0695 17.1411 86.7913 38.4262 79.0437C59.7073 71.2975 90.4836 67.0717 132.881 77.471L133 76.9854Z"
              fill="#E1AD41"
            />
          </svg>
        </Box>
      </Box>
      <Box sx={{ marginTop: "10px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            img: {
              filter:
                "drop-shadow(-2.27534px 2.27534px 3.5647px rgba(0, 0, 0, 0.1))",
            },
          }}
        >
          <img
            src="/images/home/desktop/qr.webp"
            alt="qr"
            width="291px"
            height="auto"
          ></img>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "50px",
          marginTop: "70px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <img src={"/images/home/calendar.webp"} alt="calendar" />
          <Box>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "100%",
                fontWeight: "700",
                textAlign: "left",
                color: "#111111",
              }}
            >
              22 августа
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "100%",
                fontWeight: "400",
                textAlign: "left",
                color: "#111111",
                marginTop: "2px",
              }}
            >
              12:00 - 22:00
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <img src={"/images/home/place.webp"} alt="calendar" />
          <Box>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "100%",
                fontWeight: "700",
                textAlign: "left",
                color: "#111111",
              }}
            >
              ЭХО двор
            </Typography>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "100%",
                fontWeight: "400",
                textAlign: "left",
                color: "#111111",
                marginTop: "2px",
              }}
            >
              Независимости 95к5
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <Box>
            <img src="/images/home/threads.webp" alt="threads" />
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#111111",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "14px",
                fontWeight: "700",
                textAlign: "left",
              }}
            >
              Threads
            </Typography>
            <Typography
              sx={{
                color: "#111111",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "14px",
                textAlign: "left",
                marginTop: "2px",
              }}
            >
              @hey.pawsup
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", gap: "6px", alignItems: "center" }}>
          <Box>
            <img src="/images/home/inst.webp" alt="inst" />
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#111111",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "14px",
                fontWeight: "700",
                textAlign: "left",
              }}
            >
              Instagram
            </Typography>
            <Typography
              sx={{
                color: "#111111",
                fontFamily: "Montserrat",
                fontSize: "12px",
                lineHeight: "14px",
                textAlign: "left",
                marginTop: "2px",
              }}
            >
              @hey.pawsup
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Typography
          sx={{
            color: "#111111",
            fontFamily: "Montserrat",
            fontSize: "11px",
            lineHeight: "14px",
            textAlign: "center",
            marginTop: "10px",
            maxWidth: "330px",
            fontStyle: "italic",
          }}
        >
          PawsUp — благотворительный фестиваль в поддержку учреждения помощи
          животным «Мурзики»
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
