const paints = Array.from({ length: 6 }, (_, i) =>
  require(`../src/img/lots/${i + 1}.jpeg`),
);

export const LotsInfo = [
  {
    id: 1,
    name: "Joey doesn't share food",
    img: paints[0],
    size: "30х40см",
    isVertic: true,
  },
  {
    id: 2,
    name: "Собачий кайф",
    img: paints[1],
    size: "30х40см",
    isVertic: true,
  },
  {
    id: 3,
    name: "Кот в мешке",
    img: paints[2],
    size: "30х40см",
    isVertic: true,
  },
  {
    id: 4,
    name: "Ну мы",
    img: paints[5],
    size: "30х40см",
    isVertic: true,
  },
  {
    id: 5,
    name: "Лесная вечеринка",
    img: paints[4],
    size: "30х40см",
    isVertic: true,
  },
  {
    id: 6,
    name: "Бибиди бобиди бум",
    img: paints[3],
    size: "30х30см",
    isVertic: true,
  },
  // {
  //   id: 7,
  //   name: "Я звезда youtube",
  //   img: paints[6],
  //   size: "30х40см",
  //   isVertic: true,
  // },
];
