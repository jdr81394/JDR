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
//Write down the steps
  //1. Take 2 inputs
  //2. Check to see if input1 & input2 are strings, if not return error/false
  //3. Check to see if input1 & input2 are the same length, if not return error/false
  //4. Create objects for both inputs
  //5. For each value in string1, if does not exist, create key and set value to 1 in Object1.
  //6. If value exists in Object1, increment value by 1.
  //7. For each value in string2, if does not exist, create key and set value to 1 in Object2.
  //8. If value exists in Object2, increment value by 1.
  //9. For each key in Object1, compare to each key in Object2. If does not exist, return false.
  //10. For each key in Object1, compare value of that key to each value of every key in Object2. If does not exist, return false.
  //11. Return true. Solution is achieved by matching each key & value pair to one another.



//1.Take 2 inputs
function anagram(str1,str2){

  //2. Check to see if input1 & input2 are strings, if not return error/false
  if (typeof(str1, str2)  !== 'string'){
    return false;
  }

  //3. Check to see if input1 & input2 are the same length, if not return error/false
  if (str1.length !== str2.length){
    return false;
  }

  //4. Create objects for both inputs
  let stringBox1 = {};
  let stringBox2 = {};

  //5. For each value in string1, if does not exist, create key and set value to 1 in Object1.
  //6. If value exists in Object1, increment value by 1.
  for(let val of str1){
    stringBox1[val] = stringBox1[val] + 1 || 1;

  }
  console.log(stringBox1);
  //7. For each value in string2, if does not exist, create key and set value to 1 in Object2.
  //8. If value exists in Object2, increment value by 1.
  for(let val of str2){
    stringBox2[val] = stringBox2[val] + 1 || 1;

  }
  console.log(stringBox2)

  //9. For each key in Object1, compare to each key in Object2.
  for(let key in stringBox1){
    // If does not exist, return false.
    if(!(key in stringBox2)){
      console.log('step 9')
      return false;
    }
    //10. Compare value of that key to each value of every key in Object2.
  if(stringBox1[key] !== stringBox2[key]){
    console.log('step 10')
    return false;
  }
    //11. Return true.
    console.log('Step 11')
    return true;

  }


}
