const paints = Array.from({ length: 7 }, (_, i) =>
  require(`../src/img/lots/${i + 1}.jpeg`),
);

export const LotsInfo = [
  {
    id: 1,
    name: "@&”%\#",
    img: paints[0],
    size: "30х40см",
    isVertic: true,
  },
  {
    id: 2,
    name: "But Why?",
    img: paints[1],
    size: "30х40см",
    isVertic: true,
  },
  {
    id: 3,
    name: "А тебя это * не должно",
    img: paints[2],
    size: "30х40см",
    isVertic: true,
  },
  {
    id: 4,
    name: "Я худею",
    img: paints[3],
    size: "30х40см",
    isVertic: true,
  },
  {
    id: 5,
    name: "Я с моими пацанами",
    img: paints[4],
    size: "40х30см",
    isVertic: true,
  },
  {
    id: 6,
    name: "Фея",
    img: paints[5],
    size: "30х30см",
    isVertic: true,
  },
  {
    id: 7,
    name: "Я звезда youtube",
    img: paints[6],
    size: "30х40см",
    isVertic: true,
  },
];
