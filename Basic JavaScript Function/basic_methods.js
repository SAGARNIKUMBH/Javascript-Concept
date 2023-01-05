// Basic Methods :-

// trim()
// toUpperCase()
// toLowerCase()
// slice()

let firstName = "harshit";

console.log(firstName.length);

firstName = firstName.trim(); // "harshit" remove the empty space show the output
console.log(firstName);

console.log(firstName.length);
firstName = firstName.toUpperCase();
firstName = firstName.toLowerCase();
console.log(firstName);

// start index
// end index

// let newString = firstName.slice(0, 4); // hars
let newString = firstName.slice(1); // arshit
console.log(newString);
