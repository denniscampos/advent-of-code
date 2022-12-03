const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'utf-8').split('\r\n');

let myScore = 0;

//A X ROCK      1
//B Y PAPER     2
//C Z SCISSOR   3

// WIN          6
// DRAW         3
// LOSE         0

const gamePossibilities = {
    'A X': 4,
    'B Y': 5, 
    'C Z': 6, 
    'B X': 1,
    'C X': 7,
    'A Y': 8,
    'C Y': 2,
    'A Z': 3,
    'B Z': 9,
}

input.forEach((game) => {
    console.log(myScore += gamePossibilities[game])
})
