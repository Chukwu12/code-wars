// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

// The usage will be quite simple, like:

// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]


Array.prototype.filter = function (func) {
    // Create a new array to hold the filtered elements
    const myArray = [];
  
    // Iterate over each element in the array
    for (let i = 0; i < this.length; i++) {
      // Check if the current element passes the test
      if (func(this[i], i, this)) {
        // If it passes, add it to the result array
        myArray.push(this[i]);
      }
    }
  
    // Return the new array with the filtered elements
    return myArray;
  };
  