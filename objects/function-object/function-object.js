'use strict';

function saySmth(first, second) {
  alert(first + ' ' + second);
}

console.log(saySmth.name); // returns name of the function sayHi
console.log(saySmth.length); // returns quontity of parameters 2

let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // Теперь всё в порядке
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest (вложенный вызов работает)