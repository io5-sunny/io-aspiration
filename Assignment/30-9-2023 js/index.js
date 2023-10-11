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

// var input = prompt("Enter a five-digit number:");

// if (input.length !== 5 || isNaN(input)) {
//   console.log("Invalid input. Please enter a valid five-digit number.");
// } else {
//   var number = parseInt(input, 10);
//   var sum = 0;

//   while (number > 0) {
//     sum += number % 10;

//     number = Math.floor(number / 10);
//   }
//   console.log("The sum of digits is: " + sum);
// }

//  5. Consider a currency system in which there are notes of seven denominations, namely, Rs. 1, Rs. 2, Rs. 5, Rs. 10, Rs. 50, Rs. 100. Is a sum of Rs. N is entered through the keyboard, write a program to compute the smallest number of notes that will combine to give Rs. N

// var input = prompt("Enter a sum in Rs.:");
// var amount = parseInt(input, 10);

// var denominations = [100, 50, 10, 5, 2, 1];

// var notesCount = 0;

// for (var i = 0; i < denominations.length; i++) {
//   var denomination = denominations[i];

//   if (amount >= denomination) {
//     var count = Math.floor(amount / denomination);
//     notesCount += count;
//     amount -= count * denomination;
//   }
// }

// console.log("The smallest number of notes required is: " + notesCount);

// .4 If a four-digit number is input through the keyboard, write a program to obtain the sum of the first and last digit of this number. (Hint: Use the modulus operator ‘%’)

// function sumOfFirstAndLastDigit() {
//   const num = prompt("enter any 4 digit number from keyboard");

//   let a = Math.trunc(num % 10);
//   let b = Math.trunc(num / 10) % 10;
//   let c = Math.trunc(num / 100) % 10;
//   let d = Math.trunc(num / 1000) % 10;

//   console.log("this is number", a, b, c, d);
//   const sum = a + d;
//   console.log(`The sum of ${num} is ${sum}`);
// }
// sumOfFirstAndLastDigit();
// In a company an employee is paid as under:
// If his basic salary is less than Rs. 1500, then HRA = 10% of
// basic salary and DA = 90% of basic salary.
//  If his salary is either equal to or above Rs. 1500,
//   then HRA = Rs. 500 and DA = 98% of basic salary.
//    If the employee's salary is input through the keyboard
//     write a program to find his gross salary.

// function grosssalary() {
//    HRA = 10%
//    DA = 90%
//        HRA =10*10/100;
//   DA = 90*10/100;
//   BS=HRA+DA/100
//   grosssalary=HRA+DA+BS

// }

// for(let i=1;i<=10;i++){
//   console.log("3+"${*}+i+${=})
// }
// for (let w = 10; i <= 1; i++) {
//   console.log(`10*${w}=${12 * 40}`);
// }
for (let i = 1; i <= 100; i++) 
  {if(i%2==0){
    console.log{"even number";i};
  }}

