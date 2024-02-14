let numbers = [2, 4, 6, 8];

// let doubledNumbers = numbers.map(function (item) {
//   return item * 2;
// });

// console.log(doubledNumbers);

// find squares of each array elemnt and make new array for it.
// Use separate function expression.

// function squareNum(num) {
//   return num * num;
// }

// let squared = numbers.map(squareNum);
// console.log(squared);

let users = ["Ram", "Shyam", "Ramesh"];
// let newGreetArray = users.map((user) => `Hi ${user}`);
let newGreetArray1 = users.map(function (user) {
  let fristLetter = user.substring(0, 1);
  return fristLetter;
});
console.log(newGreetArray1);
