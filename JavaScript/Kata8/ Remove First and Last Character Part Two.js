// You are given a string containing a sequence of character sequences separated by commas.
// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Examples
// "1,2,3"      =>  "2"
// "1,2,3,4"    =>  "2 3"
// "1,2,3,4,5"  =>  "2 3 4"

// ""     =>  NULL
// "1"    =>  NULL
// "1,2"  =>  NULL


function array(string) {
    // Split the input string by commas
   const newStr = string.split(',');
 
     // If the length of the parts is less than 3, return null
    if(newStr.length < 3) {
      return null;
    }
 
     // Extract the middle parts (excluding the first and the last)
    const middlePart = newStr.slice(1, -1);
 
     // Join the middle parts with spaces
  const result = middlePart.join(' ');
   
   return result;
 
 
 }