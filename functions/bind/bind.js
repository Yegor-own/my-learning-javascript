'use strict';

let user = {
  firstName: "Вася"
};

function func(phrase) {
  console.log(phrase + ', ' + this.firstName);
}

// привязка this к user
let funcUser = func.bind(user);

funcUser("Привет"); // Привет, Вася (аргумент "Привет" передан, при этом this = user)