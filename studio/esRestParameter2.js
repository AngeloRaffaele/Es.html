function filterOutOdds (...parametri) {
    return parametri.filter(number => number %2 === 0 );
}
const rest = filterOutOdds(10,25,17,19,45,44,2,8,6);
 console.log(rest);