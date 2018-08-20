// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/*
matrix(3)
[
              startCol=0       endCol=2
 startRow=0       [1,     2,     3],
                  [8,     9,     4],
 endRow=2         [7,     6,     5]

]
startCol=0
endCol=2
[1,2,3]
[x,x,x]
[x,x,x]

[1,2,3]
[x,x,4]
[x,x,5]

[1,2,3]
[x,x,4]
[7,6,5]

[1,2,3]
[8,x,4]
[7,6,5]

[1,2,3]
[8,9,4]
[7,6,5]
/*
1) init startCol to 0, endCol to n-1, startRow to 0, endRow to n-1
2) init a count that will keep track of our current counter
  we will need a result tracker and will need to create a grid depending on the size of n
3) we will keep looping while startCol <= endCol and startRow <= endRow
4) we will loop at the startCol all the way until the end column
    we will push in the current number (1, 2, 3,4)
    then we will increment our startRow
5) we will then loop through the startRow all the way until the end row
  we will push in the last number
    we will then decrement endCol
6) we will then loop through the end row
    pushing through the last digits in the endRow (8, 9, 10)
    we will then decrement end row
7) we will then loop through the startCol
    we will push in the last 2 digits (11, 12) and then increment start Col
*/

function matrix(n) {
let startCol = 0;
let endCol = n-1;
let startRow = 0;
let endRow = n-1;
let result = [];
let count = 1;

//create the result matrix
for (let i = 0; i < n; i++) {
  result.push([]);
}

while (startCol <= endCol && startRow <= endRow) {
  //solve for top
  for (let i = startCol; i <= endCol; i++) {
    result[startRow][i] = count;
    count++
  }

  startRow++;

  //solve for right
  for (let i = startRow; i <= endRow; i++) {
    result[i][endCol] = count;
    count++;
  }

  endCol--;

  //solve for bottom
  for (let i = endCol; i >= startCol; i--) {
    result[endRow][i] = count;
    count++
  }

  endRow--;

  //solve for left
  for (let i = endRow; i >= startRow; i--) {
    result[i][startCol] = count;
    count++;
  }
  
  startCol++;
}

return result;
}

console.log(matrix(4))

module.exports = matrix;
