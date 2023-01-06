//*********************** * object destructuring *******************************

const band = {
  bandName: "led zepplin",
  famousSong: "stairway to heaven",
  year: 1968,
  anotherFamousSong: "kashmir",
};

let { bandName, famousSong, ...restProps } = band;
console.log(bandName);
console.log(restProps);

const band2 = {
  bandName1: "swar samart satana",
  famousSong2: "Bhau mana Samart",
  Year3: 1980,
};
console.log(band2);

let { bandName1, famousSong2,...restProps2 } = band2;
console.log(band2);
