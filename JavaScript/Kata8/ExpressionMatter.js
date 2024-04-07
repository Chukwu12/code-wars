// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
// Example
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.


function expressionMatter(a, b, c) {
    // Compute results for all possible combinations
       const result1 = a + b + c;
       const result2 = a * b * c;
       const result3 = a * (b + c);
       const result4 = (a + b) * c;
       const result5 = a + b * c;
       const result6 = a * b + c;
     // Return the maximum result
     return Math.max(result1, result2, result3, result4, result5, result6)
   }