async function fetchData() {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await result.json();
    // let data = [{ name: "Hari" }];
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
