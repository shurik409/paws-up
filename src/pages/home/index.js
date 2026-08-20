import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

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
                backgroundImage: "url(/images/home/price_back.png)",
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
      <AccordionDetails sx={{ px: "14px", pb: "10px", pt: 0 }}>
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

export function ImageCarousel({ count, isRight }) {
  const images = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  console.log(count);
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
            src={`/images/home/courusel${count}/${image}.png`}
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
        time: "11:30 – 13:00",
        name: "Фильм",
      },
      {
        time: "13:00 – 14:30",
        name: "Lampa Just Dance",
      },
      {
        time: "14:30 – 15:30",
        name: "BEAUTY показ",
      },
      {
        time: "15:40 - 16:10",
        name: "Dj Frukt",
      },
      {
        time: "16:20 - 17:00",
        name: "Znichka",
      },
    ],
    scene_2: [
      {
        time: "17:10 - 18:10",
        name: "Dj Bravo",
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
        name: "Вязание крючком для правшей",
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
        time: "18:00 – 20:00",
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
        time: "11:00 – 16:00",
        name: "Деревянные игры",
        description:
          "Попробуйте разные деревянные игры, испытайте ловкость, внимательность и смекалку. Можно играть с друзьями или присоединиться к игре на месте.",
        image: {
          src: "/images/home/activity/magic.png",
          size: { width: "152px", height: "172px" },
          position: {
            right: 0,
            bottom: "-106px",
          },
        },
      },
      {
        id: "ac2",
        time: "12:00 – 16:00",
        name: "Шахматы",
        description:
          "Сыграйте партию с друзьями или новым соперником и проверьте, кому сегодня улыбнётся удача. Подходите в любое время работы зоны.",
      },
      {
        id: "ac3",
        time: "12:00 – 17:00",
        name: "BEAUTYZONE POINT",
        description:
          "Познакомьтесь со специалистами и задайте вопросы о волосах и коже головы. Получите полезные рекомендации по уходу и узнайте больше о здоровье волос.",
        image: {
          src: "/images/home/activity/flags.png",
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
          src: "/images/home/activity/stars.png",
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
          src: "/images/home/activity/taro.png",
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

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Box
        sx={{
          // height: "1080px",
          backgroundImage: "url(/images/home/hero.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
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
            <img src={"/images/home/hero_headline.png"} alt="headline" />
          </Box>
        </Box>
        <Box sx={{ paddingX: "42px", marginTop: "26px" }}>
          <Box
            sx={{
              background: "url(/images/home/hero_desc.png)",
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
            <img src={"/images/home/calendar.png"} alt="calendar" />
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
            <img src={"/images/home/place.png"} alt="calendar" />
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
            }}
          >
            Смотреть программу
          </Box>
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
            }}
          >
            Помочь прямо сейчас
          </Box>
        </Box>
        <Box>
          <Box
            sx={{ position: "relative", marginTop: "26px", paddingLeft: "12%" }}
          >
            <Box
              sx={{
                width: "95px",
                height: "28px",
                background: "url(/images/home/paper.png)",
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
            sx={{ position: "relative", marginTop: "62px", paddingLeft: "49%" }}
          >
            <Box
              sx={{
                width: "81px",
                height: "28px",
                background: "url(/images/home/paper.png)",
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
            sx={{ position: "relative", marginTop: "12px", paddingLeft: "27%" }}
          >
            <Box
              sx={{
                width: "97px",
                height: "28px",
                background: "url(/images/home/paper.png)",
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
            sx={{ position: "relative", marginTop: "12px", paddingLeft: "60%" }}
          >
            <Box
              sx={{
                width: "106px",
                height: "28px",
                background: "url(/images/home/paper.png)",
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
          sx={{ marginTop: "32px", display: "flex", justifyContent: "center" }}
        >
          <Box
            sx={{
              width: "294px",
              height: "58px",
              background: "url(/images/home/big_paper.png)",
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
        <Box
          sx={{
            backgroundImage: "url(/images/home/hero_end.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "100%",
            height: "40px",
            zIndex: 1,
            marginTop: "30px",
          }}
        ></Box>
      </Box>
      <Box sx={{ marginTop: "96px" }}>
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
          Карта фестиваля
        </Typography>
        <Box
          sx={{
            position: "relative",
            marginX: "auto",
            zIndex: 1,
            marginTop: "20px",
          }}
        >
          <Box
            sx={{
              width: "335px",
              height: "250px",
              borderRadius: "20px",
              // background: "url(/images/home/map.png)",
              backgroundColor: "#F0E9DE",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              position: "relative",
              margin: "auto",
            }}
          >
            <Box
              sx={{
                width: "115px",
                height: "115px",
                background: "url(/images/home/star_map.png)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "absolute",
                top: "-50px",
                right: "0",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "40px",
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
            backgroundImage: "url(/images/home/scene_back.png)",
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
              backgroundImage: "url(/images/home/scene_clip.png)",
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
              backgroundImage: "url(/images/home/scene_star.png)",
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
            backgroundImage: "url(/images/home/scene_back.png)",
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
              backgroundImage: "url(/images/home/scene_clip.png)",
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
              backgroundImage: "url(/images/home/scene_star.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "144px",
              height: "376px",
              left: "16px",
              top: "12px",
            }}
          ></Box>
        </Box>
        <Box sx={{ marginTop: "40px" }}>
          <ImageCarousel count={1} isRight={false}></ImageCarousel>
        </Box>
        <Box sx={{ marginTop: "20px", marginBottom: "70px" }}>
          <ImageCarousel count={2} isRight={true}></ImageCarousel>
        </Box>
      </Box>
      <Box
        sx={{
          background: "url(/images/home/green_start.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "36px",
        }}
      ></Box>
      <Box sx={{ backgroundColor: "#C8D399", paddingX: "10px" }}>
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
          }}
        >
          Регистрация на мастер-классы
        </Box>
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
      <Box
        sx={{
          background: "url(/images/home/green_end.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "40px",
        }}
      ></Box>
      <Box sx={{ paddingX: "10px" }}>
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
          }}
        >
          Посмотреть лоты аукциона
        </Box>
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
      {/* кому помогаем */}
      <Box sx={{ paddingX: "10px" }}>
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
              src="images/home/murziki.png"
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
            Все начиналось с обычного волонтерства
          </Typography>
          <img
            src="images/home/pet_arrow.png"
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
            с ним по договору с ЖКХ
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
              background: "url(/images/home/paper.png)",
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
              background: "url(/images/home/paper.png)",
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
                  src={`/images/home/pets/${pet.image}.png`}
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
      <Box sx={{ paddingX: "10px" }}>
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
            background: "url(/images/home/fest_paper.png)",
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
                background: "url(/images/home/pet_paper.png)",
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
                background: "url(/images/home/pet_paper.png)",
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
                background: "url(/images/home/pet_paper.png)",
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
                background: "url(/images/home/pet_paper.png)",
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
                background: "url(/images/home/pet_paper.png)",
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
                background: "url(/images/home/pet_paper.png)",
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
            <img src="images/home/flowRight.png" alt="flower" />
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
            <img src="images/home/flowLeft.png" alt="flower" />
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginTop: "180px", paddingX: "10px" }}>
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
          Помочь прямо сейчас
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
