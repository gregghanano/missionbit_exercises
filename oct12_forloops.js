//Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
function evenOrOddIterator(){
  for(var i = 0; i < 11; i++){
    if(i%2 === 0){
      console.log(i + " is even.");
    } else {
      console.log(i + " is odd.");
    }
  }
}
//evenOrOddIterator();

//same thing but with a while loop
function evenOrOddIteratorWhile(){
  var i = 0;
  while(i < 11){
    if(i%2 === 0){
      console.log(i + " is even.");
    } else {
      console.log(i + " is odd.");
    }
    i++;
  }
}
//evenOrOddIteratorWhile();

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
//
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
function multByNine(){
  for(var i = 0; i < 11; i++){
    var result = i * 9;
    console.log(i + " * 9 = " + result);
  }
}
//multByNine();

function multTable(){
  for(var i = 0; i < 11; i++){
    for(var j = 0; j < 11; j++){
      var result = i * j;
      console.log(i + " * " + j + " = " + result);
    }
  }
}
//multTable();

function gradeAssigner(){
  for(var i = 60; i <= 100; i++){
    if(i < 70){
      console.log("For " + i + ", you get a D.");
    } else if (i >= 70 && i < 80){
      console.log("For " + i + ", you get a C.")
    } else if (i >= 80 && i < 90){
      console.log("For " + i + ", you get a B.");
    } else {
      console.log("For " + i + ", you get an A.");
    }
  }
}
//gradeAssigner();

// function gradeAssignerOneLine(){
//   for(var i = 100; i > 59; i--){
//     for(var j = 100; j > 59; j-=10){
//       if(i <= j && i > j-11){
//         console.log("Your grade of " + i +" is between " + j + " and "+ (j-11));
//       }
//     }
//   }
// }
// gradeAssignerOneLine();
