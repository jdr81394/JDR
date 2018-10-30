var arr = ["one", "two", "three"];

var newArray = ['one', ['2.1', '2.2' , '2.3'], 'three'];



var test = document.getElementById("test");

for (var index in arr) {
  test.innerHTML += '<br />' + newArray[index].constructor;

}
