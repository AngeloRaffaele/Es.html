function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const id = setInterval(() => {
    console.log(`il dado1 è - ${getRandomInt(7)}`);
    console.log(`il dado2 è - ${getRandomInt(7)}`);
  }, 2000);

  console.log("lancio dei dadi in corso...");

  setTimeout(() => {
clearInterval(id);
  }, 2200);
 