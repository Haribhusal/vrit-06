function Person(value) {
  this.name = value;
}

let person1 = new Person("Ramesh");
let person2 = new Person("Shyam");
console.log(person1.name);

Person.prototype.age = 23;

// console.log(Person.prototype);
console.log(person1.age);
console.log(person2.age);
