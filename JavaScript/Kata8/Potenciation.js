// The function takes in 2 inputs x and y, and should return x to the power of y

// Simple, right? But you're NOT allowed to use Math.pow();

// Obs: x and y will be naturals, so DON'T take fractions into consideration;

// Note : zero to the power of zero equals one in this kata

function power(x,y){
    // Base case: if exponent is 0, return 1
  if (y === 0) {
    return 1;
  }
    // Initialize result to the base
   let result = x;
   // Loop y times to multiply the base by itself
    for(let i = 1; i < y; i++){
      result *= x;
    }
   return result;
 }