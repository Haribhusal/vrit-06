function Person(name, age) {
  this.name = name;
  this.age = age;
  // this.gender = "Male";
}
// Constructor Function

let person1 = new Person("Ramesh", 23);
let person2 = new Person("Shyam", 34);

Person.prototype.gender = "Male";
Person.prototype.address = "ktm";

console.log("checking", person1.__proto__);

Person.prototype.greet = function () {
  console.log(`Hi ${this.name}`);
};

person1.greet();
person2.greet();
