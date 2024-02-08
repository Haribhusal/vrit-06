function Person(name) {
  this.name = name;
}

let person1 = new Person("Ramesh");
let person2 = new Person("Shyam");

person1.greet = function () {
  console.log("Hi" + this.name);
};

person1.greet();
// person2.greet();
// person1.age = 30;
// console.log(person1.age);
// console.log(person2.age);
