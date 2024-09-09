// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {

    // Sort the array case-sensitively
    s.sort();
     // Get the first string from the sorted array
    const firstV = s[0];
     // Function to format the string by inserting "***" between each character
     function formatString(str) {
      return str.split('').join('***');
    }
     // Return the formatted first value
    return formatString(firstV);
  }
