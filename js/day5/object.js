let person = {
  fname: "Ramesh",
  lname: "Bista",
  //   Here, full name is method
  fullName: function () {
    return this.fname + " " + this.lname;
  },
  age: 23,
  isMarried: false,
  hobbies: ["Playing", "Travelling"],
  address: {
    city: "Kathmandu",
    country: "Nepal",
    wardNo: 5,
  },
};

// Here we can access the fullName property as an object methods.

let full = person.fullName();
console.log(full);

// Access property of Object
// Two methods
// Using Dot Notation

// console.log(person.age);

// Bracket Notation

// console.log(person["name"]);

// Modify the value

person.age = 24;

// console.log(person.age);

// console.log(person.address.wardNo);
person.address.wardNo = 6;
// console.log(person.address.wardNo);
// console.log(person);
