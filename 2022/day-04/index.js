const fs = require("fs");
const sections = fs.readFileSync("./input.txt", "utf-8").split("\r\n");

// sample input
// const sections = "2-4,6-8 2-3,4-5 5-7,7-9 2-8,3-7 6-6,4-6 2-6,4-8".split(" ");

let total = 0;

for (const section of sections) {
  const [first, second] = section.split(",");
  const [firstElfStart, firstElfEnd] = first.split("-");
  const [secondElfStart, secondElfEnd] = second.split("-");

  // is the first elf's range contained in the second's range
  // second elf start <= first elf range <= second elf end
  // 4                <= 6 && 6             <= 7 = true
  // is the second elf's range contained in the first elf's range
  // first elf start <= second elf range <= first elf end
  // 2               <= 3    && 7        <= 8
  if (
    (parseInt(firstElfStart) >= parseInt(secondElfStart) &&
      parseInt(firstElfEnd) <= parseInt(secondElfEnd)) ||
    (parseInt(secondElfStart) >= parseInt(firstElfStart) &&
      parseInt(secondElfEnd) <= parseInt(firstElfEnd))
  ) {
    total++;
  }
}

console.log({ total });

part 2
for (const section of sections) {
  const [first, second] = section.split(",");
  const [firstElfStart, firstElfEnd] = first.split("-");
  const [secondElfStart, secondElfEnd] = second.split("-");

  // 2-3,4-5 no overlap
  // 2-8,3-7 overlaps
  // 2 > 3  && 2 <= 7 == false && true
  // 3 >= 2 && 3 <= 8 === true && true

  if (
    (parseInt(firstElfStart) >= parseInt(secondElfStart) &&
      parseInt(firstElfStart) <= parseInt(secondElfEnd)) ||
    (parseInt(secondElfStart) >= parseInt(firstElfStart) &&
      parseInt(secondElfStart) <= parseInt(firstElfEnd))
  ) {
    total++;
  }
}

console.log({ total });

// for (const section of sections) {
//   const [first, second] = section.split(",");
//   const [firstElfStart, firstElfEnd] = first.split("-");

//   const [secondElfStart, secondElfEnd] = second.split("-");
//   // 2-8, 3-7
//   let firstRange = "";
//   // "2345678"
//   let secondRange = "";
//   // someInt + " " + someOtherStuff
//   for (let i = parseInt(firstElfStart); i <= parseInt(firstElfEnd); i++) {
//     // console.log("firstSpreadIndex", i);
//     firstRange += i.toString();
//   } // '2345678'
//   for (let i = parseInt(secondElfStart); i <= parseInt(secondElfEnd); i++) {
//     secondRange += i.toString();
//   } // '34567'
//   // console.log({ firstSpread: firstRange });
//   // console.log({ secondSpread: secondRange });
//   if (secondRange.match(firstRange)) {
//     total++;
//   } else if (firstRange.match(secondRange)) {
//     total++;
//   }
//   // if (secondRange.includes(firstRange)) {
//   //   total++;
//   //   continue;
//   // }
//   // if (firstRange.includes(secondRange)) {
//   //   total++;
//   // }
// }
