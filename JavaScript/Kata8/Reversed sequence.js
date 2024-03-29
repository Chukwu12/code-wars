// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    if (n <= 0) {
          return []; // Return an empty array if n is not positive
      }
  
      let newArr = [];
      for (let i = n; i >= 1; i--) {
          newArr.push(i); // Push each integer from n down to 1 into the array
      }
      return newArr;
  
  };