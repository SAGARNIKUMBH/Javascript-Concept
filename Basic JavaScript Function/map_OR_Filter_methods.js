// map method
const numbers = [3, 4, 6, 1, 8];
const square = function (number) {
  return number * number;
};

const squareNumber = numbers.map((number, index) => {
  return index;
});
console.log(squareNumber);

const squareNumber2 = numbers.map((number, index) => {
  return number * number;
});
console.log(squareNumber2);

// Example No.02

const users = [
  { firstName: "harshit", age: 23 },
  { firstName: "mohit", age: 21 },
  { firstName: "nitish", age: 22 },
  { firstName: "garima", age: 20 },
];

const userNames = users.map((user) => {
  return user.firstName;
});

console.log(userNames);

// ******************************* Filter Methods ************************

// filter method

const checkNumbers = [1, 3, 2, 6, 4, 8];

const evenNumbers = checkNumbers.filter((number) => {
  return number % 2 === 0;
});
console.log(evenNumbers);

const OddNumber = checkNumbers.filter((number) => {
  return number & (2 !== 0);
});
console.log(OddNumber);
