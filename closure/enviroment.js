'use strict';

function makeCounter() {
  let count = 0;
  return function() {
    return count++;
  };
}

let counter = makeCounter()
console.log(typeof counter);