const person = { name: "John", age: 30 };

function fetchDataFromAPI(callback) {
  setTimeout(() => {
    callback(person);
  }, 2000);
}

function handleData(data) {
  console.log("Dati recuperati:", data);
}

fetchDataFromAPI(handleData)