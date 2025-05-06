var myStudents = ["Saudi", "Captain", "Raju", "Riaz"];

console.log(myStudents);
console.log(myStudents[0]);
console.log(myStudents[1]);
console.log(myStudents[2]);
console.log(myStudents[3]);
console.log(myStudents.length);
myStudents[0] = "Ali";
myStudents.push("Aslam");
myStudents.push("Atik", "Rafiq");
myStudents.pop();
myStudents.unshift("Bulbul");
myStudents.unshift("Abul", "Babul", "Kabul");
myStudents.shift();
for (var i = 0; i < myStudents.length; i++) {
    console.log(myStudents[i]);
}

myStudents.forEach(function (std) {
    console.log(std);
})

var randomNumber = [5, 15, 3, 6, 2, 1, 4, 8, 7, 23, 9, 0, 90, 12, 11, 10, 13, 14, 16, 17, 18, 19, 20, 21, 22, 24, 25];
// sort the array in ascending order
randomNumber.sort(function (a, b) {
    return a - b;
});
console.log(randomNumber);

// sort the array in descending order
randomNumber.sort(function (a, b) {
    return b - a;
});
console.log(randomNumber);

var gaterThanFive = randomNumber.filter(function (num) {
    return num > 20;
});
console.log(gaterThanFive);