//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//Mind the input validation.

//Example
//{ 6, 2, 1, 8, 10 } => 16
//{ 1, 1, 11, 2, 3 } => 6

function sumArray(array) {

    if (array == null) {
      return 0;
    }
    
    else if (array.length < 2 ) {
      return 0;
    }
    
    else {
      array = array.sort(function(x,y) {return x - y});
      
      let total = 0;
      for(let i = 1; i < array.length - 1; i++) {
        total += array[i]
      }
      return total;
    }
    }