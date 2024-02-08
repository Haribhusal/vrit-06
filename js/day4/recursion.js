function recursion(number) {
  console.log(number);
  let smallNumber = number - 1;

  if (smallNumber > 0) {
    recursion(smallNumber);
  }
}

recursion(10);
