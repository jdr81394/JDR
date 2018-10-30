
(function(){
var test = document.querySelector("body")
var element = document.createElement("h1")
var textnode = document.createTextNode("text")


element.appendChild(textnode);
test.appendChild(element);

}) ()



function Calculate(){
  var number1 = Number(document.querySelector(".number1").value);
  var number2 = Number(document.querySelector(".number2").value);
  var answer = document.querySelector(".answer");
  var selected = document.querySelector("select");
  var operator = selected.options[selected.selectedIndex].value;
  var theCalculatedAnswer;

if (operator == "addition"){
  theCalculatedAnswer = number1 + number2
} else if (operator == "subtract"){
  theCalculatedAnswer = number1 - number2
} else if (operator == "multiply by"){
  theCalculatedAnswer = number1 * number2
} else if (operator == "divide by"){
  theCalculatedAnswer = number1 / number2
} else {alert("The operator chosen is not valid.")}


answer.innerHTML = theCalculatedAnswer;



}
