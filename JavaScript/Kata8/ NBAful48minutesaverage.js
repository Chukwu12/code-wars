// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

// Examples:

// pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48 
// pointsPer48(5, 17) // 14.1 
// pointsPer48(0, 0) // 0
// Notes:
// All inputs will be either be an integer or float.
// Follow your dreams!

function pointsPer48(ppg, mpg) {
    // Check if ppg and mpg are both non-zero
     if(ppg !== 0 && mpg !== 0) {
       // Calculate points per minute
       const ppm = ppg / mpg;
       
        // Extrapolate points per 48 minutes
       const pointsPer48Minutes = ppm *  48;
       
         // Round to the nearest tenth
       return Math.round(pointsPer48Minutes * 10) / 10;
     } else {
       // Return 0 if either ppg or mpg is 0
       return 0;
     }
   }