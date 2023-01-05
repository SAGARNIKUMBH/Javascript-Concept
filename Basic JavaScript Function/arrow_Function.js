// arrow functions

// ********** Example For Normal Function :-

// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

// Function convert into arrow function :-

const singHappyBirthday = () => {
  console.log("happy birthday to you ......");
};

singHappyBirthday();

// ************************ Example No.01 *****************

const sumThreeNumbers = (number1, number2, number3) => {
  return number1 + number2 + number3;
};

const ans = sumThreeNumbers(2, 3, 4);
console.log(ans);

// ************************ Example No. 02 *************************

const isEven1 = function (number) {
  return number % 2 === 0;
};
console.log(isEven1(4));

// ************ Example For arrow function single line show *************
// Notes :- this single line arrow function use only single value only.

const isEven = (number) => number % 2 === 0;
console.log(isEven(4));

// ********************* Example No. 03 ****************************

const firstChar = (anyString) => anyString[0];

console.log(firstChar("Sagar"));

// ******************** Example No. 04 **********************************

const findTarget = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

const ans4 = findTarget([2, 3, 4], 4);
console.log(ans4);
