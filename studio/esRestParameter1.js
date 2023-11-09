 const numeri = somma (1,7,8,9,2,5);
 function somma(...parametri) {
    return parametri.reduce((a, number) => a + number ,0);
}

console.log(numeri);