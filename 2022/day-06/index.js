const fs = require("fs");
const marker = fs.readFileSync("./input.txt", "utf-8");

function partOne() {
  const lastFour = [];
  let count = 0;

  for (const character of marker) {
    if (lastFour.length === 4) {
      const uniqueChar = new Set(lastFour);
      if (uniqueChar.size === 4) {
        break;
      }

      lastFour.shift();
    }

    lastFour.push(character);

    count++;
  }
}

partOne();

function partTwo() {
  const lastFour = [];
  let count = 0;

  for (const character of marker) {
    if (lastFour.length === 14) {
      const uniqueChar = new Set(lastFour);
      if (uniqueChar.size === 14) {
        break;
      }

      lastFour.shift();
    }

    lastFour.push(character);
    count++;
  }
  console.log("count", count);
}

partTwo();
