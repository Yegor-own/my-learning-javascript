'use strict';

// FIFTH LESSON OBJECTS

let user = {
  name: 'Ivan',
  age: 25,
  height: 182,
  born: 1996,
  'has children': false
}

user.speak = function(sentense) {
  return sentense
}


user.intro = function() {
  return 'Hi my name is ' + this.name
}


// you can call function intro like this
console.log(user.intro());
// or like this
console.log((user.intro)());

console.log('first' + "\n" + '  ' + user.speak('Oh I can speak'));
console.log('second'+ "\n" + '  ' + user.intro());
