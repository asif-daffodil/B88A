const myFunc1 = async () => {
    return "Hello";
}

const myFunc2 = async () => {
    const result = await myFunc1();
    return result + " World";
}

myFunc2().then((res) => {
    console.log(res);
})