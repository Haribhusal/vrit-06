let student = {};

student.name = "Ramesh";

console.log(student);
// here we can assign a method to empty object
student.greet = function () {
  console.log("Hello" + " " + this.name);
};

student.greet();
