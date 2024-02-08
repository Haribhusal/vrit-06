// let x = function (a, b) {
//   return a + b;
// };

// // let y = (a, b) => a + b; //Arrow Function

// // console.log(x(2, 3));
// // console.log(y(2, 3));

// // program showing block-scoped concept
// // global variable
// let a = "Hello";

// function greet() {
//   // local variable
//   let b = "World";

//   console.log(a + " " + b);

//   if (b == "World") {
//     // block-scoped variable
//     let c = "hello";

//     console.log(a + " " + b + " " + c);
//   }

//   // variable c cannot be accessed here
//   console.log(a + " " + b + " " + c);
// }

// greet();

// program to display value
var a = 4;

function greet() {
  var b = "hello";
  console.log(b); // hello
  //   var b;
}

greet(); // hello
// console.log(b);
