// Your Task
// Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

// Examples
// booleans = [True, True, False], operator = "AND"
// True AND True -> True
// True AND False -> False
// return False
// booleans = [True, True, False], operator = "OR"
// True OR True -> True
// True OR False -> True
// return True
// booleans = [True, True, False], operator = "XOR"
// True XOR True -> False
// False XOR False -> False
// return False


function logicalCalc(array, op){
    // Define the logical operations as functions
    const operations = {
       'AND': (x , y ) => x && y, 
    'OR': (x , y) => x || y,
    'XOR': (x , y) => x !== y
    };
    
    // Get the operation function based on the given operator
   const operation = operations[op];
    
    // Use reduce to apply the operation sequentially to the values in the array
  return array.reduce((acc, c) => operation(acc ,c));
  }