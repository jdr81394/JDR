class Animal {
  constructor (name, age, sound, species){
    this.name = name;
    this.age = age;
    this.sound = sound;
    this.species = species;
  }

speak(){
  console.log("ANIMAL");

}

}

class Dog extends Animal {

  speak(){
    super.speak();
    console.log('DOG');
  }
}

class Cat extends Dog {
  speak(){
    super.speak();
    console.log('CAT');
  }
}

var lionel = new Cat('lionel',6,'meow', 'cat');
console.log(lionel)
lionel.speak();
