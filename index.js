const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8").split("\n");

// DAY 01 OF ADVENT OF CODE

// Part 1
// track our increases
let count = 0;

// loop through each element to check condition, if true increase count
for (let i = 1; i < input.length; i += 1) {
  if (Number(input[i]) > Number(input[i - 1])) {
    count++;
  }
}

console.log("count: ", count);

// Part 2

let count = 0;

for (let i = 0; i < input.length - 3; i += 1) {
  const a = +input[i] + +input[i + 1] + +input[i + 2];
  const b = +input[i + 1] + +input[i + 2] + +input[i + 3];

  if (b > a) {
    count += 1;
  }
}

console.log(sum);
