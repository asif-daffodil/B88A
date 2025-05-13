for (var i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    if(i === 8) {
        break;
    }
    console.log(i);
}

var myStd = ["Captain", "Saudi", "Raju", "Alif", "Riaj", "Turja"];
// print each value with foreach loop except "Saudi" by using continue

myStd.forEach(std => {
    if(std == "Saudi"){
        console.log("Arabia");
        return;
    }
    console.log(std);
});