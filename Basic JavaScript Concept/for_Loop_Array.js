// ***********************  for loop in array *******************************

let fruits = ["apple", "mango", "grapes", "banana"];

// for(let i=0; i<=9;i++){
//     console.log(i);
// }

// console.log(fruits.length);
// console.log(fruits[fruits.length-2]);

let fruits2 = [];

for (let i = 0; i < fruits.length; i++) {
  fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);

// ********************* Example No.02 *************************

// Q.1 show the all element in new array
// Q.2 uppercase
// Q.3 length

const fullname = ["sagar", "kanchan", "aishu", "vedant"];

let name2 = [];

for (let i = 0; i < fullname.length; i++) {
  name2.push(fullname[i].toUpperCase());
}
console.log(name2);
console.log(name2.length);

// for (let i = 0; i < fullname.length; i++) {
//   name2.pop(fullname[fullname.length[i]]);
// }
// console.log(`name 2 is ${name2}`);
