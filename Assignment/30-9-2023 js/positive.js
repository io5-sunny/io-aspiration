// 7.check if number if positive or negative
var input = prompt("Enter a number:");

var number = parseFloat(input);

if (isNaN(number)) {
  console.log("Invalid input. Please enter a valid number.");
} else if (number > 0) {
  console.log(number + " is a positive number.");
} else if (number < 0) {
  console.log(number + " is a negative number.");
} else {
  console.log("The number is zero.");
}
