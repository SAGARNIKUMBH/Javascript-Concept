//  ***************** Function retruning Function ***********************

// Example No.01

function myFun() {
  function myName() {
    return "Hello Sagar";
  }
  return myName;
}

const ans = myFun();
console.log(ans());
