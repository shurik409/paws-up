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
import MobileActivity1 from "../../img/home/mobile/activity1.png";
import MobileActivity2 from "../../img/home/mobile/activity2.png";
import MobileActivity3 from "../../img/home/mobile/activity3.png";
import MobileActivity4 from "../../img/home/mobile/activity4.png";
import MobileActivity5 from "../../img/home/mobile/activity5.png";
import DonatActivity1 from "../../img/home/donatActivity1.png";
import DonatActivity2 from "../../img/home/donatActivity2.png";
import MobileDonatActivity1 from "../../img/home/mobile/activity6.png";
import MobileDonatActivity2 from "../../img/home/mobile/activity7.png";
import Team from "../../img/home/team.png";
import MobileTeam from "../../img/home/mobileTeam.png";
import Arrows from "../../img/home/arrows.png";
import Dog from "../../img/home/dog.png";
import Elipse from "../../img/home/elipse.svg";

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
      name: "Сольное караоке",
    },
    {
      time: "00:30 – 01:30",
      name: "DJ Sion",
    },
    {
      time: "01:30 – 02:00",
      name: "Сольное караоке",
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
      mobileImage: MobileActivity1,
    },
    {
      title: "Сочиняем песню вместе",
      description:
        "Коллективное творчество в действии: первая строчка уже есть, дело за тобой. Дописывай следующую, передавай эстафету, и к концу вечера из ваших строк родится настоящая песня. Финальный аккорд: генерируем трек с помощью ИИ и слушаем всё вместе.",
      image: Activity2,
      maxHeight: "158px",
      mobileImage: MobileActivity2,
    },
    {
      title: "Переиграй пикетчика",
      description:
        "Называем слово, у тебя минута, чтобы вспомнить как можно больше строчек из песен, где оно встречается. Быстро, весело и неожиданно сложно. Каждый участник получает приз.",
      image: Activity3,
      mobileImage: MobileActivity3,
    },
    {
      title: "Бирпонг",
      description:
        "игра, где твоя задача попасть шариком для пинг-понга в стаканы соперника. Цель — выбить все стаканы противника!",
      image: Activity4,
      mobileImage: MobileActivity4,
    },
    {
      title: "Твистер",
      description:
        "Игра на ловкость и гибкость. Сможешь удержать равновесие на коврике с цветными кругами, выполняя команды ведущего и переставляя руки или ноги по цветам, не упав?",
      image: Activity5,
      mobileImage: MobileActivity5,
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
      mobileImage: MobileDonatActivity1,
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
      mobileImage: MobileDonatActivity2,
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
              fontSize: { xs: "24px", md: "78px" },
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
                left: { xs: "8px", md: 0 },
                top: { xs: "-14px", md: "-100px" },
              }}
            ></Box>
            <Box
              sx={{
                width: { xs: "184px", md: "575px" },
                marginRight: { xs: "12px", md: 0 },
              }}
            >
              <Typography
                sx={{
                  textAlign: { xs: "left", md: "center" },
                  fontSize: { xs: "20px", md: "60px" },
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
                  textAlign: { xs: "left", md: "center" },
                  fontSize: { xs: "18px", md: "54px" },
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
                  textAlign: { xs: "left", md: "center" },
                  fontSize: { xs: "14px", md: "44px" },
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
                  textAlign: { xs: "left", md: "center" },
                  fontSize: { xs: "20px", md: "60px" },
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
                  textAlign: { xs: "left", md: "center" },
                  fontSize: { xs: "18px", md: "54px" },
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
                fontSize: { xs: "12px", md: "32px" },
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
                top: { xs: "28px", md: "-200px" },
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ background: "#FFF" }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "22px", md: "78px" },
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
              fontSize: { xs: "18px", md: "60px" },
              paddingLeft: { xs: "12px", md: "80px" },
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
                marginTop: { xs: index ? "4px" : "0", md: "" },
                background: {
                  xs: "linear-gradient(269.68deg, #FFFFFF 1.57%, #2277C8 37.54%)",
                  md:
                    index % 2
                      ? "linear-gradient(269.68deg, #FFFFFF 1.57%, #2277C8 37.54%)"
                      : "linear-gradient(269.68deg, #FFFFFF 1.57%, #2277C8 65.47%)",
                },
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                maxWidth: { xs: "100%", md: "1440px" },
                margin: "auto",
                flexDirection: {
                  xs: "row",
                  md: index % 2 ? "row-reverse" : "row",
                },
                position: "relative",
                img: {
                  display: { xs: "none", md: "block" },
                },
              }}
              key={`activity-${index}`}
            >
              <Box
                sx={{
                  width: { xs: "268px", md: activity.maxWidth || "600px" },
                  marginLeft: { xs: "8px", md: !(index % 2) && "60px" },
                  marginRight: { xs: "8px", md: index % 2 && "60px" },
                  height: { xs: activity.maxHeight || "122px", md: "auto" },
                }}
              >
                <Typography
                  sx={{
                    textAlign: { xs: "left", md: "center" },
                    fontSize: { xs: "14px", md: "30px" },
                    lineHeight: "103%",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    color: "#FFF",
                    fontFamily: "HelveticaNeueCyr",
                    marginTop: { xs: "12px", md: 0 },
                  }}
                >
                  {activity.title}
                </Typography>
                <Typography
                  sx={{
                    textAlign: { xs: "left", md: "center" },
                    fontSize: { xs: "12px", md: "25px" },
                    lineHeight: "103%",
                    fontWeight: 400,
                    marginTop: { xs: "14px", md: "30px" },
                    color: "FFF",
                    fontFamily: "HelveticaNeueCyr",
                  }}
                >
                  {activity.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: { xs: "block", md: "none" },
                  background: `url(${activity.mobileImage})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  maxHeight: { xs: activity.maxHeight || "122px" },
                  position: "absolute",
                  width: "40%",
                  height: "100%",
                  top: 0,
                  right: 0,
                }}
              ></Box>
              <img src={activity.image} alt={`activity-${index}`}></img>
            </Box>
          ))}
        </Box>
        <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
          <Typography
            sx={{
              fontSize: { xs: "18px", md: "60px" },
              paddingLeft: { xs: "12px", md: "80px" },
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
              ".boldPart": {
                fontWeight: 700,
              },
              marginTop: { xs: index ? "4px" : "0", md: "" },
              background: {
                xs: "linear-gradient(269.68deg, #FFFFFF 1.57%, #FF3400 37.54%)",
                md:
                  index % 2
                    ? "linear-gradient(269.68deg, #FF3400 36.57%, #FFFFFF 65.47%)"
                    : "linear-gradient(269.68deg, #FFFFFF 1.57%, #FF3400 63.57%)",
              },
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              maxWidth: { xs: "100%", md: "1440px" },
              margin: "auto",
              flexDirection: {
                xs: "row",
                md: index % 2 ? "row-reverse" : "row",
              },
              position: "relative",
              img: {
                display: { xs: "none", md: "block" },
              },
            }}
            key={`activity-${index}`}
          >
            <Box
              sx={{
                width: { xs: "268px", md: activity.maxWidth || "600px" },
                marginLeft: { xs: "8px", md: !(index % 2) && "60px" },
                marginRight: { xs: "8px", md: index % 2 && "60px" },
                height: { xs: activity.maxHeight || "144px", md: "auto" },
              }}
            >
              <Typography
                sx={{
                  textAlign: { xs: "left", md: "center" },
                  fontSize: { xs: "14px", md: "30px" },
                  lineHeight: "103%",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "#FFF",
                  fontFamily: "HelveticaNeueCyr",
                  marginTop: { xs: "12px", md: 0 },
                }}
              >
                {activity.title}
              </Typography>
              <Typography
                sx={{
                  textAlign: { xs: "left", md: "center" },
                  fontSize: { xs: "12px", md: "25px" },
                  lineHeight: "103%",
                  fontWeight: 400,
                  marginTop: { xs: "14px", md: "30px" },
                  color: "FFF",
                  fontFamily: "HelveticaNeueCyr",
                }}
              >
                {activity.description}
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                background: `url(${activity.mobileImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                maxHeight: { xs: activity.maxHeight || "144px" },
                position: "absolute",
                width: "40%",
                height: "100%",
                top: 0,
                right: 0,
              }}
            ></Box>
            <img src={activity.image} alt={`activity-${index}`}></img>
          </Box>
        ))}
      </Box>
      <Box sx={{ background: "#FFF" }}>
        <Box sx={{ maxWidth: "1440px", margin: "auto" }}>
          <Typography
            sx={{
              textAlign: "left",
              fontSize: { xs: "16px", md: "60px" },
              paddingLeft: { xs: "12px", md: "80px" },
              lineHeight: "103%",
              textTransform: "uppercase",
              fontWeight: 700,
              paddingTop: { xs: "44px", md: "80px" },
              color: "#2277C8",
              fontFamily: "HelveticaNeueCyr",
            }}
          >
            Аукцион
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              paddingX: { xs: "12px", md: "80px" },
              fontSize: { xs: "10px", md: "26px" },
              lineHeight: "103%",
              fontWeight: 400,
              paddingTop: { xs: "16px", md: "44px" },
              color: "#2277C8",
              fontFamily: "HelveticaNeueCyr",
              maxWidth: { md: "880px" },
            }}
          >
            Сканируй QR-код у картины, делай ставку на сайте и забирай работу
            домой. Каждая новая ставка выше предыдущей минимум на 5 рублей.
            <br />
            Обратный отсчёт идёт в реальном времени.
            <br />
            Все донаты идут приюту.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: { xs: "150px", md: "900px" },
          background: "linear-gradient(180deg, #FFFFFF 0%, #2376C7 100%)",
        }}
      ></Box>
      <Box>
        <Box sx={{ maxWidth: "1440px", margin: "auto", position: "relative" }}>
          <Typography
            sx={{
              textAlign: "left",
              paddingX: { xs: "12px", md: "80px" },
              fontSize: { xs: "22px", md: "60px" },
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
              paddingX: { xs: "14px", md: "80px" },
              fontSize: { xs: "10px", md: "30px" },
              lineHeight: "120%",
              fontWeight: 400,
              paddingTop: { xs: "8px", md: "14px" },
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
              paddingX: { xs: "12px", md: "80px" },
              marginTop: { xs: "10px", md: "40px" },
              paddingBottom: { xs: "120px", md: "380px" },
            }}
          >
            {pawsupInfo.map((info, index) => (
              <Box
                sx={{
                  display: "flex",
                  gap: { xs: "6px", md: "20px" },
                  alignItems: "center",
                  paddingTop: index ? { xs: "6px", md: "22px" } : "",
                  img: {
                    width: { xs: "7", md: "22px" },
                    height: { xs: "7", md: "22px" },
                  },
                }}
              >
                <img src={Elipse} alt="elipse"></img>

                <Typography
                  sx={{
                    textAlign: "left",
                    fontSize: { xs: "12px", md: "24px" },
                    lineHeight: "120%",
                    fontWeight: 400,
                    color: "#FFF",
                    fontFamily: "Manrope",
                    maxWidth: { xs: "232px", md: "570px" },
                  }}
                >
                  {info}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              background: { xs: `url(${MobileTeam})`, md: `url(${Team})` },
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: { xs: "322px", md: "1066px" },
              height: { xs: "202px", md: "740px" },
              position: "absolute",
              right: { xs: "-10px", md: 0 },
              bottom: { xs: "-10px", md: 0 },
            }}
          ></Box>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            maxWidth: { md: "1440px" },
            margin: "auto",
            position: "relative",
          }}
        >
          <Typography
            sx={{
              textAlign: "left",
              paddingX: { xs: "12px", md: "80px" },
              fontSize: { xs: "22px", md: "60px" },
              lineHeight: "103%",
              fontWeight: 700,
              marginTop: { xs: "16px", md: "80px" },
              color: "#FFF",
              fontFamily: "HelveticaNeueCyr",
            }}
          >
            О приюте
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              paddingX: { xs: "12px", md: "80px" },
              fontSize: { xs: "14px", md: "32px" },
              lineHeight: "120%",
              marginTop: { xs: "16px", md: "44px" },
              maxWidth: { xs: "348px", md: "826px" },
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
              paddingX: { xs: "12px", md: "80px" },
              fontSize: { xs: "22px", md: "60px" },
              lineHeight: "103%",
              fontWeight: 700,
              marginTop: { xs: "14px", md: "50px" },
              color: "#FFF",
              fontFamily: "HelveticaNeueCyr",
            }}
          >
            Сколько их?
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: { xs: "48px", md: "180px" },
              justifyContent: "center",
              marginTop: { xs: "14px", md: "28px" },
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: "44px", md: "168px" },
                lineHeight: "27%",
                maxWidth: { xs: "68px", md: "180px" },
                fontWeight: 700,
                marginTop: { xs: "14px", md: "50px" },
                color: "#FFF",
                fontFamily: "HelveticaNeueCyr",
                ".part": {
                  fontSize: { xs: "16px", md: "60px" },
                },
              }}
            >
              87 <span className="part">собак</span>
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: "44px", md: "168px" },
                lineHeight: "27%",
                maxWidth: { xs: "68px", md: "180px" },
                fontWeight: 700,
                marginTop: { xs: "14px", md: "50px" },
                color: "#FFF",
                fontFamily: "HelveticaNeueCyr",
                ".part": {
                  fontSize: { xs: "16px", md: "60px" },
                },
              }}
            >
              79 <span className="part">кошек</span>
            </Typography>
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: "14px", md: "32px" },
              lineHeight: "120%",
              maxWidth: { xs: "322px", md: "1220px" },
              fontWeight: 700,
              marginTop: { xs: "20px", md: "48px" },
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
              fontSize: { xs: "18px", md: "60px" },
              lineHeight: "120%",
              fontWeight: 700,
              marginTop: { xs: "22px", md: "122px" },
              color: "#FFF",
              fontFamily: "HelveticaNeueCyr",
              paddingLeft: { xs: "12px", md: "80px" },
            }}
          >
            Как помочь через ЕРИП:
          </Typography>
          <Box
            sx={{
              position: "relative",
              marginLeft: { xs: "12px", md: "80px" },
              marginTop: { xs: "12px", md: "38px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "32px" },
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
                fontSize: { xs: "14px", md: "32px" },
                lineHeight: "120%",
                fontWeight: 700,
                color: "#FFF",
                fontFamily: "HelveticaNeueCyr",
                paddingLeft: { xs: "22px", md: "60px" },
                paddingTop: { xs: "4px", md: "14px" },
              }}
            >
              Ерип
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "32px" },
                lineHeight: "120%",
                fontWeight: 700,
                color: "#FFF",
                fontFamily: "HelveticaNeueCyr",
                paddingLeft: { xs: "40px", md: "108px" },
                paddingTop: { xs: "6px", md: "22px" },
              }}
            >
              Мобильная связь
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "32px" },
                lineHeight: "120%",
                fontWeight: 700,
                color: "#FFF",
                fontFamily: "HelveticaNeueCyr",
                paddingLeft: { xs: "58px", md: "156px" },
                paddingTop: { xs: "8px", md: "26px" },
              }}
            >
              MTC
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "32px" },
                lineHeight: "120%",
                fontWeight: 700,
                color: "#FFF",
                fontFamily: "HelveticaNeueCyr",
                paddingLeft: { xs: "76px", md: "200px" },
                paddingTop: { xs: "8px", md: "24px" },
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
                width: { xs: "72px", md: "188px" },
                height: { xs: "96px", md: "238px" },
                position: "absolute",
                left: { xs: "2px", md: 0 },
                top: { xs: "12px", md: "32px" },
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              background: "#0F5190",
              borderRadius: { xs: "6px", md: "22px" },
              width: { xs: "162px", md: "700px" },
              height: { xs: "34px", md: "144px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: { xs: "12px", md: "80px" },
              marginTop: { xs: "12px", md: "50px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "80px" },
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
              fontSize: { xs: "14px", md: "24px" },
              lineHeight: "120%",
              fontWeight: 400,
              color: "#EFEFEF",
              fontFamily: "Manrope",
              opacity: "60%",
              paddingLeft: { xs: "12px", md: "80px" },
              marginTop: { xs: "48px", md: "22px" },
              marginBottom: "40px",
              maxWidth: { xs: "252px", md: "" },
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
              width: { xs: "195px", md: "670px" },
              height: { xs: "280px", md: "862px" },
              position: "absolute",
              right: 0,
              bottom: "-40px",
              zIndex: "-1",
            }}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
