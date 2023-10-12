// Ramesh's basic salary is input through the keyboard.
// His dearness allowance is 40% of basic salary,
// and house rent allowance is 20% of basic salary.
//  Write a program to calculate his gross salary

//  => Formula for Gross salary : Salary +  DA + RA

// 1. enter salary from keyboard:  Number, prompt,
// 1000 * 40 / 100
// 100- * 20 /100
// 1000 + 400 + 200

function grossSalary() {
  //    DA = 40%
  let DA = 40;

  let number = prompt("enter number from keyboard");

  let DearnessA = (number * DA) / 100;
  console.log("basic allowance", DearnessA);
  let HRA = 20;

  let rentAllowance = (number * HRA) / 100;
  console.log("rent allowance", rentAllowance);
  let GS = Number(number) + Number(DearnessA) + Number(rentAllowance);
  console.log("gross salary", GS);
}
// grossSalary();

// -2- /-----------------------------------------------------
/**
The distance between two cities (in km) entered through key board.
write a program to calculate distance in meters, feet and centimeter
*/

// Formula to calculate feet from km === km * 3280.84
// formula to calculate inch from km == 1ft * 12inch * km
// formula to calculate km to mtr == km(1) * mtr(1000) * cm(100)

function twoCities() {
  let km = prompt("enter a km from keyboard");
  let feet = km * 3280.84;
  console.log("total feet", feet);
  let inch = feet * 12;
  console.log("total inch", inch);
  let meter = 1000 * km;
  console.log("total meter", meter);
  let cm = 100 * 1000;
  console.log("total cm", cm);
}
// twoCities();

// -3- /-----------------------------------------------------
/*
Enter the marks of 5 subject of student and find the aggregate(average)
 and percentage of all.
 Mark should not be greater than 100. 
*/
// Formula aggregate = totalMarks / number of subjects
// Formula Percentage = (obtained marks / Total marks) * 100

function student() {
  let math = prompt("enter  marks of math ");
  let eng = prompt("enter marks of eng");
  let sci = prompt("enter marks of sci");
  let sst = prompt("enter marks of sst");
  let social = prompt("enter marks of social");
  let totalMarks =
    Number(math) + Number(eng) + Number(sci) + Number(sst) + Number(social);

  let aggregate = totalMarks / 5;
  console.log("total aggregate", aggregate);
  let percentage = (totalMarks / 500) * 100;
  console.log("percentage", percentage);
}
// student();

// -4- /-----------------------------------------------------
/*
temperature of a city in fahrenheit degrees is input through the keyboard.
 write a program to convert the temperature into centigrade and 
 centigrade to Fahrenheit
*/
// Celsius to Fahrenheit: (9/5 × °C) + 32
// Fahrenheit to Celsius: 5/9(°F - 32)
// Kelvin to Celsius: K - 273

function cityFahrenheit() {
  let cityCelsius = prompt("input degree");
  let cityFahrenheit = prompt("F");
  let cityKalvin = prompt("K");
  let fahrenheit = (9 / 5) * cityCelsius + 32;
  console.log("fahrenheit", fahrenheit);
  let celsius = (5 / 9) * (cityFahrenheit - 32);
  console.log("celsius", celsius);
  let kelvin = celsius - 273;
  console.log("kalvin", kelvin);
}
//cityFahrenheit();

// ---5..--------------------------------------------------

//Enter length breadth of rectangle and find the area, perimeter.

function area() {
  let length = prompt("enter length");
  let breadth = prompt("enter breadth");
  let areaOfTriangle = Number(length) * Number(breadth);
  console.log("total area", areaOfTriangle);
  let perimeter = 2 * (Number(length) + Number(breadth));
  console.log("rectangle perimeter", perimeter);
}

// area();

// ----6----
//Enter the radius of Circle and find the circumstance and area of circle

// Formula of Rectangle Area == length * width
// Formula of perimeter of Rectangle == 2(length + width)
// Formula of circle Area == pie * r * r
// Formula of circle perimeter == 2 * pie * radius

function radiusOfCircle() {
  let radius = prompt("radius enter keyboard");
  let pie = prompt("pie keyboard");
  let areaCircumstance = Number(radius) * Number(pie) * Number(radius);
  console.log("circle area", areaCircumstance);
  let circlePerimeter = 2 * Number(pie) * Number(radius);
  console.log("circle perimeter", circlePerimeter);
}
// radiusOfCircle();

