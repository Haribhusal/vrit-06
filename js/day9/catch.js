const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Can not able to send you data"));
  }, 1000);
});

promise.then((res) => {
  console.log(res);
});
promise.catch((err) => {
  console.log(err);
});
