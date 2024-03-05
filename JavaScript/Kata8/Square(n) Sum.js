// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1 
// 2
//  +2 
// 2
//  +2 
// 2
//  =9.


function squareSum(numbers){
    // Initialize a variable to store the sum of squared numbers
   let sum = 0;
  // Iterate through the array
     for (let i = 0; i < numbers.length; i++) {
       // Square each number and add it to the sum
         sum += numbers[i] * numbers[i];
 }
      // Return the final sum
     return sum;
 }