const paints = Array.from({ length: 9 }, (_, i) =>
  require(`../src/img/lots/${i + 1}.jpeg`)
);

export const LotsInfo = [
  {
    id: 1,
    name: "Банка котурцов",
    img: paints[0],
    size: "30х40см",
    isVertic: true,
  },
  {
    id: 2,
    name: "Париж",
    img: paints[2],
    size: "15х20см",
    isVertic: true,
  },
  {
    id: 3,
    name: "Утро",
    img: paints[4],
    size: "30х40см",
    isVertic: true,
  },
  {
    id: 4,
    name: "Бесконечность",
    img: paints[5],
    size: "30х40см",
    isVertic: true,
  },
  {
    id: 5,
    name: "Котовик обыкновенный",
    img: paints[6],
    size: "30х40см",
    isVertic: true,
  },
  {
    id: 6,
    name: "Бджола",
    img: paints[3],
    size: "30х30см",
    isVertic: true,
  },
  {
    id: 7,
    name: "Рабочее утро",
    img: paints[1],
    size: "30х30см",
    isVertic: true,
  },
  {
    id: 8,
    name: "Нян кэт",
    img: paints[7],
    size: "30х30см",
    isVertic: true,
  },
  {
    id: 9,
    name: "Ковер",
    img: paints[8],
    size: "30х30см",
    isVertic: false,
  },
];
