function factorial() {
  let a = Number(prompt("enter a number"));
  let r = 1;
  if (a < 0) {
    console.log(`0 number of factorial not defined`);
  } else if (a === 0) {
    console.log(`the factorial is${a} is 1`);
  } else {
    let r = 1;
    for (i = 1; i <= a; i++) {
      r = a * i;
    }
  }

  console.log(`factorial is ${a} is ${(r = i)} `);
  //console.log(`factorial is ${a} is ${a}`);
}
//factorial();

const str = [
  "If",
  "we",
  "remove",
  "spaces",
  "from",
  "the",
  "answer",
  "s",
  "approach",
];

const threeLetters = [];
for (let i = 3; i < threeLetters.length; i++) {
  if (threeLetters[i] < 3) {
    threeLetters.push(threeLetters[i]);
  } else {
    words;
  }
}
//console.log("three letters word", threeLetters);

//const numb = [
//   4, 23, 7, 39, 19, 0, 9, 14, 89, 7, 1545, 5498, -35, 522, -0415, 78, 56, -34,
// ];

// const even = [];
// for (let i = 1; i < numb.length; i++) {
//   console.log(`${i}`, numb[i]);
//   if (numb[i] * 2 == 0) {
//     even.push(numb[i]);
//   }
// //}

// function population[];
//   let p=100000;
//   for(i=1;i<=15;i++){
//     percentagePopulation.push(
//       newYear((p[i][1]/totalPopulation[i][1])*100)
//     )
//   }

// [
//   'Friday',
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
//   'Wednesday',
//   'Wednesday',
//   'Friday',
//   'Friday',

// ]

// const days=[  'Friday',
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday,'
//   'Thursday',
//   'Friday',
//   'Saturday`,
//   'Wednesday`,
//   'Wednesday',
//   'Friday',
//   'Friday',
// ]
// const withoutDup=[...new set(days)];
// console.log("without",withoutDup);

const array = [
  [
    "Sunday",
    "Monday",
    [
      -4,
      -3,
      2,
      3,
      ["this is string", "Sunny", false, null, [1, 2, "Shekhar", 4], "vinay1"],
    ],
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Poonam",
  ],
  "duck",
  "ant",
  "Cat",
  [
    ["abc", 4, ["Khushbu", 78457, false, null, [1, 2, "ravan", 4], "Sapna"]],
    1,
    "Ritik",
    5,
  ],
];

console.log("array", array[4][][]);
