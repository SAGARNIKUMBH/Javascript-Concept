// Hoisting
// means funcation ko ap variable ke sath access kar sakhte hai.

// E.g :=

function hello() {
  console.log("Hello Sagar");
}

hello();

// but var const let use means delcaretion time pe nahi use kar shakate.

// E.g :=

hello2();

const hello2 = function () {
  console.log("SDDD");
};
