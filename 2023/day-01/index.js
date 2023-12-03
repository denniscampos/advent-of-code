const fs = require('fs');
const calibration = fs.readFileSync('./index.txt', 'utf-8').split('\n')

// Part one
function getTotalDigits(calibration) {
    let total = 0; 

    calibration.forEach((line) => {
        let firstDigit;
        let lastDigit; 
    
        for (let i = 0; i < line.length; i++) {
            if (!isNaN(parseInt(line[i]))) {
                firstDigit = line[i]
                break;
            }
        }
    
        for (let i = line.length - 1; i >= 0; i--) {
            if (!isNaN(parseInt(line[i]))) {
                lastDigit = line[i]
                break;
            }
        }
    
        let value = parseInt(firstDigit + lastDigit) 
        total += value;
    })


    return total;
}

console.log('Answer: ', getTotalDigits(calibration))

// part two
function convertNumber(string) {
    const digits = string
        .replace(/one/g, 'one1one')
        .replace(/two/g, 'two2two')
        .replace(/three/g, 'three3three')
        .replace(/four/g, 'four4four')
        .replace(/five/g, 'five5five')
        .replace(/six/g, 'six6six')
        .replace(/seven/g, 'seven7seven')
        .replace(/eight/g, 'eight8eight')
        .replace(/nine/g, 'nine9nine')
        .replace(/\D/g, '')

    return Number(digits[0] + digits.slice(-1))
}

function partTwo(nums) {
    let sum = 0

    nums.forEach((num) => {
        sum += convertNumber(num)
    })

    return sum;
}

console.log('Answer: ', partTwo(calibration))