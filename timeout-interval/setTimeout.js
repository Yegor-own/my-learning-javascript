'use strict';

function sayHi(phrase, who) {
  console.log( phrase + ', ' + who );
}

let timer = setTimeout(sayHi, 2000, "Hello", "John"); // after 2 seconds function prints: Hello, John
console.log(timer);
clearTimeout(timer); // cancellation of countdown
console.log(timer);