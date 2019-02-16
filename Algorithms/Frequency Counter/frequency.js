// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array
// has a corresponding value that is squared in the second array.
// In addition, the frequency of the values must be the same.


//Understand the problem:
//Two arrays must exist
//Each value in an an array must be compared to each value in the second array
//In order for each value to correspond, each arr must be the same length.
//There must be the same number of values in each arrays

//Breaking the problem down

//two arrays must exist
function same(arr1,arr2){
//both arrays must be the same length
if (arr1.length != arr2.length){
  return false
}
//There must be an object to container the counts for each key and value.
let arrBox1 = {};
let arrBox2 = {};
//Loop through each array, add each number as a key or increment key +1
for(let val of arr1){
  arrBox1[val] = arrBox1[val] + 1 || 1;
}
for (let val of arr2){
  arrBox2[val] = arrBox2[val] + 1 || 1;
}
console.log(arrBox1);
console.log(arrBox2);
//go through object
//and compare each key of arrBox1 to each key of arrBox2
for(let key in arrBox1){
//check to see exponentiated arrBox1 key exists in arrBox2
  if (!(key ** 2 in arrBox2)){
    return false;
  }
// check to see if arrBox1 key has the same value.
  if(arrBox2[key ** 2] !== arrBox1[key]){
    return false;
  }
  console.log(arrBox1, arrBox2);
  return true;
}

}
