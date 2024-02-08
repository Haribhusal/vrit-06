// var, let, const

// var name = "Ram";

// let age = 34;
// const address = "Nepal";

// Variable Hoisting

// var greeting = "Namaste";
// var greeting = "Hello";

// console.log(favColor);
// let favColor = "Green";
// var age = 33;

// if (age > 30) {
//   var favColor = "Orange";
// }

// console.log(favColor);

// Values with var variables can be redeclared or updated
// let name = "Test";
// name = "New Test";
// console.log(name);

// let variables are block scoped

let favColor = "red";
let age = 23;

if (age == 23) {
  //   console.log("My age was" + age);
  let favColor = "Green";
  //   console.log("My Favourite color is " + favColor);
}
// console.log("My Fav Color is " + favColor);

// Values with the let variables can be update but not redeclared

// Const

const PI = 3.14;

const doubleIt = (num) => num * 2;

console.log(doubleIt(400));

// Values with the const const variables can not be updated, or redeclared

// let day = "Wednesday";

// switch (day) {
//   case "Wednesday":
//     console.log("Today is wednesday");
//     break;
// }
