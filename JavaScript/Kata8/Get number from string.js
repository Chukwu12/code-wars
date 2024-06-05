// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

function getNumberFromString(s) {
    // Split the string into an array of characters, filter only digits, and join them back into a string
      let digit = s.split('').filter(char => !isNaN(char) && char !== ' ').join('');
        // Convert the resulting string of digits into an integer
      return digit ? parseInt(digit, 10): 0;
      
    }