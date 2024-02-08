// let i = 10;

// while (i > 0) {
//   console.log(i);
//   i--;
// }

// let i = 10;
// do {
//   console.log(i);
//   i++;
// } while (i < 20);

// let numbers = prompt("How many numbers you want to add?");

// let i = 1;
// let sum = 0;
// while (i <= numbers) {
//   let nvalues = parseInt(prompt(`Enter ${i} number`));
//   sum += nvalues;
//   i++;
// }

// alert(`The sum is ${sum}`);

for (let i = 1; i <= 3; i++) {
  // second loop

  for (let j = 1; j <= 3; j++) {
    if (i == 2) {
      break;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
