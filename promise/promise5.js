function callback_BasedFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
        const result = arg1 + arg2;
        setTimeout(() => {
            if (result % 2 !== 0) {
                resolve(result);
            } else {
                reject(new Error('Result is not odd!'));
            }
        }, 2000);
    });
}

const init = async () => {
    try {
        const result = await callback_BasedFunction(5, 6);
        console.log(result);
    } catch (error) {
        console.log(error.message);
    }
}

init()