const fs = require('fs');
const calibration = fs.readFileSync('./index.txt', 'utf-8').split('\n');


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