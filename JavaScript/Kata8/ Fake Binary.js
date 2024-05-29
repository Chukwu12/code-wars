// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    // Convert the string into an array of characters
  return x.split('')
    // Replace digits below 5 with '0' and 5 or above with '1'
    .map(x => x < '5' ? '0' : '1')
     // Join the array back into a string
    .join('');
  }