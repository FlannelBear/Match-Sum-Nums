// GIVEN: Array of numbers and a sum
// Want: Matching numbers that equal the sum

/*function compareNums(a, b){
  let n = a - b;
  return n;
}*/

const r = 25;

function makeArray(){
  console.log( 'In makeArray');
  let newArray = [];
  for( let i = 0; i < r; i++){ // pushes r random values between 0 and 9 (inclusive) into the new array
    let n = Math.floor(Math.random() * 10);
    newArray.push(n);
  } // end for loop

    newArray.sort(function(a, b){ return a-b; }); // sorting the array in ascending order using a compare function

  return newArray;
} // end makeArray

// Create a function that will determine if a pair of numbers that matches the given sum exists.  If they do, return those values.

let testArray = [0, 1, 5, 2, 8, 9, 4, 7];

function matchSumNums(sum, arr){
  // Generate and show random array
  /*console.log('In matchSumNums');
  let workingArray = makeArray();
  console.log('Working Array:', workingArray);*/

  // First attempt: Issue is that this only compares numbers to their immediate neighbors and ignores possibility of match being more than one index position away.
  /*for( let i = 1; i < workingArray.length; i++ ){
    // check if pair is equal to given sum.
    if( (workingArray[i] + workingArray[i-1]) == sum ){
      console.log(true);
      let answer = workingArray.splice((i-1), 2);
      return answer;
    } else {
      console.log(false);
      return "No number pairs equal the given sum.";
    } // end if/else statement
  } // end for loop */

  // Second attempt: After watching the video further and getting past the part where they explain the 'Linear' solution that works inwards, I've paused and want to try it myself.

  arr.sort(function(a, b){return a - b});
  console.log(testArray);

  //let x = workingArray.length - 1; // x will represent the highend of the shrinking range
  let x = arr.length - 1;
  let answerArray = [];
  for( let i = 0; i < x; i++ ){
    if( (arr[i] + arr[x]) == sum ){
      let answer = [arr[i], arr[x]];
      answerArray.push(answer);
    } else if( (arr[i] + arr[x]) > sum ){
      x--; // reduces the value of x for the next iteration.
      i--; // shifts i back so that it stays in place for the next iteration.
    } else if( (arr[i] + arr[x]) < sum ){
      continue; // allows for loop to continue and increment i.
    }
  } // end for loop
    if( answerArray.length > 0 ){
      return answerArray;
    } else {
      return false;
    }
} // end matchSumNums
