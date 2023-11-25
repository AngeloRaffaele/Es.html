function caricaModulo(modulo) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      }, 2000);
    });
  }
