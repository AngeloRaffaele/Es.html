const person = { name: "John", age: 30 };

const fetchDataFromAPI = (data) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (typeof data === "object") {
     return resolve (data);
    }else{
      return reject("dati non recuperati")
    }  
  }, 2000);
}) ;

const dati = fetchDataFromAPI(person).then((person) =>{
    console.log(fetchDataFromAPI(person));
  });