// for (let i = 1000; i <= 5000; i++) {
//   if (i % 4 == 0) {
//     console.log("leap year", i);
//   }
// }

//The company you work for has just been awarded a contract to build a
//payment gateway. In order to help move things along,
//you have volunteered to create a function that will take a float and
//return (IN STRING FORMAT) the amount formatting in dollars and cents.

//39.99 becomes: $39.99

//3 become $3.00

//3.1 become $3.10

//4500 become 4500Rs.

function changeDollar() {
  let rupees = prompt("cents into dollar");
  let cents = prompt("dollar into cents");
  let dollar = rupees / 83;
  console.log("dollar", dollar, "$");
  let cent = dollar * 83;
  console.log("rupees ", cent, "Rs");
}
//changeDollar();

//8Complete the solution so that it reverses the string passed into it.

//‘world’ => ‘dlrow’
//"Honey bees make honey" ==> "'yenoh ekam seeb yenoH'"
//“The greatest victory is that which requires no battle”
//==> “battle no requires which that is victory greatest The”

function reverseNumber() {
  let reverseWords = prompt("words");
  console.log("reverse the words", reverseWords.split("").reverse().join(""));
}
//reverseNumber();

// 9. Write an ATM machine program which gives the list in console
//     Change Pin          : 1
//     Cash Withdrawal     : 2
//     Cash Deposit        : 3
//     Check Balance       : 4
//     Mini statement      : 5
//     Invalid option      : < 0 || > 5

//     You have changed Pin
//     Please enter a valid Pin

//     You have successfully Withdrawal 55000Rs

//     You have successfully deposited 5000Rs, current balance is 60000Rs

//     The available balance is 60000Rs

//     Mini statement is not working. Sorry for inconvenient cost

//     Please enter a valid option

// function atmMachine() {
//   let changePin = prompt(Number(" enter change pin 1,cash deposit 2,cash withdrawal 3,check balance 4,mini statement 5"));
//   for  (
//     console.log("enter 1 for change pin")
//     let cardPin= prompt(Number('enter card pin'))
//     if (Number(cardPin)==defined);
//     console.log( 'card pin match ,change new pin')
//   else {
//     return console.log("card pin not match  please enter valid card pin ");

//   }
//   let changeCardPin = prompt(Number("enter new card pin"));
//   console.log("your card pin changed");

//   }

//atmMachine();

/**]
 * A certain grade of steel is graded according to the following conditions:
 *
 * (i) Hardness must be greater than 50
 * (ii) Corbon content must be less than 0.7
 * (iii) Tensile strength must be greater than 5600
 *
 *
 * The grades are follows
 * 1. Grade is 10 is all three conditions are met
 * 2. Grade is 9: if (i) and (ii)  are met
 * 3. Grade is 8: if (ii) and (iii)  are met
 * 4. Grade is 7: if (i) and (iii)  are met
 * 5. Grade is 6: if only one is met
 * 6. Grade is 5: if none of the conditions are met
 *  */

function steelGrade() {
  let Hardness = prompt("hardness");
  let carbon = prompt("carbon");
  let tensile = prompt("tensile");
  let hardness = steel < 50;
  console.log(" it is hardness steel", hardness);
  let carbonSteel = carbon < 0.7;
  console.log("it is a carbon steel");
  let TensileSteel = tensile < 5600;
  console.log("it is a tensile steel", TensileSteel);
  grade = Number(Hardness) + Number(carbon) + Number(tensile);
}
//steelGrade();

document.write("hello <br>");
let row = 4;
for (let i = 1; i <= 4; i++) {
  document.write("*");
}

let i = 6;
document.write("<br>");

for (let i = 1; i <= 6; i++) {
  document.write(" = ");
  for (let j = 1; j <= 7; j++) {
    document.write(" + ");
  }
  document.write("<br>");
}
let ro = 7;

for (let h = 1; h <= 7; h++) {
  for (let v = 1; v <= 7; v++) {
    document.write(" 8 ");
  }
  document.write("<br>");
}
let r = 4;
let c = 4;
for (let i = 1; i <= r; i++) {
  for (let j = 1; j <= c; j++) {
    document.write("  5  ");
  }
  document.write("<br>");
}

let v = 7;
let s = 7;
for (let i = 1; i <= v; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(" * ");
  }
  document.write("</br>");
}
