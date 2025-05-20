const myFunc1 = async () => {
    return "Hello";
}

myFunc1().then(res => {
    return res + " World";
}).then(res => {
    return res + "!";
}).then(res => {
    console.log(res);
}).catch(e => {
    console.log(e);
});