let person = {
  name: "Smith",
  age: 34,
  address: {
    city: "Kathmandu",
    country: "Nepal",
    wardNo: 3,
  },
  fullAddress: function () {
    return `Full Address : ${this.address.wardNo}, ${this.address.city}, ${this.address.country}`;
  },
};
console.log(person.fullAddress());

// console.log(person.address.wardNo);
// console.log(person["address"]["wordNo"]);

// let pName = person.name; // Accessing the property of object using Dot Notation
// let pAge = person["age"]; // Accessing property of object using Bracket Notation

// console.log(pName, pAge);
