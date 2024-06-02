// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


function abbrevName(name){
    // Split the name into an array of words
   let words = name.split(' ');
    // Get the first letter of each word and convert it to uppercase
   let firstLetter = words.map(word => word.charAt(0).toUpperCase());
    // Join the initials with a dot
   return firstLetter.join('.');
   
   
 }