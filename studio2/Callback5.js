function performOperation(a, b, callback) {
    const sum=a+b;
    callback();
     console.log(sum);
   return sum;
  
  }
  
  function displayResult(result) {
    return result;
  }
  
  performOperation(5, 3, displayResult);