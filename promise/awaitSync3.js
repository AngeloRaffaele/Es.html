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
  };

async function init() {
  try {
    const A = await caricaModulo("A");
    console.log(A);
    const B = await caricaModulo("B");
    console.log(B);
    const C = await caricaModulo("C");
    console.log(C);
    const messaggioFinale = "Veicolo spaziale pronto per il lancio!";
    console.log(messaggioFinale);
  } catch (error) {
    console.log(error);
  }
};

init();
