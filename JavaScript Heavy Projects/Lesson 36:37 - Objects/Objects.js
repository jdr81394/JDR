var person = {
  name: "Jake Roberts",
  age: 23,
  Hobbies: ['Guitar', 'Coding', 'Partying', 'Reading'],
changeName: function(new_name) {
  this.name = new_name;
  return this;}


};

var clone = person;
clone.changeName("not a clone");


console.log(clone);
clone.changeName("not a clone");

console.log(clone);
clone.changeName("definitely not a clone");

console.log(clone);
clone.changeName("e");

console.log(clone);

console.log(clone[index]);

person['married'] = false;

document.querySelector('#main').innerHTML = person.name + ' is ' + person.age
+ " and his hobbies include " + person.Hobbies[0] + ' and ' + person.Hobbies[2];

for(var index in person) {
  if (person[index].constructor === String){
    console.log(index, person[index].constructor, person[index]);
  }
}
