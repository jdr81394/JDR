try {
  //code in here
  var name = prompt("What's your name?");

  if(name != "secret"){
    //throw a new console.error
    throw "unknown user";
  } else {
    // do something
    throw 'still unknown user'
  }

} catch(error) {
  if(error == 'unknown user'){
    console.log("sorry youre not allowed");
    document.querySelector('#test').innerHTML = "Sorry, you're no longer signed in";

  } else if (error == 'still unknown user') {
    //its a different error
    console.log("stil unknown user worked")
    document.querySelector('#test').innerHTML = error.message;
  }
  console.log(error, error.message);
} finally {
  console.log("catch throw and finally worked")

}
