// import Paint1 from "../src/img/lots/1.jpeg";
// import Paint2 from "../src/img/lots/2.jpeg";
// import Paint3 from "../src/img/lots/3.jpeg";
// import Paint4 from "../src/img/lots/4.jpeg";
// import Paint5 from "../src/img/lots/5.jpeg";
// import Paint6 from "../src/img/lots/6.jpeg";
// import Paint7 from "../src/img/lots/7.jpeg";
// import Paint8 from "../src/img/lots/8.jpeg";

const paints = Array.from({ length: 8 }, (_, i) =>
  require(`../src/img/lots/${i + 1}.jpeg`)
);

export const LotsInfo = [
  {
    id: 1,
    name: "Банка котурцов",
    img: paints[0],
    size: "30х40см",
  },
  {
    id: 2,
    name: "Париж",
    img: paints[2],
    size: "15х20см",
  },
  {
    id: 3,
    name: "Утро",
    img: paints[4],
    size: "30х40см",
  },
  {
    id: 4,
    name: "Бесконечность",
    img: paints[5],
    size: "30х40см",
  },
  {
    id: 5,
    name: "Котовик обыкновенный",
    img: paints[6],
    size: "30х40см",
  },
  {
    id: 6,
    name: "Бджола",
    img: paints[3],
    size: "30х30см",
  },
  {
    id: 7,
    name: "Рабочее утро",
    img: paints[1],
    size: "30х30см",
  },
  {
    id: 8,
    name: "Нян кэт",
    img: paints[7],
    size: "30х30см",
  },
];
