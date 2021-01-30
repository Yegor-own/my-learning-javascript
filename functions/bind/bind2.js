'use strict';

let user = {
  firstName: "Вася",
  say(prase) {
    console.log(`${prase}, ${this.firstName}!`);
  }
};

let say = user.say.bind(user); // (*)

say('Привет'); // Привет, Вася!