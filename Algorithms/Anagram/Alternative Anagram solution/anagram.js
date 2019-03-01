//Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another.
// Example: 'Cinema' & 'Iceman'

//Problem solving method
//1. Understand the problem:
//Can I state in my own words?
  // Create a function that takes 2 strings, and compares both to see if it has the same letters and the same number of those letters
//What are the inputs?
  // 2 strings, no spaces are taken into account in this function
// What are the outputs?
  // A boolean value of either true or false
//Can the output be determined from the inputs?
  // Yes.
// What are the important pieces of data?
  //The letters in the string
  //Number of times each letter appears

//2. Explore Examples
// What is a simple example?
//Explore with empty inputs
//Explore with invalid inputs

//3. Break it down

//How do we want to solve this? Let's do it by determining if the values in each key equal each other.
//We can do this by getting an object to be zeroed out, 1 string increments a key, while the other decrements it.

//Write down the steps
//1.Take 2 inputs
//2. Determine if they are strings, if not return false.
//3. Determine if they are even lengths, if not return false.
//4. Create object to hold key & corresponding values for string 1.
//5. For each value in str1, if key does not exist in Object, create key. If it does, increment by 1.
//6. For each letter in string 2, check if a key is named in Object 1. If not, return false.
//7. If exists, decrement it by 1.
//8. For each key in Object 1, if not equal to 0, return false. Otherwise return true.


//1.Take 2 inputs
function anagram(str1,str2){
//2. Determine if they are strings, if not return false.
if (typeof(str1, str2) !== 'string'){
  console.log('step 2');
  return false
}
//3. Determine if they are even lengths, if not return false.
if (str1.length !== str2.length){
  console.log('step 3');
  return false;
}
//4. Create object to hold key & corresponding values for string 1.
let strBox1 = {};
//5. For each value in str1, if key does not exist in Object, create key. If it does, increment by 1.
for(let val of str1){
  strBox1[val] = strBox1[val] + 1 || 1;
  console.log(strBox1)
}
//6. For each letter in string 2,
for(i = 0; i < str2.length; i++){
var letter = str2[i];
// check if a key is named in Object 1.
if(!(strBox1[letter])){
// If not, return false.
  return false;
} else {
  //7. If exists, decrement it by 1.
  strBox1[letter]--;
  console.log(strBox1);
}
  }
  //8. For each key in Object 1, if not equal to 0, return false. Otherwise return true.
for(let key in strBox1) {
  if (key.value !== undefined){
    console.log(key)
    console.log(key.value)
    return false
  }
  //9. Return true
  return true;
}

}
