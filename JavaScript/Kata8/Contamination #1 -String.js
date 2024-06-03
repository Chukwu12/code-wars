// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

function contamination(text, char){
    // Check if text or character is empty
     if(!text || char === '') {
       return '';
     }
     // Validate the character is a string of length 1
     if(typeof char === 'string' && char.length === 1) {
       return char.repeat(text.length)
     }
     // If the character is not valid, return an empty string
     return '';
   }