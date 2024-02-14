// function greet(name, callback) {
//   setTimeout(function () {
//     console.log("Hello" + name);
//     callback();
//   }, 3000);
// }

// function display() {
//   console.log("I am showing the value");
// }

// greet("Hari", display);

function delayedMessage(message, delay, additionalArg1, additionalArg2) {
  setTimeout(
    function (arg1, arg2) {
      console.log(message, arg1, arg2);
    },
    delay,
    additionalArg1,
    additionalArg2
  );
}

delayedMessage("Hello", 2000, "world", 123);
