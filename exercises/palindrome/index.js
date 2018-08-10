// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//check to see if the reverse is equal to the original

/*
split the string up into arrays
reverse the array
join them
check to see if the str2 is equal to one
*/


function palindrome(str) {
  let strCopy = str.split('');
  let strRev = strCopy.reverse();
  let str2 = strRev.join('');

  if (str === str2) {
    return true;
  }
  return false;
}

module.exports = palindrome;
