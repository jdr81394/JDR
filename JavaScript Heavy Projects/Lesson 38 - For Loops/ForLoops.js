var sentence = "Hello World. What's good?";

var number = 0;

for (i = 0; i <= sentence.length; i++){

if(sentence[i] !== undefined){
var letter = sentence[i].toLowerCase();
if (letter === 'o'){
  number++
console.log(letter)
} else if (letter === 'e') {
  break;
} else if (letter === 'l'){
  continue;
}

}}console.log(number);
