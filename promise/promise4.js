function fetchDataFromAPI() {

    return new Promise((resolve, reject) => {
        const num = Math.random(5) * 0.5;
        setTimeout(() => {
            if (num > 0.15) {
                resolve(console.log((num).toFixed(2)));
            } else {
                reject(new Error("il numero e minore di 0.5"));
            }
        }, 2000)
    });
}

const init = async () => {
    try {
        /*const result =*/ await fetchDataFromAPI();
       // console.log(result); perche se lascio il console log mi dice undefined
    } catch (error) {
        console.log(error.message);
    }
}

init()