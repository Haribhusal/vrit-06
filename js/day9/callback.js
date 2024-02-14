function greet(name, callBackFunction) {
  console.log("Hello " + name);
  setTimeout(function () {
    callBackFunction();
  }, 3000);
}

function sayGoodBye() {
  console.log("Goodbye");
}
greet("Hari", sayGoodBye);
