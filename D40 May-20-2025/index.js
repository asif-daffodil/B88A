// promise
const num = 5;
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (num > 10) {
            resolve(num);
        } else {
            reject(num);
        }
    }, 1000);
});

myPromise.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log("Rejected with:", err);
});