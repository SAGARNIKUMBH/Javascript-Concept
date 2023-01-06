// function Inside function

// ********************* Example No. 01 **************************

function app() {
  const myFun = () => {
    console.log("Hello Sagar Nikumbh");
  };
  const addTwo = (num1, num2) => {
    return num1 + num2;
  };
  const multi = (num1, num2) => {
    return num1 * num2;
  };
  console.log("Out For Function");
  console.log(addTwo(5, 2));
  console.log(multi(5, 2));
}
app();
