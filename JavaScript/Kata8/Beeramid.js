// Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

// A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

// Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

// your referral bonus, and

// the price of a beer can

// For example:

// beeramid(1500, 2); // should === 12
// beeramid(5000, 3); // should === 16


// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
    // Calculate the total number of cans you can buy with the referral bonus
  let moneyToSpend = Math.floor(bonus / price);
  // Initialize variables to keep track of the current level and the number of complete levels
  let level = 0;
  let cansN = 0;
   // Loop to calculate the number of complete levels
  while(true){
    level++;
    cansN = level * level;
     // If you don't have enough cans for the next level, break the loop
    if( moneyToSpend < cansN)
      break;
    // Subtract the cans needed for the current level from the total cans
    moneyToSpend -= cansN
  }
  
  // The number of complete levels is (level - 1) because the last increment of level exceeded the number of available cans
  return level - 1;
}