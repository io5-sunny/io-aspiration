//1.. An Insurance company follows
//  following rules to calculate premium.
// (1) If a person’s health is excellent and the person is between 25 and 35 years
// of age and lives in a city and is a male then the premium is Rs.
// 4 per thousand and his policy amount cannot exceed Rs. 2 lakhs.
// (2) If a person satisfies all the above conditions except that
// the sex is female then the premium is Rs. 3 per thousand and her
// policy amount cannot exceed Rs. 1 lakh. (3) If a person’s health
//  is poor and the person is between 25 and 35 years of age and lives
//   in a village and is a male  then the premium is Rs. 6
//   per thousand and his policy cannot exceed Rs. 10,000. (4)
//   In all other cases the person is not insured.

// Write a program to output whether the person should be
//  insured or not, his/her premium rate and maximum amount
//   for which he/she can be insured.
function insuranceCompany() {
  let mC = Number(prompt("enter the age male in city"));
  let fC = Number(prompt("enter the age female in city"));
  let vM = Number(prompt("enter the age male in village"));
  //let a = 25 || 35;
  // let b = 25 < 35;
  // let c = 25 < 35;
  if (mC >= 25 && mC <= 35) {
    console.log(`the policy is exceed in 2 lakhs`);
  } else {
    console.log(`person not insured`);
  }

  if (fC >= 25 && fC <= 35) {
    console.log(`the policy is exceed in 1 lakhs`);
  } else {
    console.log(`person not insured`);
  }

  if (vM >= 25 && vM <= 35) {
    console.log(`the policy is exceed in 10000 thousand for poor health`);
  } else {
    console.log(`person not insured`);
  }
}
//insuranceCompany();

// (e) A certain grade of steel is graded according to the following
// conditions: (i) Hardness must be greater than 50 (ii)
// Carbon content must be less than 0.7
//  (iii) Tensile strength must be greater than 5600
// The grades are as follows:

// Grade is 10 if all three conditions are met
// Grade is 9
// if conditions (i) and (ii) are met
//Grade is 8 if conditions (ii) and (iii)
//  are met
//Grade is 7 if conditions (i) and (iii) are met
// Grade is 6
//  if only one condition is met
// Grade is 5 if none of the conditions
//  are met

function steel() {
  let hard = Number(prompt("enter the hardness of steel"));
  let car = Number(prompt("enter the carbon of steel"));
  let ten = Number(prompt("enter the tensile of steel"));

  if (hard < 50) {
    console.warn("Please enter hardness value greater than 50");
  }
  if (car > 0.7) {
    console.warn("Please enter carbon value less than 0.7");
  }
  if (ten < 5600) {
    console.warn("Please enter Tensile strength value greater than 5600");
  }

  if (hard > 50 && car < 0.7 && ten > 5600) {
    console.log(
      "in this grade 10 hardness and carbon and tensile are met in steel"
    );
  } else if (hard > 50 && car < 0.7) {
    console.log("in this grade 9 hardness and carbon are met in steel");
  } else if (car < 0.7 && ten > 5600) {
    console.log("in this grade 8 carbon and tensile are met in steel");
  } else if (hard > 50 && ten > 5600) {
    console.log("in this grade 7 hardness and  tensile are met in steel");
  } else if (hard > 50 || car < 0.7 || ten > 5600) {
    console.log("in this grade 6 any one grade are met in steel");
  } else {
    console.log("in this grade 5 no any grade found in steel  ");
  }
}
//steel();

//3. A library charges a fine for every book returned late. For first
// 5 days the fine is 50 paise, for 6-10 days fine is one rupee and
// above 10 days fine is 5 rupees. If you return the book after 30
// days your membership will be cancelled. Write a program to
// accept the number of days the member is late to return the
// book and display the fine or the appropriate message.

function libraryFine() {
  let days = Number(prompt("enter a member return a book in a library"));
  // let a = 1 > 5;
  // let b = 6 > 10;
  // let c = 11 > 29;

  if (days > 1 && days <= 5) {
    console.log(`the fine is 50 paise`);
  } else if (days >= 6 && days <= 10) {
    console.log(`the fine is 1 rupees`);
  } else if (days >= 11 && days <= 29) {
    console.log(`the fine is 5 rupees`);
  } else {
    console.log(`membership is cancel`);
  }
}
//libraryFine();

//4. If the three sides of a triangle are entered through the
//keyboard, write a program to check whether the triangle is
//valid or not. The triangle is valid if the sum of two sides is
//greater than the largest of the three sides.

function triangle() {
  let a = Number(prompt("enter a side of triangle"));
  let b = Number(prompt("enter b side of triangle"));
  let c = Number(prompt("enter c side of triangle"));
  let totalOfTwoSides = Number(a) + Number(b);
  if (totalOfTwoSides > c) {
    console.log(`the largest of two sides a and b of triangle`);
  } else {
    console.log("third side is larger than a and b sides of triangle");
  }
}
//triangle();

//5. If the three sides of a triangle are entered through the
// keyboard, write a program to check whether the triangle is
//isosceles, equilateral, scalene or right angled triangle

function triAngle() {
  let a = Number(prompt("enter a side of triangle"));
  let b = Number(prompt("enter b side of triangle"));
  let c = Number(prompt("enter c side of triangle"));

  if (a == b && b == c && c == a) {
    console.log(`the triangle of 3 side are equilateral`);
  } else if (a == b || b == c || c == a) {
    console.log(`the triangle of 2 side are same then it isosceles`);
  } else if (a == 90 || b == 90 || c == 90) {
    console.log("right angle");
  } else if (a !== b && b !== c && c !== a) {
    console.log(`it is a scalene triangle`);
  }
}
// triAngle();

//6. In a company, worker efficiency is determined on the basis of
// the time required for a worker to complete a particular job. If
//the time taken by the worker is between 2 – 3 hours, then the
//worker is said to be highly efficient. If the time required by
//the worker is between 3 – 4 hours, then the worker is ordered
//to improve speed. If the time taken is between 4 – 5 hours, the
//worker is given training to improve his speed, and if the time
//taken by the worker is more than 5 hours, then the worker has
//to leave the company. If the time taken by the worker is input
//through the keyboard, find the efficiency of the worker.

function efficiencyOfWorker() {
  let a = Number(prompt("enter the work hours to do spent on a work"));
  let hours = 2 && 2.59;
  let hour = 3 && 3.59;
  let h = 4 && 4.59;

  if (a < hours) {
    console.log(`the worker is highly efficient`);
  } else if (a < hour) {
    console.log(`order to improve the speed`);
  } else if (a < h) {
    console.log(`worker is given a training to speed increase`);
  } else {
    console.log(`worker to leave the company`);
  }
}
//efficiencyOfWorker();
