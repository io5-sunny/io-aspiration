// 6 Any integer is input through the keyboard. Write a program to find out whether it is an odd number or even number.
var input = prompt("Enter an integer:");

var number = parseInt(input, 10);

if (isNaN(number)) {
  console.log("Invalid input. Please enter a valid integer.");
} else {
  if (number % 2 === 0) {
    console.log(number + " is an even number.");
  } else {
    console.log(number + " is an odd number.");
  }
}
