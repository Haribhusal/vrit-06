function greet(name, callbackFunction) {
  console.log("Hello, " + name + "!");
  callbackFunction();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
