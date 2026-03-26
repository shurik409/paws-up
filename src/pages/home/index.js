import { Box, Typography } from "@mui/material";
import Body from "../../img/home/body.png";
import MainLogo from "../../img/home/main_logo.png";
import Participant from "../../img/home/participant.png";
import Singer from "../../img/home/singer.png";
import Activity1 from "../../img/home/activity1.png";
import Activity2 from "../../img/home/activity2.png";
import Activity3 from "../../img/home/activity3.png";
import Activity4 from "../../img/home/activity4.png";
import Activity5 from "../../img/home/activity5.png";
import DonatActivity1 from "../../img/home/donatActivity1.png";
import DonatActivity2 from "../../img/home/donatActivity2.png";
import Team from "../../img/home/team.png";
import Arrows from "../../img/home/arrows.png";
import Dog from "../../img/home/dog.png";

const Home = () => {
  const djInfo = [
    {
      time: "22:00 – 22:30",
      name: "DJ Krosh",
    },
    {
      time: "22:30 – 23:00",
      name: "Общее караоке",
    },
    {
      time: "23:00 – 00:00",
      name: "DJ Krosh",
    },
    {
      time: "00:00 – 00:30",
      name: "Сольное караоке — живые выступления",
    },
    {
      time: "00:30 – 01:30",
      name: "DJ Sion",
    },
    {
      time: "01:30 – 02:00",
      name: "Сольное караоке — живые выступления",
    },
    {
      time: "02:00 – 03:00",
      name: "DJ Sion",
    },
  ];
  const activityInfo = [
    {
      title: "Если бы я был песней...",
      description:
        "Плакат на стене, где каждый дописывает своё. Какой песней ты был бы и почему? Загляни, прочитай чужие ответы и оставь свой.",
      image: Activity1,
    },
    {
      title: "Сочиняем песню вместе",
      description:
        "Коллективное творчество в действии: первая строчка уже есть, дело за тобой. Дописывай следующую, передавай эстафету, и к концу вечера из ваших строк родится настоящая песня. Финальный аккорд: генерируем трек с помощью ИИ и слушаем всё вместе.",
      image: Activity2,
    },
    {
      title: "Переиграй пикетчика",
      description:
        "Называем слово, у тебя минута, чтобы вспомнить как можно больше строчек из песен, где оно встречается. Быстро, весело и неожиданно сложно. Каждый участник получает приз.",
      image: Activity3,
    },
    {
      title: "Бирпонг",
      description:
        "игра, где твоя задача попасть шариком для пинг-понга в стаканы соперника. Цель — выбить все стаканы противника!",
      image: Activity4,
    },
    {
      title: "Твистер",
      description:
        "Игра на ловкость и гибкость. Сможешь удержать равновесие на коврике с цветными кругами, выполняя команды ведущего и переставляя руки или ноги по цветам, не упав?",
      image: Activity5,
    },
  ];

  const donatActivity = [
    {
      title: "Фото с любимым артистом",
      description: (
        <>
          Мечтали сфотографироваться с кумиром?
          <br />
          Теперь это реально!
          <br />
          Выбирай шаблон (серьёзный или максимально угарный) и получай фото как
          с настоящей школьной фотосессии.
          <br />
          Free donat
        </>
      ),
      image: DonatActivity1,
      maxWidth: "810px",
    },
    {
      title: "Guitar Hero",
      description: (
        <>
          Рок-зал открыт! Играем в Rock Band 4 на PS4: 65 легендарных треков,
          гитара, барабаны и микрофон. Можно рубиться соло или втроём. <br />
          <span className="boldPart">5 рублей = 3 песни на одного игрока.</span>
          <br />
          Найдёшь нас в чилл-зоне
        </>
      ),
      image: DonatActivity2,
      maxWidth: "780px",
    },
  ];

  const pawsupInfo = [
    "Как можно помогать приютам и просто дворовым животным.",
    "Где можно познакомиться с пушистыми друзьями и забрать их к себе домой.",
    "На какие crazy тусовки с нами можно попасть, а заодно и помочь животным.",
  ];

  return (
    <Box>
      <Box>
        <Box
          sx={{
            background: `url(${Body})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            width: "calc(100% - 24px)",
            height: "calc(100vh - 40px)",
            position: "absolute",
            transform: "translateX(-50%)",
            left: "50%",
            top: "20px",
            zIndex: -1,
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            paddingX: { xs: "12px", md: "0px" },
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "20px", md: "68px" },
              lineHeight: "103%",
              textTransform: "uppercase",
              fontWeight: 700,
              fontFamily: "HelveticaNeueCyr",
              ".headline-part-2": {
                fontSize: { xs: "46px", md: "78px" },
                lineHeight: { xs: "94%", md: "122%" },
              },
              ".headline-part-3": {
                fontSize: { xs: "36px", md: "126px" },
                lineHeight: "103%",
              },
            }}
          >
            Благотворительная
            <br />
            <span className="headline-part-2">музлото караоке</span>
            <br />
            <span className="headline-part-3">вечеринка</span>
          </Typography>
          <Box
            sx={{
              background: `url(${MainLogo})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              width: "155px",
              height: "185px",
            }}
          ></Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: {
            xs: "linear-gradient(180deg, #2176C9 15%, #FFFFFF 24%, #FFFFFF 100%)",
            md: "linear-gradient(180deg, #2176C9 10%, #FFFFFF 30%, #FFFFFF 100%)",
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "18px", md: "78px" },
              lineHeight: "103%",
              textTransform: "uppercase",
              fontWeight: 700,
              paddingTop: "70px",
              fontFamily: "HelveticaNeueCyr",
            }}
          >
            Что вас ждет сегодня
          </Typography>
        </Box>
        <Box
          sx={{
            maxWidth: "1440px",
            paddingX: { md: "80px" },
            marginX: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              marginTop: { xs: "70px", md: "170px" },
              position: "relative",
            }}
          >
            <Box
              sx={{
                background: `url(${Participant})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: { xs: "164px", md: "640px" },
                height: { xs: "168px", md: "654px" },
                position: "absolute",
                left: 0,
                top: { xs: "-46px", md: "-100px" },
              }}
            ></Box>
            <Box
              sx={{
                width: { xs: "160px", md: "575px" },
                marginRight: { xs: "12px", md: 0 },
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "14px", md: "60px" },
                  lineHeight: "100%",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "#FF3400",
                  fontFamily: "HelveticaNeueCyr",
                }}
              >
                Музлото
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "14px", md: "54px" },
                  lineHeight: "100%",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  fontFamily: "HelveticaNeueCyr",
                  color: "#000",
                }}
              >
                19:00 — 22:00
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "12px", md: "44px" },
                  lineHeight: "103%",
                  fontWeight: 400,
                  marginTop: { xs: "12px", md: "36px" },
                  fontFamily: "HelveticaNeueCyr",
                  color: "#000",
                  ".part": {
                    color: "#FF3400",
                    fontWeight: 700,
                  },
                }}
              >
                Угадывай треки, вычёркивай их из бланков, собирай комбинации и{" "}
                <span className="part">выигрывай призы</span>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              marginTop: { xs: "100px", md: "280px" },
              position: "relative",
              paddingLeft: { xs: "12px", md: "0px" },
            }}
          >
            <Box sx={{}}>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "16px", md: "60px" },
                  lineHeight: "100%",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "#2277C8",
                  fontFamily: "HelveticaNeueCyr",
                }}
              >
                Караоке-вечеринка
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "14px", md: "54px" },
                  lineHeight: "100%",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  fontFamily: "HelveticaNeueCyr",
                  color: "#000",
                  marginTop: { xs: "6px" },
                }}
              >
                22:30 — 03:00
              </Typography>
            </Box>
            <Typography
              sx={{
                textAlign: "left",
                marginTop: { xs: "14px", md: "94px" },
                fontSize: { xs: "8px", md: "32px" },
                lineHeight: "210%",
                fontWeight: 600,
                fontFamily: "HelveticaNeueCyr",
                color: "#2277C8",
                ".name": {
                  color: "#000",
                  fontWeight: 700,
                },
              }}
            >
              {djInfo.map((dj) => (
                <>
                  <div>
                    {dj.time} <span className="name">{dj.name}</span>
                  </div>
                </>
              ))}
            </Typography>
            <Box
              sx={{
                background: `url(${Singer})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: { xs: "162px", md: "628px" },
                height: { xs: "196px", md: "762px" },
                position: "absolute",
                right: 0,
                top: { xs: "-80px", md: "-200px" },
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
      {/* <Box sx={{ background: "#FFF" }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "78px",
            lineHeight: "103%",
            textTransform: "uppercase",
            fontWeight: 700,
            paddingTop: "80px",
            color: "#000",
            fontFamily: "HelveticaNeueCyr",
          }}
        >
          Активности
        </Typography>
        <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
          <Typography
            sx={{
              fontSize: "60px",
              paddingLeft: "80px",
              lineHeight: "103%",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "#2277C8",
              fontFamily: "HelveticaNeueCyr",
              marginY: "40px",
            }}
          >
            Бесплатно
          </Typography>
        </Box>
        <Box>
          {activityInfo.map((activity, index) => (
            <Box
              sx={{
                background:
                  index % 2
                    ? "linear-gradient(269.68deg, #2277C8 39.57%, #FFFFFF 86.47%)"
                    : "linear-gradient(269.68deg, #FFFFFF 1.57%, #2277C8 65.47%)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "1440px",
                margin: "auto",
                flexDirection: index % 2 ? "row-reverse" : "row",
              }}
              key={`activity-${index}`}
            >
              <Box
                sx={{
                  width: "600px",
                  paddingLeft: !(index % 2) && "60px",
                  paddingRight: index % 2 && "60px",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "30px",
                    lineHeight: "103%",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: "#FFF",
                    fontFamily: "HelveticaNeueCyr",
                  }}
                >
                  {activity.title}
                </Typography>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "25px",
                    lineHeight: "103%",
                    fontWeight: 400,
                    marginTop: "30px",
                    color: "FFF",
                    fontFamily: "HelveticaNeueCyr",
                  }}
                >
                  {activity.description}
                </Typography>
              </Box>
              <img src={activity.image} alt={`activity-${index}`}></img>
            </Box>
          ))}
        </Box>
        <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
          <Typography
            sx={{
              fontSize: "60px",
              paddingLeft: "80px",
              lineHeight: "103%",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "#DF3F05",
              fontFamily: "HelveticaNeueCyr",
              marginY: "40px",
            }}
          >
            За донат
          </Typography>
        </Box>
        {donatActivity.map((activity, index) => (
          <Box
            sx={{
              background:
                index % 2
                  ? "linear-gradient(269.68deg, #FF3400 36.57%, #FFFFFF 65.47%)"
                  : "linear-gradient(269.68deg, #FFFFFF 1.57%, #FF3400 63.57%)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "1440px",
              margin: "auto",
              flexDirection: index % 2 ? "row-reverse" : "row",
              ".boldPart": {
                fontWeight: 700,
              },
            }}
            key={`activity-${index}`}
          >
            <Box
              sx={{
                width: activity.maxWidth || "600px",
                marginLeft: !(index % 2) && "60px",
                marginRight: index % 2 && "60px",
              }}
            >
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "30px",
                  lineHeight: "103%",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "#FFF",
                  fontFamily: "HelveticaNeueCyr",
                }}
              >
                {activity.title}
              </Typography>
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: "25px",
                  lineHeight: "103%",
                  fontWeight: 400,
                  marginTop: "30px",
                  color: "FFF",
                  fontFamily: "HelveticaNeueCyr",
                }}
              >
                {activity.description}
              </Typography>
            </Box>
            <img src={activity.image} alt={`activity-${index}`}></img>
          </Box>
        ))}
      </Box> */}
      {/* <Box sx={{ background: "#FFF" }}>
        <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
          <Typography
            sx={{
              textAlign: "left",
              paddingX: "80px",
              fontSize: "60px",
              lineHeight: "103%",
              textTransform: "uppercase",
              fontWeight: 700,
              paddingTop: "80px",
              color: "#2277C8",
              fontFamily: "HelveticaNeueCyr",
            }}
          >
            Аукцион
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              paddingX: "80px",
              fontSize: "26px",
              lineHeight: "103%",
              fontWeight: 400,
              paddingTop: "44px",
              color: "#2277C8",
              fontFamily: "HelveticaNeueCyr",
              maxWidth: "880px",
            }}
          >
            Сканируй QR-код у картины, делай ставку на сайте и забирай работу
            домой. Каждая новая ставка выше предыдущей минимум на 5 рублей.
            Обратный отсчёт идёт в реальном времени.
            <br />
            Все донаты идут приюту.
          </Typography>
        </Box>
      </Box> */}
      {/* <Box
        sx={{
          height: "900px",
          background: "linear-gradient(180deg, #FFFFFF 0%, #2376C7 100%)",
        }}
      ></Box> */}
      {/* <Box>
        <Box sx={{ maxWidth: "1440px", margin: "auto", position: "relative" }}>
          <Typography
            sx={{
              textAlign: "left",
              paddingX: "80px",
              fontSize: "60px",
              lineHeight: "120%",
              fontWeight: 700,
              paddingTop: "70px",
              color: "#FFF",
              fontFamily: "HelveticaNeueCyr",
            }}
          >
            Кто мы?
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              paddingX: "80px",
              fontSize: "30px",
              lineHeight: "120%",
              fontWeight: 400,
              paddingTop: "14px",
              color: "#FFF",
              fontFamily: "HelveticaNeueCyr",
              ".bold": { fontWeight: "700" },
            }}
          >
            Мы небольшой волонтерский проект{" "}
            <span className="bold">«Paws Up!»</span>
            <br /> Основная наша цель - это показать, что делать добро легко!
            <br /> <br />
            <span className="bold">Мы рассказываем людям:</span>
          </Typography>
          <Box
            sx={{
              paddingX: "80px",
              marginTop: "40px",
              paddingBottom: "380px",
            }}
          >
            {pawsupInfo.map((info, index) => (
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "center",
                  paddingTop: index ? "22px" : "",
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="10.5" cy="10.5" r="10.5" fill="#F0F0F4" />
                </svg>
                <Typography
                  sx={{
                    textAlign: "left",
                    fontSize: "24px",
                    lineHeight: "120%",
                    fontWeight: 400,
                    color: "#FFF",
                    fontFamily: "HelveticaNeueCyr",
                    maxWidth: "570px",
                  }}
                >
                  {info}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              background: `url(${Team})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "1066px",
              height: "740px",
              position: "absolute",
              right: 0,
              bottom: 0,
            }}
          ></Box>
        </Box>
      </Box> */}
      {/* <Box>
        <Box sx={{ maxWidth: "1440px", margin: "auto", position: 'relative' }}>
          <Typography
            sx={{
              textAlign: "left",
              paddingX: "80px",
              fontSize: "60px",
              lineHeight: "103%",
              fontWeight: 700,
              marginTop: "80px",
              color: "#FFF",
              fontFamily: "HelveticaNeueCyr",
            }}
          >
            О приюте
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              paddingX: "80px",
              fontSize: "32px",
              lineHeight: "120%",
              marginTop: "44px",
              maxWidth: "826px",
              fontWeight: 400,
              color: "#FFF",
              fontFamily: "HelveticaNeueCyr",
              ".bold": {
                fontWeight: 700,
              },
            }}
          >
            <span className="bold">Приют Хутор</span> — место в Новогрудке, где
            живут собаки и кошки, подобранные с улицы.
            <br />
            <br />
            <span className="bold">Каждый из них</span> ждёт своего человека.
            Пока дома нет — приют их кормит, лечит и любит.
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              paddingX: "80px",
              fontSize: "60px",
              lineHeight: "103%",
              fontWeight: 700,
              marginTop: "50px",
              color: "#FFF",
              fontFamily: "HelveticaNeueCyr",
            }}
          >
            Сколько их?
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "180px",
              justifyContent: "center",
              marginTop: "28px",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "168px",
                lineHeight: "27%",
                maxWidth: "180px",
                fontWeight: 700,
                marginTop: "50px",
                color: "#FFF",
                fontFamily: "HelveticaNeueCyr",
                ".part": {
                  fontSize: "60px",
                },
              }}
            >
              87 <span className="part">собак</span>
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: "168px",
                lineHeight: "27%",
                maxWidth: "180px",
                fontWeight: 700,
                marginTop: "50px",
                color: "#FFF",
                fontFamily: "HelveticaNeueCyr",
                ".part": {
                  fontSize: "60px",
                },
              }}
            >
              79 <span className="part">кошек</span>
            </Typography>
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "32px",
              lineHeight: "120%",
              maxWidth: "1220px",
              fontWeight: 700,
              marginTop: "48px",
              color: "#FFF",
              fontFamily: "HelveticaNeueCyr",
              marginX: "auto",
            }}
          >
            Всего 167 животных живут в приюте прямо сейчас и каждый день
            нуждаются в помощи
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "60px",
              lineHeight: "120%",
              fontWeight: 700,
              marginTop: "122px",
              color: "#FFF",
              fontFamily: "HelveticaNeueCyr",
              paddingLeft: "80px",
            }}
          >
            Как помочь через ЕРИП:
          </Typography>
          <Box
            sx={{ position: "relative", marginLeft: "80px", marginTop: "38px" }}
          >
            <Typography
              sx={{
                fontSize: "32px",
                lineHeight: "120%",
                fontWeight: 700,
                color: "#FFF",
                fontFamily: "HelveticaNeueCyr",
              }}
            >
              Голодный номер приюта
            </Typography>
            <Typography
              sx={{
                fontSize: "32px",
                lineHeight: "120%",
                fontWeight: 700,
                color: "#FFF",
                fontFamily: "HelveticaNeueCyr",
                paddingLeft: "60px",
                paddingTop: "14px",
              }}
            >
              Ерип
            </Typography>
            <Typography
              sx={{
                fontSize: "32px",
                lineHeight: "120%",
                fontWeight: 700,
                color: "#FFF",
                fontFamily: "HelveticaNeueCyr",
                paddingLeft: "108px",
                paddingTop: "22px",
              }}
            >
              Мобильная связь
            </Typography>
            <Typography
              sx={{
                fontSize: "32px",
                lineHeight: "120%",
                fontWeight: 700,
                color: "#FFF",
                fontFamily: "HelveticaNeueCyr",
                paddingLeft: "156px",
                paddingTop: "26px",
              }}
            >
              MTC
            </Typography>
            <Typography
              sx={{
                fontSize: "32px",
                lineHeight: "120%",
                fontWeight: 700,
                color: "#FFF",
                fontFamily: "HelveticaNeueCyr",
                paddingLeft: "200px",
                paddingTop: "24px",
              }}
            >
              По номеру телефона
            </Typography>
            <Box
              sx={{
                background: `url(${Arrows})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "188px",
                height: "238px",
                position: "absolute",
                left: 0,
                top: "32px",
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              background: "#0F5190",
              borderRadius: "22px",
              width: "700px",
              height: "144px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "80px",
              marginTop: "50px",
            }}
          >
            <Typography
              sx={{
                fontSize: "80px",
                lineHeight: "120%",
                fontWeight: 600,
                color: "#FFF",
                fontFamily: "Manrope",
              }}
            >
              +375333750032
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: "24px",
              lineHeight: "120%",
              fontWeight: 400,
              color: "#EFEFEF",
              fontFamily: "Manrope",
              opacity: "60%",
              paddingLeft: "80px",
              marginTop: "22px",
              marginBottom: "80px",
              a: {
                color: "#FFF",
                textDecoration: "none",
                ":hover": {
                  color: "#c5c3c3",
                },
              },
              ".bold": {
                fontWeight: "700",
              },
            }}
          >
            Все переведённые средства идут{" "}
            <span className="bold">напрямую</span> приюту «Хутор».
            <br /> Отчёт о потраченных средствах ищите в{" "}
            <a href="https://www.instagram.com/hey.pawsup">
              инстаграме «Paws Up»
            </a>
          </Typography>
          <Box
            sx={{
              background: `url(${Dog})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "670px",
              height: "862px",
              position: "absolute",
              right: 0,
              bottom: '-80px',
            }}
          ></Box>
        </Box>
      </Box> */}
    </Box>
  );
};

export default Home;
