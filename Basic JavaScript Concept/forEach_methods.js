// important array methods

const numbers = [4, 2, 5, 8];

function myFunc(number, index) {
  console.log(`index is ${index} number is ${number}`);
}
// myFunc(numbers);

numbers.forEach(function (number, index) {
  console.log(`index is ${index} number is ${number}`);
});

numbers.forEach(function (number, index) {
  console.log(number * 3, index);
});

const users = [
  { firstName: "Sagar", age: 23 },
  { firstName: "Kanchan", age: 21 },
  { firstName: "Aishu", age: 22 },
  { firstName: "Vedu", age: 20 },
];

users.forEach(function (user) {
  console.log(user.firstName);
});

users.forEach(function (user) {
  console.log(user.age);
});

users.forEach((user, index) => {
  console.log(user.firstName, index);
});

// Using For OF Loop :

for (let user of users) {
  console.log(user.firstName);
}


