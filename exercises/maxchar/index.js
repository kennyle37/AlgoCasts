// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/*
set a storage
set a result

loop through the entire string
  at each string, check if it currently exists in the object
    if it does, +1
  if not add it in

for each of the property inside the object
  if it is the highest one, set our storage to it

return storage
*/

function maxChar(str) {
  let result = {};
  let storage = str[0];

  for (let i = 0; i < str.length; i++) {
    result[str[i]] = result[str[i]] + 1 || 1;
  }

  for (let key in result) {
    //check to see if the current key is bigger than the storage
      //if it is set the storage to the current key
    if (result[key] > result[storage]) {
      storage = key;
    }
  }
  
  return storage;
}

module.exports = maxChar;
