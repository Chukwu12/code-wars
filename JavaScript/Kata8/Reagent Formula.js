// Now we will confect a reagent. There are eight materials to choose from, numbered 1,2,..., 8 respectively.
// We know the rules of confect:
// material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)
// Task
// You are given a integer array formula. Array contains only digits 1-8 that represents material 1-8. Your task is to determine if the formula is valid. Returns true if it's valid, false otherwise.

// Example
// For formula = [1,3,7], The output should be true.

// For formula = [7,1,2,3], The output should be false.

// For formula = [1,3,5,7], The output should be false.

// For formula = [1,5,6,7,3], The output should be true.

// For formula = [5,6,7], The output should be true.

// For formula = [5,6,7,8], The output should be true.

// For formula = [6,7,8], The output should be false.

// For formula = [7,8], The output should be true.

function isValid(formula){
    let material1 = false;
       let material2 = false;
       let material3 = false;
       let material4 = false;
       let material5 = false;
       let material6 = false;
       let material7 = false;
       let material8 = false;
   
       // Iterate through the formula array and set the flags
       for (let material of formula) {
           switch(material) {
               case 1:
                   material1 = true;
                   break;
               case 2:
                   material2 = true;
                   break;
               case 3:
                   material3 = true;
                   break;
               case 4:
                   material4 = true;
                   break;
               case 5:
                   material5 = true;
                   break;
               case 6:
                   material6 = true;
                   break;
               case 7:
                   material7 = true;
                   break;
               case 8:
                   material8 = true;
                   break;
               default:
                   return false; // Invalid material number
           }
       }
   
       // Check the rules
       if (material1 && material2) return false;
       if (material3 && material4) return false;
       if (material5 !== material6) return false;
       if (!material7 && !material8) return false;
   
       // If all rules are satisfied
       return true;
   }