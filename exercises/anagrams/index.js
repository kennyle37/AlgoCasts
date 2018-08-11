// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const strA = stringA.replace(/[^\w]/g, "").toLowerCase();
  const strB = stringB.replace(/[^\w]/g, "").toLowerCase();
  let objA = {};
  let objB = {};

  if (strA.length !== strB.length) {
    return false;
  }

  for (let i = 0; i < strA.length; i++) {
    objA[strA[i]] = objA[strA[i]] + 1 || 1;
  }

  for (let i = 0; i < strB.length; i++) {
    objB[strB[i]] = objB[strB[i]] + 1 || 1;
  }

  for (let key in objA) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
