function fetchData() {
  return new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
      const data = "Some data";
      resolve(data); // Success
      // reject(new Error('Failed to fetch data')); // Error
    }, 1000);
  });
}

async function getData() {
  try {
    const data = await fetchData(); // Wait until fetchData promise resolves
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}


getData();
