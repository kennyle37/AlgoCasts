// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let num = Math.abs(n);
  let stringified = num.toString();
  let split = stringified.split('');
  let reverse = split.reverse();
  let joined = reverse.join('');
  let result = Number(joined);

  return n >= 0 ? result : result * -1;
}

module.exports = reverseInt;
