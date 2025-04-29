// console.log("Hello, World!");
var $rajuHossain_123 = "Hello, Raju Hossain!";
// console.log($rajuHossain_123);

var $rajuHossain_123 = "Hello, Raju Hossain! How are you?";
// console.log($rajuHossain_123);

// data types

// primitives
var name = "Raju Hossain"; // string
var age = 25; // number
var isStudent = true; // boolean
var height = 5.8; // number (float)
var isMarried = false; // boolean
var birthDate = null; // null
var address; // undefined

var symbol = Symbol("unique"); // symbol
var bigInt = BigInt(123456789012345678901234567890); // BigInt

// non-primitives
var hobbies = ["reading", "traveling", "coding"]; // array
var person = { name: "Raju", age: 25 }; // object
var myFunction = function () {
    console.log("This is a function");
}

// console.log(typeof "raju"); 

// Operators
// Arithmetic Operators
/**
 * + Addition
 * - Subtraction
 * * Multiplication
 * / Division
 * % Modulus
 * ** Exponentiation (ES6)
 */

// Assignment Operators
/**
 * = Assigns a value to a variable
 * += Adds and assigns
 * -= Subtracts and assigns
 * *= Multiplies and assigns
 * /= Divides and assigns
 * %= Modulus and assigns
 * **= Exponentiation and assigns (ES6)
 */

var x = 10;
var y = 5;
x = x + y;
x += y;
x -= 2;
x *= 2;
x /= 12;
x %= 2;
x **= 2; // x = x ** 2


// Comparison Operators
/**
 * == Equal to
 * === Strict equal to (checks value and type)
 * != Not equal to
 * !== Strict not equal to (checks value and type)
 * > Greater than
 * < Less than
 * >= Greater than or equal to
 * <= Less than or equal to
 */

// var a = 10;
// var b = "10";
// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a !== b);

// Logical Operators
/**
 * && Logical AND
 * || Logical OR
 * ! Logical NOT
 */
var c = 6;
var d = "6";

// console.log(c == d && c === d);
// console.log(c == d || c === d);
// console.log(!(c == d && c === d));

// ternary operator and nullish coalescing operator
// ? :
// ??
var age = 22;
var res = age >= 18 ? age : "You are a minor";
// console.log(res);
var city;
console.log(city ?? "City not found");
