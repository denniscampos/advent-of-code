const { readFile } = require("../utils");
const fs = require("fs");
const marker = fs.readFileSync("./sample.txt", "utf-8");

// console.log(marker.length);

function partOne() {
  let total = 0;

  [...marker].forEach((el, i) => {
    const string = marker.slice(i - 3, i) + el;

    console.log(string);
    // console.log(total); // answer
  });
  // scan first four characters and compare if any of those four exist.
  // if they don't return count...
  // else if something exist within those four, check next _sequence_
  // and scan the next four?
}

partOne();

// mjqjpqmgbljsphdztnvjfqwrcgsmlb
