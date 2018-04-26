// GIVEN: Array of numbers and a sum
// Want: Matching numbers that equal the sum

/*function compareNums(a, b){
  let n = a - b;
  return n;
}*/

function makeArray(){
  console.log( 'In makeArray');
  let newArray = [];
  for( let i = 0; i < 5; i++){ // pushes 5 random values between 0 and 9 (inclusive) into the new array
    let n = Math.floor(Math.random() * 10);
    newArray.push(n);
  } // end for loop

    newArray.sort(function(a, b){ return a-b; }); // sorting the array in ascending order using a compare function

  return newArray;
} // end makeArray

// Create a function that will determine if a pair of numbers that matches the given sum exists.  If they do, return those values.

function matchSumNums(sum){
  console.log('In matchSumNums');
  let workingArray = makeArray();
  console.log('Working Array:', workingArray);

  for( let i = 1; i < workingArray.length; i++ ){
    // check if pair is equal to given sum.
    if( (workingArray[i] + workingArray[i-1]) == sum ){
      console.log(true);
      let answer = workingArray.splice((i-1), 2);
      return answer;
    } else {
      console.log(false);
      return "No number pairs equal the given sum.";
    }
  }
}
