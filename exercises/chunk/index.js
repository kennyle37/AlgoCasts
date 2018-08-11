// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


/*
set a result
set a counter to equal size

loop through the entire array, i at 0
  slice at i, size
  push into result

return result
*/

function chunk(array, size) {
  let count = size;
  let result = [];

  for (let i = 0; i < array.length; i += size) {
    let chunk = array.slice(i, count);
    result.push(chunk);
    count += size;
  }

  return result;
}

module.exports = chunk;
