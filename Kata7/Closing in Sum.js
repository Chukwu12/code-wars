// Create a function that returns the sum of the digits formed from the first and last digits, all the way to the center of the number.

// Worked Example
// 2520 ➞ 72

// # The first and last digits are 2 and 0.
// # 2 and 0 form 20.
// # The second digit is 5 and the second to last digit is 2.
// # 5 and 2 form 52.

// # 20 + 52 = 72

function closingInSum(n) {

    const str = n.toString(); // Convert number to string
       let sum = 0;
       let left = 0; // Start from the first digit
       let right = str.length - 1; // Start from the last digit
   
       while (left < right) {
           // Form the number from the current pair of digits
           let pairNumber = parseInt(str[left] + str[right], 10);
           sum += pairNumber;
           left++;
           right--;
       }
       
       // If there's a single middle digit left in an odd-length string
       if (left === right) {
           sum += parseInt(str[left], 10);
       }
   
       return sum;
   }
   