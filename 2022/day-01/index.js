const fs = require('fs');
const input = fs.readFileSync("./input.txt", "utf8")

console.log({input})

// const input = fs.readFileSync('../day-01/input.txt', 'utf-8')
// const input = fs.readFileSync("./input.txt", "utf8")

// need to find the elves with the most calories AND how much calories is that elf carrying.
// split the spaces into an array...
// calculate each segment of the array.
// find the max calories from the array.
// get the index from the array to get the elf count.