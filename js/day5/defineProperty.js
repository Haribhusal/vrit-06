let person = {
  name: "Shyam",
};

Object.defineProperty(person, "getName", {
  get: function () {
    console.log("Hi" + this.name);
  },
});

Object.defineProperty(person, "setName", {
  set: function (value) {
    this.name = value;
  },
});

person.setName = "Bikash";

person.getName;
