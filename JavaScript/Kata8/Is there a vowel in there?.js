// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.


function isVow(a){
    // Object mapping character codes to corresponding lowercase vowels
    let vowels = {
        97: 'a', 
        101: 'e', 
        105: 'i',
        111: 'o', 
        117: 'u'  
    };
  // Map over the array and replace character codes with corresponding vowels
  return a.map(number => vowels[number] || number)
}