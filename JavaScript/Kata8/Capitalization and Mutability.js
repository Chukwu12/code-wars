// our coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

// The string will always start with a letter and will never be empty.

// Examples:

// "hello" --> "Hello"
// "Hello" --> "Hello" (the first letter was already capitalized)
// "a"     --> "A"

function capitalizeWord(word) {
    // Check if the string is not empty
    if(word.length > 0) {
      // Capitalize the first character and concatenate with the rest of the string
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }
    }