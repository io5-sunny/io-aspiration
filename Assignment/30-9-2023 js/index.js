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

function grossSalary() {
  let bs = prompt(Number("enter a salary"));
  let gs;
  let hra;
  let da;
  if (bs < 1500) {
    hra = (bs * 10) / 100;
    da = (bs * 90) / 100;
  } else {
    hra = 500;
    da = (bs * 98) / 100;
  }
  gs = hra + bs + da;
  console.log(`bs${bs},hra${hra},da${da},gs${gs}`);
}
//grossSalary();

// for(let i=1;i<=10;i++){
//   console.log("3+"${*}+i+${=})
// }
// for (let w = 10; i <= 1; i++) {
//   console.log(`10*${w}=${12 * 40}`);
// }
//for (let i = 1; i <= 100; i++) {
//if (i % 2 == 0) {
// console.log("even number", i);
// }
//}

//If the ages of Ram, Shyam and Ajay are input through the keyboard,
//write a program to determine the youngest of the three.

function personAges() {
  let sy = prompt("shyam age");
  let ay = prompt("ajay age");
  let ram = prompt("ram age");
  if (ram < sy && ram < ay) {
    console.log(`ram is young,ram${ram},sy${sy},ay${ay}`);
  } else if (sy < ay) {
    console.log(`shyam is young,ram${ram},sy${sy},ay${ay}`);
  } else {
    console.log(`ajay is young,ram${ram},sy${sy},ay${ay}`);
  }
}
//personAges();

//Write a program to check whether a triangle is valid or not,
//when the three angles of the triangle are entered through the keyboard.
//A triangle is valid
//if the sum of all the three angles is equal to 180 degrees.

function triangle() {
  let s1 = prompt("enter first side");
  let s2 = prompt("enter second side");
  let s3 = prompt("enter third side");
  if (Number(s1) + Number(s2) + Number(s3) == 180)
    console.log("triangle is valid");
  else {
    s1 + s2 + s3 != 180;
    console.log("triangle not valid");
  }
}
//triangle();

//12 //Write a program to find the absolute value of a number
//entered through the keyboard. (non-negative number)

function absoluteValue() {
  let number = prompt("enter a value");
  if (isNaN(number)) {
    console.log("please enter valid number");
  } else if (number > 0) {
    console.log(`enter number ${number} is absolute value`);
  } else {
    console.log("number is negative");
  }
}
//absoluteValue();

//13Given the length and breadth of a rectangle,
//write a program to find whether the area of the rectangle is greater
//than its perimeter. For example, the area of the
//rectangle with length = 5 and breadth = 4 is greater than its perimeter.

function areaRectAngle() {
  let length = prompt("enter length of rectangle");
  let breadth = prompt("enter breadth of rectangle");
  let areaRectAngle = length * breadth;
  console.log("area of rectangle", areaRectAngle);
  let perimeter = 2 * (Number(length) + Number(breadth));
  console.log("rectangle perimeter ", perimeter);
  if (areaRectAngle > perimeter) {
    console.log("area of rectangle greater");
  } else {
    console.log("perimeter is greater");
  }
}
//areaRectAngle();

//14.The marks obtained by a student in 5
//different subjects are input through the keyboard.
//The student gets a division as per the following rules:

//Percentage above or equal to 60 - First division
//Percentage between 50 and 59 - Second division
//Percentage between 40 and 49 - Third division
//Percentage less than 40 - Fail

function student() {
  let math = Number(prompt("enter math obtained number"));
  let eng = Number(prompt("enter english  obtained number"));
  let sci = Number(prompt("enter science  obtained number"));
  let phy = Number(prompt("enter physical  obtained number"));
  let sst = Number(prompt("enter sst  obtained number"));
  totalMarks =
    Number(math) + Number(eng) + Number(sci) + Number(phy) + Number(sst);
  console.log("student total marks obtained", totalMarks);
  percentage = (totalMarks / 500) * 100;
  console.log("total percentage of student", percentage);

  if (percentage >= 60) {
    console.log(`the student is first division in class`);
  } else if (percentage >= 50 && percentage <= 59) {
    console.log(`student second position in class`);
  } else if (percentage >= 40 && percentage <= 49) {
    console.log(`student third position in class`);
  } else console.log(`student is fail in class`);
}
//student();

16; //. A company insures its drivers in the following cases: -
//_If the driver is married._
//  _//If the driver is unmarried , male & above 30 years of age._
// _If the driver is unmarried, female & above 25 years of age._
// In all other cases, the driver is not insured. If the marital status,
//sex and age of the driver are the inputs,
// write a program to determine whether the driver should be insured or not.
