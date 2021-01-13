'use strict';

let children = {
  toJSON() {
    return this.first;
  },
  first: {
    name: 'Mark',
    age: 16,
    isAdmin: true,
    wife: false
  },
  second: {
    name: 'Alis',
    age: 14,
    isAdmin: false,
    husbund: false
  },
  third: {
    name: 'Piter',
    age: 5,
    isAdmin: false,
    wife: false
  }
}

let user = {
  name: 'John',
  age: 30,
  born: new Date(1999, 5, 16),
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: true,
  sayHi() { // будет пропущено
    alert("Hello");
  },
  [Symbol("id")]: 123, // также будет пропущено
  something: undefined, // как и это - пропущено
  children
};



let json = JSON.stringify(user, ['name', 'born', 'isAdmin', 'children'], 2); // JSON.sringify(value, replaer, space)
// {
//   "name": "John",
//   "born": "1999-06-15T18:00:00.000Z",
//   "isAdmin": false
//   "children": {
//     "name": "Mark",
//     "isAdmin": true
//   }
// }

console.log(typeof json); // мы получили строку!

console.log(json);