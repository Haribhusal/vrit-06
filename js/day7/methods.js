// const fruits = ["Banana", "Orange", "Apple", "Mango"];

//convert entire array into string
// let stringVersion = fruits.toString();
// console.log(stringVersion);
// console.log(typeof stringVersion);

// Detect the array item in a specific index
// let fruit = fruits.at(3);
// console.log(fruit);

//Join array items by provided string
// let joinedArray = fruits.join("***");
// console.log(joinedArray);

//Removes the last array item
// fruits.pop();
// console.log(fruits);

//Add new item to an array at last position/index
// fruits.push("Mango");
// console.log(fruits);

//Deletes the first item and second,third... items get lower index than previous
// fruits.shift();
// console.log(fruits);

//adds an item to the begining and other array elements get higher index than previous.
// fruits.unshift("Test Fruit");
// console.log(fruits);

//use arrayName.length to find the array item count.
// console.log(fruits.length);

//assign a new value to specific position.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits[2] = "Kiwi";
// console.log(fruits);

// delete fruits[1];
// console.log(fruits);
// let colors = ["red", "green", "purple"];
// let condition = ["Fresh", "old"];

// let addedColorsToFruitArray = fruits.concat(colors, condition);

// console.log(addedColorsToFruitArray);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.copyWithin(3, 0, 1);
// console.log(fruits);

// Example array
// let newfruits = ["Banana", "Orange", "Apple", "Mango", "Pineapple"];

// Copy elements starting from index 0 to index 3 (exclusive)
// and paste them starting at index 2
// newfruits.copyWithin(2, 1, 3);

// Output the modified array
// console.log(newfruits); // Output:
// ["Banana", "Orange", "Apple", "Mango", "Pineapple"];
// ["Banana", "Orange", "Banana", "Orange", "Apple"]

// let numbers = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// let flatArray = numbers.flat();
// console.log(flatArray);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let sliced = fruits.slice(1, 2);
// console.log(sliced);
// console.log(fruits);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(4, 3, "Kiwi", "Lemon", "Test Fruit");

// console.log(fruits);
let newSplicedArray = fruits.toSpliced(1, 2, "Lemon");
console.log(newSplicedArray);
console.log(fruits);
