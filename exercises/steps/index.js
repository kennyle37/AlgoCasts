// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  /*
  create a storage to hold the #

  loop through the count, starting at 1
    reset the storage
    add # for the current i
    add '' for the diff between i and n
    console log the storage
  */

  for (let i = 1; i <= n; i++) {
    let result = '';
    let count = i;
    let emptySpace = n - count;

    while (count > 0) {
      result += '#';
      count--;
    }
    
    while (emptySpace > 0) {
      result += ' ';
      emptySpace--;
    }

    console.log(result);
  }
};

module.exports = steps;
