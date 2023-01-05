// ************************ Objects inside array ***********************************

// very useful in real world applications

const users = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "mohit", gender: "male" },
  { userId: 3, firstName: "nitish", gender: "male" },
];

// for(let user of users){
//     console.log(user.firstName);
//     console.log(user.userId);
//     console.log(user.gender);
// }

// ********************* nested destructuring ***************************************

const users2 = [
  { userId: 1, firstName: "harshit", gender: "male" },
  { userId: 2, firstName: "mohit", gender: "male" },
  { userId: 3, firstName: "nitish", gender: "male" },
];

const [{ firstName: user1firstName, userId }, , { gender: user3gender }] =
  users2;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);
