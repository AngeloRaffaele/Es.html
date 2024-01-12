function caricaModulo(modulo) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Il modulo ${modulo} è stato caricato.`);
      }, 2000);
    });
  }

  
async function lanciaVeicoloSpaziale() {
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
    console.error(error);
  }
}

lanciaVeicoloSpaziale();