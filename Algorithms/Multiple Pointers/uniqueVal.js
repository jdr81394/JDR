/*
Implement a function that takes a sorted array, & returns the unique values in the array.

Problem Solving:
1. Understand the Problem
2. Similar examples?
3. Break it down
4. Solve
5. Refactor


1. Understand the Problem
  - How do I want to solve this?
    - Have 2 counters side by side that compare values, overwrite value & then moves to next one to compare.
  - Restate?
  - Inputs?
    - single sorted array
  - Outputs?
    - Could be considered unique values..
  - How can output be determined by Input?
    - Can be determined by how far counters move
  - What are the important pieces of information?
    - The input
    - the i counter
    - the j counter
    - Each unique value
    - the condition to increase counters
    - when to change the i counter to the j counter


3. Break it down
  1. Determine if array, if not return something
  2. Set counters.
    2a. i = 0
    2b. j = i+1
  3 set condition to increase:
   while i < arr.length, compare i to j, if i = j, j++. if not, set arr[i] = arr[j] & i++
*/

function uniqueValues(arr){
  //1. Determine if array, if not return something
  if (arr.constructor !== Array){
    return "Must be an array";
  }
  // 2. Set counters.
  //   2a. i = 0
  //   2b. j = i+1
  var firstCounter = 0;
  var secondCounter = 1;
  console.log('got to set the variables' + ' ' + firstCounter + ' ' + secondCounter)
  //3. set conditions to start
  while(arr[secondCounter] < arr.length){
    //compare first to second, if first == second increment second
    if (arr[firstCounter] == arr[secondCounter]){
          secondCounter++;
    }
    if (arr[firstCounter] !== arr[secondCounter]) {
        firstCounter++;
        arr[firstCounter] = arr[secondCounter];
    }
    console.log(firstCounter)
    return arr
  }
}
