// Make a program that reads a seller's name, his/her fixed salary and the sale's total made by himself/herself in the month (in money). Considering that this seller receives 15% over all products sold, write the final salary (total) of this seller at the end of the month , with two decimal places.

// - Don’t forget to print the line's end after the result, otherwise you will receive “Presentation Error”.

// - Don’t forget the blank spaces.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var sellerName = lines[0];
var basicSalary = parseFloat(lines[1]);
var totalSold = parseFloat(lines[2]);

var finalSalary = basicSalary + (totalSold * 0.15);
console.log("TOTAL = R$ " + finalSalary.toFixed(2));
