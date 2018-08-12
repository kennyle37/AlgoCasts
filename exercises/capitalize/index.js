// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/*
split the string into arrays by spaces
capitalize the first letter of every value in that array
join them back by space
*/

/*
split the string into arrays by spaces
capitalize the first letter of every value in that array
join them back by space
*/
// let arr = [ 'a', 'short', 'sentence' ];
// arr[i][0]

function capitalize(str) {
  let strSpl = str.split(" ");
  let word = '';

  for (let i = 0; i < strSpl.length; i++) {
    strSpl[i] = strSpl[i].charAt(0).toUpperCase() + strSpl[i].substr(1);
    word += strSpl[i] + ' ';
  }

  return word.trim();
}

module.exports = capitalize;
