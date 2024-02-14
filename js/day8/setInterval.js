let promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve("Hello, I am successful");
    reject("I can not do this");
  }, 2000);
});

promiseOne
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
