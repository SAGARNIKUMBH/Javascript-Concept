// ***************** Intro to arrays ***************************
// array is reference  data type
// ***************  how to create arrays ***********************

// defination :- array is ordered collection of items

// ******************* Example No.01 ***************************

// let fruits = ["apple", "mango", "grapes"];

// let numbers = [1,2,3,4];

// let mixed = [1,2,2.3, "string", null, undefined];

// console.log(mixed);

// console.log(numbers);

// console.log(fruits[2]);

// ********************* How to check Array Type Of **************

let fruits = ["apple", "mango", "grapes"];

let obj = {}; // object literal

// console.log(fruits);

// fruits[1] = "banana";

// console.log(fruits);

console.log(typeof fruits);
console.log(typeof obj);
console.log(Array.isArray(fruits));
console.log(Array.isArray(obj));

// array indexing

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num);
console.log(num[2]);
console.log(num.length);
