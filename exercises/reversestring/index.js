// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let result = '';
  let count = str.length - 1;

  for (let i = count; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

module.exports = reverse;
