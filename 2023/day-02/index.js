const fs = require('fs');
const games = fs.readFileSync('./input.txt', 'utf-8').trim().split('\r\n');

function partOne() {
  const max = {
    red: 12,
    green: 13,
    blue: 14,
  };

  const lines = games
    .map((game) => {
      return game
        .split(': ')[1]
        .split('; ')
        .map((set) => {
          const bags = set.split(', ');

          return bags.every((bag) => {
            const [count, color] = bag.split(' ');

            return max[color] >= Number(count);
          });
        })
        .every((p) => p);
    })
    .reduce((acc, curr, index) => {
      return curr ? acc + (index + 1) : acc;
    }, 0);

  return lines;
}

console.log('ANSWER PART ONE: ', partOne());
