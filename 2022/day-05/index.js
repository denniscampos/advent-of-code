const fs = require("fs");

const input = fs
  .readFileSync("./sample.txt", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .trimEnd();

function partOne() {
  const [stacks, procedures] = input.split("\n\n").map((x) => x.split("\n"));

  const parseStack = stacks.map((line) => {
    console.log(typeof line);
    return [...line].filter((_, index) => index % 4 === 1);
  });

  console.log(parseStack);
}
partOne();
