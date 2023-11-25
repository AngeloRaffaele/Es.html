const getResult = (a, b) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (typeof a === "number" && typeof b === "number") {
            return resolve(a * b);
        } else {
            return reject(new Error("a and b must be valid numbers"));
        }
    }, 2000);
});

const init = async () => {
    try {
        const result = await getResult(5, 2);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

init();
