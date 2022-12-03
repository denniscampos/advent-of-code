const fs = require('fs');
const calories = fs.readFileSync('./2022/day-01/input.txt', 'utf-8').split('\r\n');

// Part One
let total =  0; 
let highestCalories = 0; 
let arr = [];

for (caloriesAmount of calories) {

    if (caloriesAmount) {
        total += Number(caloriesAmount)
    }

    if (caloriesAmount === '') {
        highestCalories = total
        total = 0;

        arr.push(highestCalories)
    }
}

console.log(Math.max(...arr)) // Answer


// Part Two
const topThreeElves = arr.sort((a, b) => b - a);
const totalCalories = topThreeElves[0] + topThreeElves[1] + topThreeElves[2]

console.log(totalCalories); // Answer
