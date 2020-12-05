'use strict';

//SECONG LESSON I LEARN FUNCTION

function show_smth () {
    console.log('Hello');
}

function say_hello (name, message = 'Hello') {
    console.log(message + ' ' + name + '!!!');
}

function sum (fist, second, third = 0, fourth = 0, fifth = 0) {
    return fist + second + third + fourth + fifth;
}

function check_age (age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have premission from your parents??');
    }
}

show_smth();
say_hello('Mr.Smith', 'Bonjur');
say_hello('Mr.Morgan');
console.log('Function sum can expects only 5 parameters');
console.log(sum(11, 22, 33, 44));

let age = prompt('Please enter your age');

if (check_age(age)) {
    console.log('All right!!))');
} else {
    check_age(age);
}