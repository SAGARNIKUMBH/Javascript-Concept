// For Loop

// Print 0 to 9

for (let i = 0; i <= 9; i++) {
  console.log(i);
}
// console.log(`show the total num of i ${i}`);

// ***************** Example No.01 ************************

// Print sum of 10

let total = 0;
let num = 10;

for (let i = 0; i <= num; i++) {
  total = total + i;
}
console.log(total);

// ************* Using a  Break keyword in for Loop ******************

for (let i = 0; i <= 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}

// ************** Continue KeyWord use in for Loop *******************

for (let i = 0; i <= 10; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
