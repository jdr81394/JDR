/*
Create a function which accpets a sorted array of integers. Function should find the
first pair where the sum is 0.
Return the array that includes both values that sum to zero.
Return undefined if a pair does not exist

Problem Solving:
1. Understand the Problem
2. Similar examples?
3. Break it down
4. Solve
5. Refactor


1. Understand the Problem
  - Can I restate the problem?
  - How do we want to get to the solution?
    -Let's add 2 indices against one another until they overlap.
  - What are the inputs?
    - A single array of values
  - What are the outputs?
    - An array if there is a pair that has a sum of 0
    - undefined if no pair
  - Can the output be determined by the inputs?
    - Must be an array because it has to be sorted. Cannot be any other value.
  - How can the output be determine by the inputs?
    - An array has a beginning and an end. I can count up from [0] & down from [array.length-1]
  - What are the important pieces of data? What should I call them?
    - The input
    - A condition
    - The counter at the beginning of the index
    - The counter at the end of the index


3. Break it down
  1. Create a function with an input
  2. Check to see if input is array, if not return something
  3. Check to see if input length is greater than 1, if not return something
  4. Create variables that will indicate positions in the Array
  5. Begin the comparisons by laying down the condition which the indices will operate during.
    5a. While lower index is less than greater index add indices together
  6. Add indices together, if equal to 0 return index.
  7. if greater than 0, reduce the higher index by 1
  8. if less than 0, increase the lower index by 1.


*/




// 1. Create a function with an input
function sumZero(arr){
  // 2. Check to see if input is array, if not return something
  if (arr.constructor !== Array ){
    console.log('Step 2');
    return 'Argument must be an Array'
  }
  // 3. Check to see if input length is greater than 1, if not return something
  if (arr.length <= 1){
    console.log('Step 3');
    return "Increase Array Length"
  }
  // 4. Create variables that will indicate positions in the Array
  let left = 0;
  let right = arr.length - 1;
  // 5. Begin the comparisons by laying down the condition which the indices will operate during.
  while(left < right){
    //   5a. While lower index is less than greater index add indices together
    if (arr[left] + arr[right] === 0){
      console.log(arr[left]);
      console.log(arr[right]);
      return [arr[left], arr[right]] ;
    }
    // 6. Add indices together, if equal to 0 return index.
    else if (arr[left] + arr[right] > 0) {
        // 7. if greater than 0, reduce the higher index by 1
      right--;
    }
    else {
        // 8. if less than 0, increase the lower index by 1.
        left++;
    }

  }

}
