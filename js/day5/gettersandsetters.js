let person = {
  fname: "Ramesh",
  lname: "Bista",
  get getFname() {
    return this.fname;
  },
  set setFname(value) {
    this.fname = value;
  },
};

person.setFname = "Bikash";

console.log(person.fname);
