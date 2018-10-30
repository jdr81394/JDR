//Array Properties
// constructor, length, prototype

//constructor

var family = ['Mom', 'Dad', 'Jake', 'Rachel'];

console.log(family.constructor);
console.log(family.constructor());

//length
console.log(family.length);


//prototype
// add properties and methods to an array object


Array.prototype.myFamily = function() {
  console.log(family);
}

family.myFamily()

var blank = "";
console.log(blank.repeat());
console.log(blank.repeat());
console.log(blank.repeat());


//concat()



var arrayOne = [1, 2, 3];
var arrayTwo = ["one", "two", "three"]
var arrayThree = [family, 'test', 1]

console.log(arrayOne.concat(arrayTwo,arrayThree));

var arrayFour = [0,1,2,3,4,5,6,7,8,9]

//copyWithin()//copies array elemnts within the array
//to and from specified positions

var copy = arrayFour.copyWithin(4,2,4);
console.log(copy);

//every()
// runs a test on each one of the elements in an arrayOne
// made this my own, should be false at 5 & true at 6
// because rachel's name is 6 characters

var family = ['Mom', 'Dad', 'Jake', 'Rachel'];
console.log(family.length);

function checkNameLength(length){
  for (i = 0; i < family.length; i++){
    var familyMember = family[i].valueOf();
  }
     if (familyMember.length <= 6){
      return length = true;
    } else {
      return length = false;
    }
  }

console.log(family.every(checkNameLength));




//filter()
// Creates a new array with every element in an array
// that passes a test

var ages = [18,19,20,21]

function checkAges(age){
  return age > 20
}

console.log(ages.filter(checkAges));


//fill()
//fills all the elements in an array with a static value.
// Unless specified with a start and end


console.log(ages.fill("hello",0,1));

// entries()
// returns a key/value pair object
// NOT VERY CLEAR, MUST LEARN MORE ABOUT THIS.


console.log(ages.entries());



//findIndex()
//returns the index of the first element in an array
// that passes a test


var findIndexTest = [10,15,20,25];
function checkAges(age){
  return age >= 18;
}
console.log(findIndexTest.findIndex(checkAges));

//forEach()
// calls a provided function once for each element in an array, in order
demoP = document.querySelector('#test');
var numbers = [4,9,16,25];

function myFunction(item, index){
  demoP.innerHTML = "index[" + index + "]:" + item + "<br>";
}

numbers.forEach(myFunction);

//not done super well but, moving on.


//IndexOf()
// Searches an Array to see if it contains an element.
// returns the position of the elements

var numberList = [1,2,3,4];


console.log(numberList.indexOf(1));


// from()
// returns an Array object from any object w/
// a length property or an iterable object.

var numberList = [1,2,3,4];
var helloWorld = 'Hello World'

console.log(Array.from(helloWorld));

//isArray()
//determines if object is an array
//seems to behave like it is a global myFunction
//call on it using the global Array object

console.log(Array.isArray(helloWorld));
console.log(Array.isArray(numberList));

//includes()
// determines if an array contains an elements
// returns a boolean value of true or false

console.log(numberList.includes(1));
console.log(numberList.includes("hi"));

//join()
//joins an Array together, to form a STRING
// argument is what will join them, however default is ,

console.log(numberList.join());
console.log(numberList.join("-"));

//keys()
//returns an array iterator object with the keys of an arrayOne

console.log(numberList.keys())

//map()
// puts a function to each element of an array
// and returns a new arrayOne

var mapArray = [1,2,3,4];

function mapArrayFunction(a,b){
  return b = a + 1;
}

console.log(mapArray.map(mapArrayFunction))

//push()
// adds new items to the end of the arrayOne

var pushArray = mapArray.push(5);

console.log(pushArray);

//pop()
// removes last array elements

var popArray = [1,2,3,4];

console.log(popArray.pop());
console.log(popArray.length);

//slice()
// returns the selected elements of an array
// the 1st parameter is where to start
// the 2nd parameter is where to go to in the index, but does not include it

var sliceArray = [1,2,3,4,5];

console.log(sliceArray.slice(0,3));

// shift()
// removes the 1st element of an arrayTwo

var shiftArray = ["apple", "banana","pear"];
var shiftArrayTwo = shiftArray.shift();

console.log(shiftArrayTwo);
//perhaps it just returns the 1st element... not removes

//splice()
//adds/removes elements to/from array.
// 1st parameter is the index
// 2nd parameter is the number of items
// 3rd parameter is the items themselves

var spliceArray = ["apple","artichoke","banana","pear"];

console.log(spliceArray.splice(0,3,1));

//sort()
// sorts the elements of an array. by default, sorts values or strings
// in alphabetical order.
// uses function to determine

var sortArrayNumbers = [1,2,3,4];

function sortNumber(a,b) {
return a, b
}

// console.log(sortArrayNumbers.sort(sortNumber(a,b){return a,b});
//NEED SOME HELP WITH THIS.

//some()
// runs a test on an array to see if any of the elements pass
// the function test. returns boolean true/false value

var someArray = [1,2,3,4];

function someArrayFunction(a){
  if (a > 3){
    return true;
  } else {
    return false;
  }
}

console.log(someArray.some(someArrayFunction));

//reduce()
// reduces the value of an array to a single value using a function

var reduceArray = [1,2,3,4,5];

function reduceArrayFunction(num, num2){
  return num + num2;
}
console.log(reduceArray.reduce(reduceArrayFunction))

//reduceRight()
// reduces the value of an array to a single value using a function
// goes from right to left

console.log(reduceArray.reduceRight(reduceArrayFunction));


//reverse()
// reverses the elements in an arrayTwo

var reverseArray = [1,2,3,4];

console.log(reverseArray.reverse())



/*
//lastIndexOf()
// returns the index of the last element in an array
// DOES NOT HAVE TO PASS TEST

var lastIndexOfTest = ["Grape", "Apple", "Pear", "Apple"];

console.log(lastIndexOfTest.lastIndexOf("Apple")); */
