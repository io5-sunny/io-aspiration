// // Print all value using index values
// const array = [
//   [
//     "Sunday",
//     "Monday",
//     [
//       -4,
//       -3,
//       2,
//       3,
//       ["this is string", "Sunny", false, null, [1, 2, "Shekhar", 4], "vinay1"],
//     ],
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Poonam",
//   ],
//   "duck",
//   "ant",
//   "Cat",
//   [
//     ["abc", 4, ["Khushbu", 78457, false, null, [1, 2, "Ravana", 4], "Sapna"]],
//     1,
//     "Ritik",
//     5,
//   ],
// ];

//

// console.log("array", array[0][0]);
// console.log("array", array[0][1]);
// console.log("array", array[0][2][0]);
// console.log("array", array[0][2][1]);
// console.log("array", array[0][2][2]);
// console.log("array", array[0][2][3]);
// console.log("array", array[0][2][4][0]);
// console.log("array", array[0][2][4][1]);
// console.log("array", array[0][2][4][2]);
// console.log("array", array[0][2][4][3]);
// console.log("array", array[0][2][4][4][0]);
// console.log("array", array[0][2][4][4][1]);
// console.log("array", array[0][2][4][4][2]);
// console.log("array", array[0][2][4][4][3]);
// console.log("array", array[0][2][4][5]);
// console.log("array", array[1]);
// console.log("array", array[2]);
// console.log("array", array[3]);
// console.log("array", array[4][0][0]);
// console.log("array", array[4][0][1]);
// console.log("array", array[4][0][2][0]);
// console.log("array", array[4][0][2][1]);
// console.log("array", array[4][0][2][2]);
// console.log("array", array[4][0][2][3]);
// console.log("array", array[4][0][2][4][0]);
// console.log("array", array[4][0][2][4][1]);
// console.log("array", array[4][0][2][4][2]);
// console.log("array", array[4][0][2][4][3]);
// console.log("array", array[4][0][2][5]);
// console.log("array", array[4][1]);
// console.log("array", array[4][2]);
// console.log("array", array[4][3]);

// destructure following pokemons
// "Pikachu".., "Bulbasour..", "mew", "Charizard" "mewTwo" "Treecko", "Torchik",
// "sharpido", "Squirtel..", "Ditto" "Mr.Mime" "Blaziken"Destructu

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

const [PikachuArr] = array2 || [];
const [, , Pikachu, bulb, mew1] = PikachuArr || ["h"];
const [balbasur] = bulb || ["he"];
//const [, , , , mArr] = bulb || [];
//const [, , mew] = mewArr || ["hello"];
//const [, , mew1] = mewArr || [];
const [, , mewT] = mew1 || [];
const [, , , trick] = array2 || [];

console.log("array", Pikachu, balbasur, mew1);
