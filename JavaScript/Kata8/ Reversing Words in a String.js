// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

function reverse(string){
    // Split the string into words by spaces, filter out any empty strings caused by extra spaces, and then reverse the array of words
   return string.trim('').split(/\s+/).reverse().join(' ');
 }