// Basic Funcation Stntax :-

function singHappyBirthday() {
  console.log("happy birthday to you ......");
}

function sumThreeNumbers(number1, number2, number3) {
  return number1 + number2 + number3;
}

// Funcation Declartion :-

const totalSum = function sumThreeNumbers(number1, number2, number3) {
  return number1 + number2 + number3;
};
const ans1 = totalSum(2, 3, 4);
console.log(ans1);

// ************************** Example Of Basic Funcation *********************************

// Q. isEven
// input : 1 number
// output : true , false

// Ans:-

// function isEven(number){
//     return number % 2 === 0;
// }

// console.log(isEven(4));

// ********************************* Example No.02 ********************************

// function
// input : string
// output: firstCharacter

// function firstChar(anyString){
//     return anyString[0];
// }

// console.log(firstChar("zbc"));

// function
// input : array, target (number)
// output: index of target if target present in array

function findTarget(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}
const myArray = [1, 3, 8, 90];
const ans = findTarget(myArray, 4);
console.log(ans);
