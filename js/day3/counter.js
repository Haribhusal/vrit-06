function countDigits(e) {
  console.log(e);
  e.preventDefault();
  const userNumber = parseInt(document.getElementById("userNumber").value);

  let count = 0;
  let number = userNumber;

  for (let i = 0; number > 0; i++) {
    number = parseInt(number / 10);
    count++;
  }

  document.getElementById("result").innerText = `Number of digits:${count} `;
}
