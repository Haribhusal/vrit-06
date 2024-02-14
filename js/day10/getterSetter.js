class Person {
  constructor(name) {
    this.name = name;
  }
  get getName() {
    return this.name;
  }

  set setName(value) {
    this.name = value;
  }
}

let person1 = new Person("Hari");

person1.setName = "Shyam";

console.log(person1.getName);
