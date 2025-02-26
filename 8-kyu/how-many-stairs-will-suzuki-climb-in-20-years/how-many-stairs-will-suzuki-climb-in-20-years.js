function stairsIn20(s){
 // Step 1: Sum the stairs climbed for each day of the week (Sunday to Saturday)
  let totalYears = 0;
  // Iterate over each day's array in the stairs array
  for(let i = 0; i < s.length; i++){
      // Sum up the stairs for each day
    totalYears += s[i].reduce((acc, cur) => acc + cur, 0);
  }
  // Multiply the yearly total by 20 to estimate the total for 20 years
  let amountInTwentyYears = totalYears * 20;
  
  return amountInTwentyYears;
}