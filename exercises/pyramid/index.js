// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// (4) => base 7
// (5) => base 9
// (6) => base 11

//width is (n * 2) - 1
//spread count is n - i
//# count is width - (spread * 2)

  /*
  need the current total width
  need the totalSpread
  need the totalBlock
  need the storage

  iterate from 1 to n

    while spread > 0
      add '_' to storage
      spread--
    
    while block > 0
      add # to block
      block--

    console.log(storage)
  */

function pyramid(n) {
  let width = (n * 2) - 1; //5

  for (let i = 1; i <= n; i++) {
    let storage = '';
    let spread = n - i; // 2 =>  1 => 0
    let revSpread = spread;
    let block = width - (spread * 2);
    
    while (spread > 0) {
      storage += ' ';
      spread--;
    }

    while (block > 0) {
      storage += '#';
      block--;
    }
    
    while (revSpread > 0) {
      storage += ' ';
      revSpread--;
    }

    console.log(storage)
  }
}

module.exports = pyramid;
