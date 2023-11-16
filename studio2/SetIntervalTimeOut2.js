let tempoRimanente = 10;

const id = setInterval(()=>{
    console.log(tempoRimanente);
    tempoRimanente--;

},1000);

setTimeout(() => {
    clearInterval(id);
    console.log("time finish");
},12000);