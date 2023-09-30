// If a five-digit number is input through the keyboard, write a program to calculate the sum of its digits. (Hint: Use the modulus operator ‘%’)

// var n = prompt("Enter a value: ");
// var digit,
//   result = 0;

// while (n) {
//   digit = n % 10;
//   result = result * 10 + digit;
//   n = (n / 10) | 0;
// }

// console.log(result);

// 2 If a five-digit number is input through the keyboard, write a program to calculate the sum of its digits. (Hint: Use the modulus operator ‘%’)

var input = prompt("Enter a five-digit number:");

if (input.length !== 5 || isNaN(input)) {
  console.log("Invalid input. Please enter a valid five-digit number.");
} else {
  var number = parseInt(input, 10);
  var sum = 0;

  while (number > 0) {
    sum += number % 10;

    number = Math.floor(number / 10);
  }
  console.log("The sum of digits is: " + sum);
}

//  5. Consider a currency system in which there are notes of seven denominations, namely, Rs. 1, Rs. 2, Rs. 5, Rs. 10, Rs. 50, Rs. 100. Is a sum of Rs. N is entered through the keyboard, write a program to compute the smallest number of notes that will combine to give Rs. N

var input = prompt("Enter a sum in Rs.:");
var amount = parseInt(input, 10);

var denominations = [100, 50, 10, 5, 2, 1];

var notesCount = 0;

for (var i = 0; i < denominations.length; i++) {
  var denomination = denominations[i];

  if (amount >= denomination) {
    var count = Math.floor(amount / denomination);
    notesCount += count;
    amount -= count * denomination;
  }
}

console.log("The smallest number of notes required is: " + notesCount);
