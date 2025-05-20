const n1 = 30;
try {
    if(n1 > 5) {
        console.log("n1 is greater than 5");
    }else{
        throw new Error("This is an error");
    }
} catch (err) {
    console.log(err.message);
} finally {
    console.log("This will always run");
}