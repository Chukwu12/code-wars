// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
    // Convert all elements to numbers
  return x.map(value => Number(value))
    // Sum all the numbers
    .reduce((acc,currentValue) => acc + currentValue, 0);
  }
  
  