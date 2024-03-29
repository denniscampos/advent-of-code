const fs = require("fs");
const rucksacks = fs.readFileSync("./input.txt", "utf-8").split("\r\n");

const alphabetNumeric = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

let arr = [];
let total = 0;

for (const rucksack of rucksacks) {
  const split = Math.ceil(rucksack.length / 2);
  const [leftSide, rightSide] = [
    rucksack.slice(0, split),
    rucksack.slice(split),
  ];

  const left = [...new Set(leftSide)];
  const right = [...new Set(rightSide)];

  for (const i of left) {
    if (left.includes(i) && right.includes(i)) {
      arr.push(i);
    }
  }
}

arr.forEach((number) => {
  total += alphabetNumeric[number];
});

console.log(total); // answer to part one!

// part two
let array = [];
let total = 0;

// ended up not making it an array to have access to the match string method.
const rucksacks = fs.readFileSync("./input.txt", "utf-8");

rucksacks.match(/(?:.+\n?){3}/g).map((el) => {
  const [one, two, three] = el.split("\n");

  const ones = [...new Set(one)];
  const twos = [...new Set(two)];
  const threes = [...new Set(three)];

  for (const i of ones) {
    if (twos.includes(i) && threes.includes(i)) {
      array.push(i);
    }
  }
});

array.forEach((number) => {
  total += alphabetNumeric[number];
});

console.log(total); // answer
