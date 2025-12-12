const paints = Array.from({ length: 7 }, (_, i) =>
  require(`../src/img/lots/${i + 1}.jpeg`)
);

export const LotsInfo = [
  {
    id: 1,
    name: "Очень странный вопрос",
    img: paints[0],
    size: "30х40см",
    isVertic: true,
  },
  {
    id: 2,
    name: "Очень странная атака",
    img: paints[1],
    size: "30х40см",
    isVertic: false,
  },
  {
    id: 3,
    name: "Очень странное облако",
    img: paints[2],
    size: "30х40см",
    isVertic: false,
  },
  {
    id: 4,
    name: "Очень странный НГ",
    img: paints[3],
    size: "30х40см",
    isVertic: true,
  },
  {
    id: 5,
    name: "Очень странное утро",
    img: paints[4],
    size: "30х40см",
    isVertic: false,
  },
  {
    id: 6,
    name: "Очень странная кола",
    img: paints[5],
    size: "30х30см",
    isVertic: true,
  },
  {
    id: 7,
    name: "Демогоркот",
    img: paints[6],
    size: "30х40см",
    isVertic: true,
  },
];
