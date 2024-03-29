const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  }, 5000);
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});

promise1.then((res) => console.log(res));
promise2.then((res) => console.log(res));
promise3.then((res) => console.log(res));

// Promise.all([promise1, promise2, promise3]).then((res) => {
//   console.log(res[0]);
//   console.log(res[1]);
//   console.log(res[2]);
// });
