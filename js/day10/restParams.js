const sum = (...numbers) => {
  let total = 0;

  for (num of numbers) {
    total += num;
  }
  return total;
};

console.log(sum(1, 2, 3, 4, 5, 2, 6, 1, 67, 77, 44, 662, 23, 332, 34, 56));
