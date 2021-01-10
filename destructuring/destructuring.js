'use strict';

let arr = ["Ilya", "Kantor"];

// деструктурирующее присваивание
// записывает firstName=arr[0], surname=arr[1]
// let [firstName, surname] = arr;

let [firstName, surname] = "Ilya Kantor".split(' ');

console.log(firstName); // Ilya
console.log(surname);  // Kantor

// Остаточные параметры «…»
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1); // Julius
console.log(name2); // Caesar

// Обратите внимание, что `rest` является массивом.
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2

// значения по умолчанию
let [name = "Guest", surname2 = "Anonymous"] = ["Julius"];

console.log(name);    // Julius (из массива)
console.log(surname2); // Anonymous (значение по умолчанию)