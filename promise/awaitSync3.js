function caricaModulo(modulo) {
    return new Promise((resolve, reject) => {
      const tempoCaricamento = Math.random() * 3000; // Simula il caricamento con un ritardo casuale fino a 3 secondi.
      setTimeout(() => {
        if (tempoCaricamento < 1500) {
          resolve(`Il modulo ${modulo} è stato caricato.`);
        } else {
          reject(`Errore durante il caricamento del modulo ${modulo}.`);
        }
      }, tempoCaricamento);
    });
  }

  const init = async () => {
    try {
        const result = await caricaModulo();
        console.log(result);
    } catch (error) {
        console.log(error.massage);
    }
}

init();