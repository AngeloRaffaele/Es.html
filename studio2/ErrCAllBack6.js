function performOperation(a, b, callback) {
  const result = a * b;
  if (isNaN(result)) {
      const error = new Error("Risultato non valido")
      console.log(error.message);
      callback(error);
  } else {
      callback(null, result)
  }
}

function displayResult(error, result) {
  if (error) {
      console.error(`Errore durante la visualizzazione del risultato: ${error.message}`);
  } else {
      console.log(`Il risultato dell'operazione è: ${result}`);
  }
}

performOperation(5, 3, displayResult);