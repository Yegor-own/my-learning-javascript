'use strict';

// SIXTH LESSON FUNCTION CUNSTRUCTOR

function User(name, status) {
  this.name = name;

  this.isAdmin = status;

  this.sayHi = function() {
    console.log( 'Hello my name is ' + this.name );
  };
}


let mark = new User('Mark', false);

// when you make new object base in function constructor, it creates a new object this and return it
// function User(name, status) {
//   this = {};                --create a new object
//   this.name = name;
//   this.isAdmin = status;
//   return this;              --return object this
// }

let yegor = new User('Yegor', true);

console.log( mark.name );
console.log( mark.isAdmin );
console.log( mark.sayHi() );

console.log( yegor.name );
console.log( yegor.isAdmin );
console.log( yegor.sayHi() );
