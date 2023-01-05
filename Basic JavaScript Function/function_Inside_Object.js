// methods

// function inside object

function personInfo() {
  console.log(`person name is ${this.firstName} and age is ${this.age}`);
}

const person1 = {
  firstName: "Sagar",
  age: 32,
  about: personInfo,
};
const person2 = {
  firstName: "Sunny",
  age: 31,
  about: personInfo,
};
const person3 = {
  firstName: "Neha",
  age: 29,
  about: personInfo,
};

person1.about();
person2.about();
person3.about();
