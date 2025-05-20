const myName = async () => {
    const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Asif Abir");
        }, 5000);
    })
    return result;
}

myName().then((res) => {
    console.log(res);
})