var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');


easyBtn.addEventListener('click', function(){
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
});

hardBtn.addEventListener('click', function(){
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].style.display = 'block';
    }

});


resetButton.addEventListener('click', function(){
//generate all new Colors
colors = generateRandomColors(numSquares);
//pick a new random colors from array
pickedColor = pickColor();
//change colorDisplay to match picked color
colorDisplay.textContent = pickedColor;
//change the text back to normal
message.textContent = '';
//change the play again to new Colors
reset.textContent = 'New Colors';
//change colors of squares
for (var i=0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
}
h1.style.backgroundColor = 'steelblue';
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //add click listeners to squares
  squares[i].addEventListener('click', function(){
    //grab color of clicked squares
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
      messageDisplay.textContent ='Correct!';
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      resetButton.textContent = 'Play Again?';
    } else{
      this.style.backgroundColor = '#232323';
      messageDisplay.textContent = 'Try Again';
    }
  });

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < colors.length; i++){
    // change all colors
    squares[i].style.backgroundColor = color;
  }
}
}

function pickColor(){
//pick a random number, all the way to last index of array
var random = Math.floor(Math.random() * colors.length);
//use number to access color in array
return colors[random];
}

function generateRandomColors(num){
  //make an array
var arr = [];
  //repeat num times
for (var i = 0; i < num; i++){
//get random color and push into arr
arr.push(randomColor());
}
  //return that array
  return arr;
}
function randomColor(){
//pick a "red" from 0 - 255
var r = Math.floor(Math.random() * 256);
//pick a "green" from 0 -255
var g = Math.floor(Math.random() * 256);
//pick a "blue" from 0 -255
var b = Math.floor(Math.random() * 256);

return "rgb(" + r + ", " + g + ", " + b + ")";

}
