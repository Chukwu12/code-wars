// Can you implement a function that will return number of words in a string?
// You have to ensure that spaces in string is a whitespace for real.
// Let's take a look on some examples:
// countWords("Hello"); // returns 1 as int
// countWords("Hello, World!") // returns 2
// countWords("No results for search term `s`") // returns 6
// countWords(" Hello") // returns 1
// // ... and so on


function countWords(str) {
    if (!str.trim()) {
       return 0; // Return 0 for empty strings or strings with only spaces
     }
     return str.split(/\s+/).filter(word => word.length > 0).length;
   }