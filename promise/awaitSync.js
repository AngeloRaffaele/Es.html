
function caricamentoDati(dati) {
     return new Promise((resolve,reject) => {
    const num = dati + 10;
      setTimeout(() => {
        if (num > 7) {
            resolve(num);    
        }else{
            reject(new Error('Result is not odd!'))
        }
      }, 2000);
    });
  }

  const init = async () => {
        try {
            const result = await caricamentoDati(10);
            console.log(result);
        } catch (error) {
            console.log(error.massage);
        }
  }

  init();