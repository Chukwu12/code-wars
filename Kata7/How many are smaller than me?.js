// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// * Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// * Input [1, 2, 0] => Output [1, 1, 0]


function smaller(nums) {
    let output = []; // This will store the result
    for(let i = 0;  i < nums.length; i++) { 
      let count = 0; // Initialize a counter for each element
      
       // Loop through the elements to the right of nums[i]
      
      for(let x = i + 1; x < nums.length; x++) {
          // If the current element is smaller than nums[i], increment the count
        if(nums[x] < nums[i]) {
           count++;
        }
      }
        // Store the count in the result array
      output.push(count);
    }
    
    return output;
  }