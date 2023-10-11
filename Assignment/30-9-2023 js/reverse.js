//3 if a five-digit number is input through the keyboard, program to reverse the number. (Hint: Use the modulus operator ‘%’)
var input = prompt("Enter a five-digit number:");

if (input.length !== 5 || isNaN(input)) {
  console.log("Invalid input. Please enter a valid five-digit number.");
} else {
  var number = parseInt(input, 10);

  var reversedNumber = 0;

  while (number > 0) {
    var digit = number % 10;
    reversedNumber = reversedNumber * 10 + digit;

    number = Math.trunc(number / 10);
  }
  console.log("The reversed number is: " + reversedNumber);
}
