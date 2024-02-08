function Person(name, age) {
  (this.name = name), (this.age = age);
  this.greet = function () {
    return "Hi" + " " + this.name;
  };
}

let person1 = new Person("Ramesh", 23);
let person2 = new Person("Shyam", 34);

// console.log(typeof person1);

// console.log(person1.name);
// console.log(person1.age);

// console.log(person2.name);

console.log(person1.greet());
console.log(person2.greet());
