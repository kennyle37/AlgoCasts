// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let storage = {};
  let result = 0;

  for (let letter of str.toLowerCase()) {
    if (
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
    ) {
      storage[letter] = storage[letter] + 1 || 1;
    }
  }
  
  for (let key in storage) {
    result += storage[key];
  }
  return result;
}

module.exports = vowels;
