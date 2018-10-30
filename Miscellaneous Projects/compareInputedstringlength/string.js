var box1 = document.querySelector("#input1");
var box2 = document.querySelector("#input2");

var answer = document.querySelector('#answer');




function Calculate(){
  if (input1.value.length > input2.value.length){
    answer.innerHTML = "input1 is greater in length";
} else if (input1.value.length < input2.value.length){
answer.innerHTML = "input2 is greater in length";
} else if (input1.value.length = input2.value.length){
  answer.innerHTML = "input1 is equal in length to input2";
}
  else if (input1.value.length, input2.value.length == 0)
  {
    answer.innerHTML = "Nothing was entered";

   }
    else {
  answer.innerHTML = "There was an error";
}
}
