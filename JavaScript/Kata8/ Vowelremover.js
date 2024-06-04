// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata



function shortcut (string) {
    // Define the vowels to be removed
    let vowels = ['a','e','i','o','u'];
    
     // Split the string into an array of characters, filter out the vowels, and join the array back into a string
   return string.split('').filter(char => !vowels.includes(char)).join('');
  }