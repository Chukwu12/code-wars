// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// Example:
// calculator(1,2,"+"); //=> result will be 3
// calculator(1,2,"&"); //=> result will be "unknown value"
// calculator(1,"k","*"); //=> result will be "unknown value"

function calculator(a,b,sign){
    // List of valid operators
     const operator = ['+', '-', '/', '*'];
        // Check if a and b are numbers
        if(typeof a !== 'number' || typeof b !== 'number') {
          return 'unknown value';
        }
       // Check if the sign is valid
      if(!operator.includes(sign)){
        return 'unknown value';
      }
      // Perform the calculation based on the sign
      switch(sign) {
          case '+':
          return a + b;
          break;
          case '-':
          return a - b;
          break;
          case '*':
          return a * b;
          break;
          case '/':
         // Check for division by zero
          if(b === 0){
            return 'unknown value';
          }
            return a / b;
          default:
                return "unknown value";
      }
    }