
function openModal() {
  var modal =  document.querySelector('#modal');
if (modal.style.display == 'none'){
modal.style.display = 'inline-block';}

else if (modal.style.display == 'inline-block'){
modal.style.display = 'none'; }

else {

console.log('it didnt work');
}

}

function Calculate() {
  var inputOne = Number(document.querySelector('#inputone').value);
  var inputTwo = Number(document.querySelector('#inputtwo').value);
  var selected = document.querySelector('select');
  var option = selected.options[selected.selectedIndex].value;
  var answer = document.querySelector('#answer');
  var calculatedAnswer;

if (option == "addition") {
 calculatedAnswer = inputOne + inputTwo;
} else if (option == "subtraction"){
calculatedAnswer = inputOne - inputTwo;
} else if(option == "multiply") {
  calculatedAnswer = inputOne * inputTwo;
} else if (option == "divide") {
  calculatedAnswer = inputOne / inputTwo;
}
answer.innerHTML = calculatedAnswer;

}


function letterCalculate() {
  var letterCountNumber = document.querySelector('#letterinput').value;
  var letterCount = 0;
  var answer = document.querySelector('#letterinput');
  for (i = 0; i <= letterCountNumber.length; i++){
    console.log(letterCount);
    letterCount++

  }
}

function whileCalculate(){
var wordLetterLength = document.querySelector('#letterinputwhile').value;
var i = 0;
while (i <= wordLetterLength.length) {
console.log(i);
  i++;

}

do {
  console.log("do and while loop is working");
  i++
}
while (i <= wordLetterLength.length);

}

function errorPrompt() {
  var response = document.querySelector('#promptresponse');
  var nameEntry = prompt("what's your name?");
  try {

  if (nameEntry == 'Jake'){
console.log("hello Jake");
response.innerHTML = 'Hello Jake';
} else if (nameEntry == 'JDR') {
console.log("Hi jake, going by your initials now are you?");
response.innerHTML = "Hi jake, going by your initials now are you?";
}
else {
  throw 'Unknown User';
};
}
  catch (error) {
    if (error == 'Unknown User'){
      console.log('youre not allowed in here')
      response.innerHTML = 'you are not allowed in here';
    }
  } finally {
    console.log ('Try Catch Throw Finally was run');
  }


}
