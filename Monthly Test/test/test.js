// 1. Write a reverse table like
//    2 x 10 = 20
//    2 x 9 = 18
//    2 x 8 = 16
//    .
// //    .
//    .
function tableReverse() {
  for (i = 1; i <= 10; i++);
  {
    console.log(`table of 2`, 2 * i);
  }
}
tableReverse();

// 2. Reverse alphabets
//    ZYXWVUTSRQPONMLKJIHGFEDCBA
//    **note: use ASCII (character code) to get character of alphabet from**

// 3. Write a program to calculate sum of 5 subject entered using keyboard

function Subject() {
  let math = Number(prompt("enter math subject number"));
  let eng = Number(prompt("enter eng subject number"));
  let sst = Number(prompt("enter sst subject number"));
  let phy = Number(prompt("enter phy subject number"));
  let punjabi = Number(prompt("enter punjabi subject number"));
  totalMarks =
    Number(math) + Number(eng) + Number(sst) + Number(phy) + Number(punjabi);
  console.log("total subject marks", totalMarks);
}
//Subject();

// 4. If lengths of three sides of a triangle are input through the
//    keyboard, write a program to find the area of the triangle

function areaTriangle() {
  let a = Number(prompt("enter a side of triangle"));
  let b = Number(prompt("enter b side of triangle"));
  let c = Number(prompt("enter c side of triangle"));
  let areaOfTriangle = Number(a) + Number(b) + Number(c) / 2;
  console.log("area of triangle", areaOfTriangle);
}
//areaTriangle();

// 5. if a five-digit number is input through the keyboard,
//    program to reverse the number.
//    **(Hint: Use the modulus operator '%')*
function reverseNumber() {
  var input = prompt("enter a five digit number");
  if (input.length !== 5 || isNaN(input)) {
    console.log("invalid input.please enter a value of five digit number");
  } else {
    var number = parseInt(input, 10);
    var reversedNumber = 0;
    while (number > 0) {
      var digit = number % 10;
      reversedNumber = reversedNumber * 10 + digit;
      number = Math.trunc(number / 10);
    }
    console.log("the reversed number is " + reversedNumber);
  }
}
//reverseNumber();

// 6. Consider a currency system in which there are notes of seven denominations, namely,
//    Rs. 1, Rs. 2, Rs. 5, Rs. 10, Rs. 50, Rs. 100. Is a sum of Rs. N is entered through the
//    keyboard, write a program to compute the smallest number of notes that will combine to
//    give Rs. N

// function currency(){
//     var input=prompt("enter sum of Rs");
//     var amount=parseInt(input,10);
//     var currency=[100,50,10,5,2,1];
//     var notesCount =0;
//     for(var i=0;i>currency)
// }

//currency();

// 7. Complete the solution so that it reverses the string passed into it.
//  'world' => 'dlrow'
//  "Honey bees make honey" ==> "'yenoh ekam seeb yenoH'"
//  "The greatest victory is that which requires no battle" ==>
//  "battle no requires which that is victory greatest The"

// 8. A certain grade of steel is graded according to the following
//     conditions:
//     (i) Hardness must be greater than 50
//     (ii) Carbon content must be less than 0.7
//     (iii) Tensile strength must be greater than 5600

// The grades are as follows:

// Grade is 10 if all three conditions are met
// Grade is 9 if conditions (i) and (ii) are met
// Grade is 8 if conditions (ii) and (iii) are met
// Grade is 7 if conditions (i) and (iii) are met
// Grade is 6 if only one condition is met
// Grade is 5 if none of the conditions are met

function steel() {
  let hard = Number(prompt("enter the hardness of steel"));
  let car = Number(prompt("enter the car of steel"));
  let ten = Number(prompt("enter the ten of steel"));
  if (hard < 50) {
    console.warn("please enter hardness value greater than 50");
  }
  if (car > 0.7) {
    console.warn("please enter carbon value less than 0.7");
  }
  if (ten < 5600) {
    console.warn("please enter tensile value greater than 5600 ");
  }
  if (hard > 50 && car < 0.7 && ten > 5600) {
    console.log("in grade 10 hardness and carbon and tensile are met in steel");
  } else if (hard > 50 && car < 0.7) {
    console.log(" in this grade 9 hardness and carbon are met");
  } else if (car < 0.7 && ten > 5600) {
    console.log("in grade 8 carbon and tensile are met in steel");
  } else if (hard > 50 && ten > 5600) {
    console.log(" in this grade 7 hardness and tensile are met in steel");
  } else if (hard > 50 || car < 0.7 || ten > 5600) {
    console.log("in this grade 6 any one grade met");
  } else {
    console.log("in this grade 5 no any grade involve in steel");
  }
}
//steel();

// Write a program, which will require the user to give values of
// hardness, carbon content and tensile strength of the steel
// under consideration and output the grade of the steel.

//9//. Destructure following pokemons
"Pikachu", "Bulbasour", "mew", "Charizard";
("mewTwo");
"Treecko", "c", "sharpido", "Squirtel", "Ditto";
("Mr.Mime");
("Blaziken");

const array2 = [
  [
    "Sunday",
    "Monday",
    "Pikachu",
    [
      "Bulbasour",
      -4,
      -3,
      2,
      3,
      [
        "this is string",
        "Sunny",
        "mew",
        false,
        null,
        [1, 2, "Shekhar", "Charizard", 4],
        "vinay1",
      ],
    ],
    "mewTwo",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Poonam",
  ],
  "duck",
  "ant",
  "Treecko",
  "Cat",
  [
    [
      "abc",
      4,
      "Torchik",
      [
        "Khushbu",
        78457,
        "sharpido",
        false,
        null,
        "Squirtel",
        ["Ditto", 1, 2, "Ravana", 4],
        "Sapna",
      ],
    ],
    "Mr.Mime",
    1,
    "Ritik",
    5,
  ],
  "Blaziken",
];

// console.log("array pikachu", array2[0][2]);
// console.log("array Bulbasour", array2[0][3][0]);
// console.log("array mew", array2[0][3][5][2]);
// console.log("array Charizard", array2[0][3][5][5][3]);
// console.log("array mewTwo ", array2[0][4]);
// console.log("array treecko", array2[3]);
// console.log("array torchik", array2[5][0][2]);
// console.log("array sharpido", array2[5][0][3][2]);
// console.log("array squartial", array2[5][0][3][5]);
// console.log("array ditto", array2[5][0][3][6][0]);
// console.log("array mr mime", array2[5][1]);
// console.log("array blaziken", array2[6]);

// 10. Destructure email, lat, firstname, website, jack, catchPhrase
//     const data = {
//     id: 2,
//     name: "Ervin Howell",
//     username: "Antonette",
//     email: "Shanna@melissa.tv",
//     address: {
//     street: "Victor Plains",
//     suite: "Suite 879",
//     city: "Wisokyburgh",
//     zipcode: "90566-7771",
//     geo: {
//     lat: "-43.9509",
//     lng: "-34.4618",
//     },
//     },
//     phone: "010-692-6593 x09125",
//     website: "anastasia.net",
//     company: {
//     userName: {
//     firstName: "Decko",
//     lastName: "Crist",
//     },
//     catchPhrase: "Proactive didactic contingency",
//     bs: "synergize scalable supply-chains",
//     },
//     children: ["Ayehsa", "Jack", "May"],
//     };
