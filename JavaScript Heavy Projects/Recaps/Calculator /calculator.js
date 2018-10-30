

function Calculate(){
var input1 = Number(document.querySelector('#input1').value);
var input2 = Number(document.querySelector('#input2').value);
var select = document.querySelector('#select');
var optionSelected = select.options[select.selectedIndex].value;
var answer;
var displayedAnswer = document.querySelector('.displayedAnswer');
if (optionSelected == 'add'){

answer = input1 + input2;
}
else if (optionSelected == 'minus') {
  answer = input1 - input2;
}
else if (optionSelected == 'multiply') {
  answer = input1 * input2;
}
else if (optionSelected == 'divide') {
  answer = input1 / input2;
} else {
  alert("this is not working")
}

displayedAnswer.innerHTML = answer;
}
