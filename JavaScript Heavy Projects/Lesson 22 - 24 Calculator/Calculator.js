function Calculate(){
var input1 = Number(document.querySelector('#num1').value);
var input2 = Number(document.querySelector('#num2').value);
var selected = document.querySelector('select');
var operator = selected.options[selected.selectedIndex].value;
var answer = document.querySelector('#answer');
var theCalculatedValue;

if (operator == "add") {
theCalculatedValue = input1 + input2;
} else if ( operator == "minus") {
theCalculatedValue = input1 - input2;
}else if ( operator == "multiply") {
theCalculatedValue = input1 * input2;
}else if ( operator == "divide") {
theCalculatedValue = input1 / input2;
} else {
alert("none of this shit works bruh")
}

answer.innerHTML = theCalculatedValue;

}
