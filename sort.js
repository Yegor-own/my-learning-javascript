'use strict';

// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение].

let user = {
  name: 'Linus',
  secondname: 'Benedict',
  surname: 'Torvalds',
  age:  51,
  job: 'programmer'
}

console.log(Object.keys(user)); // ["name", "secondname", "surname", "age", "job"]
console.log(Object.values(user)); // ["Linus", "Benedict", "Torvalds", 51, "programmer"]
console.log(Object.entries(user));
// 0: (2) ["name", "Linus"]
// 1: (2) ["secondname", "Benedict"]
// 2: (2) ["surname", "Torvalds"]
// 3: (2) ["age", 51]
// 4: (2) ["job", "programmer"]