function $myFunc_123 (dalal, xyz) {
    console.log(dalal, xyz);
}

// $myFunc_123 ("hello world", "hello universe");

// console.log(sum(5, 10));
// console.log(sum(6, 11));
// function defined after the call. And it will work because of hoisting.

function sum (n1, n2) {
    return n1 + n2;
    console.log("hello world"); // This line will never be executed
}

function calculate (n1, n2, operation) {
    switch (operation) {
        case "add":
            return n1 + n2;
        case "subtract":
            return n1 - n2;
        case "multiply":
            return n1 * n2;
        case "divide":
            return n1 / n2;
        default:
            return "Invalid operation";
    }
}

// console.log(calculate(5, 10, "add"));
// console.log(calculate(15, 10, "subtract"));
// console.log(calculate(5, 10, "multiply"));
// console.log(calculate(10, 5, "divide"));

// callback function
function greet(name) {
    console.log("Hello, " + name + "!");
}

function processUserInput(callback) {
    callback("John Doe");``
}

// processUserInput(greet);

var myFunc = function (a, b) {
    return a + b;
}

// console.log(myFunc(5, 10));

// js fat arrow function
var myArrFunc1 = (a, b) => {
    return a + b;
}

var myArrFunc2 = a => {
    return a;
}

var myArrFunc3 = a => a;

// console.log(myArrFunc3(5));

// recursion function
var factorial =  n => {
    if (n === 0 || n === 1) {
        return 1;
    } 
    return n * factorial(n - 1);
}

console.log(factorial(4));

function otherFunc (a = 1) {
    return a + 1;
}

// console.log(otherFunc(5))