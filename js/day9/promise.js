const promise = new Promise((resolve, reject) => {
  const res = true;
  // An asynchronous operation.
  let foundData = ["Ram", "Shyam", "Ramesh"];
  if (res) {
    resolve(foundData);
  } else {
    reject("Problem working on asynchronous task");
  }
});
promise.then(
  (res) => console.log(res),
  (err) => console.log(err)
);
