// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.
// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:
// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
// Note: there will always be exactly one wolf in the array.
// Examples
// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"
// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

function warnTheSheep(queue) {
    //This function iterates through the queue array and finds the index of the wolf.
  let findWolf = queue.findIndex(animal => animal === 'wolf');
    //calculates the position of the sheep before the wolf.
  let helpSheep = queue.length - 1 - findWolf;
    //If the wolf is the closest animal to us (at the end of the array), it returns the appropriate message. 
    if (findWolf === queue.length - 1) {
      return  "Pls go away and stop eating my sheep";
    }else{
      //Otherwise, it returns the message warning the sheep in front of the wolf.
    return  `Oi! Sheep number ${helpSheep}! You are about to be eaten by a wolf!`
    }
  }
  
  
