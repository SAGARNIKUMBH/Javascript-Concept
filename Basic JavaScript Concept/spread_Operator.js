// ***************************** spread operator *******************************
const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

const newArray = [...array1, ...array2, 89, 69];
console.log(newArray);

const newArray2 = [..."123456789"];
console.log(newArray2);

const new3 = [..."abc"];
console.log(new3);

// *********************** spread operator in objects ****************************

const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

const newObject1 = { ...obj2, ...obj1, key69: "value69" };
console.log(newObject1);

// ***************************  Example No. 03 *********************

const newObject2 = { ...["item1", "item2"] };
console.log(newObject2);

const newObject3 = { ..."abcdefghijklmnopqrstuvwxyz" };
console.log(newObject3);
