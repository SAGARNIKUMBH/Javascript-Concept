// default parameters

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }

function addTwo(a, b = 0) {
  return a + b;
}

const ans1 = addTwo(4, 8);
console.log(ans1);

// ************************* Rest Parameters *****************************

// rest parameters

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);

function addAll(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  return total;
}

const ans = addAll(4, 5, 4, 2, 10);
console.log(ans);

// ************Example of rest parameters ************

// Q. Addition of following numbers ?
// addNum=(1,2,3,4,5,6,78,9)

function addNum(...num) {
  let sum = 0;
  for (let num1 of num) {
    sum = sum + num1;
  }
  return sum;
}

console.log(addNum(1, 2, 3, 4, 5, 6, 7, 8, 9));

// const ans3 = addNum(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(ans3);
