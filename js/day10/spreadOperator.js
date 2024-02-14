let fruitset1 = ["Apple", "Banana"];
let fruitset2 = ["Orange", "Pineapple"];
let fruitset3 = ["Mango", "Kiwi"];

let allFruits = [...fruitset1, ...fruitset2, ...fruitset3];

for (fruit of allFruits) {
  // looping through all the fruits using of keyword.
  console.log(fruit + " is nice fruit");
}
