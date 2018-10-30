//Global properties

console.log(Infinity);

console.log(NaN);

console.log(undefined);

var parseString = "50 people";
var a = 10;
var b = document.querySelector('a')

// ParseInt()
// returns 1st number in a string
// 2nd argument determines what numeral system is used

console.log(parseInt(parseString));
console.log(parseInt(parseString, 8));
console.log(parseInt(parseString, 16));
console.log(parseInt(parseString, 10));

// String()
// converts an object to a string

console.log(String(a));

//encode URI/decode URI
// used to decode/encode URI
//URI.js is a library used to work with URls

console.log(encodeURI(b));
console.log(decodeURI(b));

//eval
// executes or evaluates an argument
var c = 0;
console.log(eval(a + c));

//isFinite()
// determines if the obejct is isFinite
//different from the number method because
// it changes the value to a number first

var d = Infinity;
console.log(isFinite(b));
console.log(isFinite(c));
console.log(isFinite(d));

// isNaN()

console.log(isNaN(d));
console.log(isNaN(a));
console.log(isNaN(b));

//Number()
//converts an object to a Number

console.log(Number(b));
console.log(Number(d));
console.log(Number(a));

//parseFloat()
//searches a string for a Number

console.log(parseFloat(parseString));

var parseStringNumber = parseFloat(parseString);

console.log(parseStringNumber.constructor);
