'use strict';

// FIFTH LESSON OBJECTS3

let ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },

  down() {
    this.step--;
    return this;
  },

  showStep() {
    alert(this.step);
    return this;
  }
}

ladder
  .down()     // -1
  .up()       // 0
  .down()     // -1
  .up()       // 0
  .up()       // 1
  .showStep() // 1 