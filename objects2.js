'use strict';

// FIFTH LESSON OBJECTS2

let calculator = {
  read() {
    this.first = prompt('Enter first number', 0);
    this.second = prompt('Enter second number', 0);
  },

  sum(){
    return +this.first + +this.second
  },

  mul(){
    return +this.second * +this.first
  }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() )
