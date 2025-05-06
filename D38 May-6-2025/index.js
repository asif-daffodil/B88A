function decrementNumber (num) {
    if (isNaN(num)) {
        console.log("Invalid number");
    }else if (num < 0){
        console.log("Number is less than 0");
    }else{
        while (num >= 0) {
            console.log(num);
            num++;
        };
    }
}

decrementNumber(5);
decrementNumber(-1);
decrementNumber("hello world");