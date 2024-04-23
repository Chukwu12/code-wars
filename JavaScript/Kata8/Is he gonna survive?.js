// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

function hero(bullets, dragons){
    // Calculate the total number of bullets needed to defeat all dragons
   let bulletSlayer = dragons * 2;
   
    // Check if the hero has enough bullets
   if(bullets >= bulletSlayer) {
     return true;
   } else {
     return false;
   }
 }
 