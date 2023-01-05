// ***************  objects reference type  *********************
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

//*******************  how to create objects **************************

// const person = {name:"Harshit",age:22};

const person = {
  name: "Sagar",
  age: 32,
  hobbies: ["driving", "Visiting new Places", "listening music"],
};
console.log(person);

// ****************** how to access data from objects ***********************

console.log(person["name"]);

console.log(person["age"]);

console.log(person.hobbies);

// ******************* how to add key value pair to objects *****************
person["person"] = "male";
console.log(person);

// ********************** Example No.02 ********************************

const details = {
  ownName: "Sunny",
  flatNo: 02,
  Address: "Sadguru Nagar",
  totalMembersName: ["Sagar", "babu", "Ashi", "Kamini"],
};

console.log(details);
console.log(details["flatNo"]);
console.log(details["ownName"]);
console.log(details.totalMembersName[3]);

console.log(details.flatNo);
console.log(details.Address);

// ****************** difference between dot and bracket notaion *****************************

const key = "email";

const person3 = {
  name: "harshit",
  age: 22,
  "person hobbies": ["guitar", "sleeping", "listening music"],
};

console.log(person3["person hobbies"]);
person[key] = "harshitvashisth@gmail.com";
console.log(person);


// ********************** computed properties *****************************

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

//  show the output :- 
// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }

// solve the program :-
// this methods use mostly :-

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }


// second way solve the problem

const obj = {};

obj[key1] = value1;
obj[key2] = value2;
console.log(obj);

