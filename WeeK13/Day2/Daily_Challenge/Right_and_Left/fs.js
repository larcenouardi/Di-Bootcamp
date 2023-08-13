const fs = require('fs');

fs.readFile('RightLeft.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const symbols = data.split('');

  let position = 0;
  let stepsToRight = 0;
  let stepsToNegativeOne = 0;

  for (const symbol of symbols) {
    if (symbol === '>') {
      position++;
      stepsToRight++;
    } else if (symbol === '<') {
      position--;
      stepsToRight++;
    }

    if (position === -1 && stepsToNegativeOne === 0) {
      stepsToNegativeOne = stepsToRight;
    }
  }

  console.log(`Final position: ${position} steps to the right.`);
  console.log(`Steps to hit position -1: ${stepsToNegativeOne} steps.`);
});