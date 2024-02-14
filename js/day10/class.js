// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let person1 = new Person("Hari", 26);
// let person2 = new Person("Shyam", 34);

// console.log(person2.age);

class Person {
  constructor() {
    this.name = "Hari";
    this.age = 23;
    this.address = "KTM";
  }
}

let person1 = new Person();
let person2 = new Person();

// console.log(person2.address);

function User(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

let user1 = new User("Ramesh", "Shrestha", 23, "Black");

console.log(user1.age);
