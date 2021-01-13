'use strict';

function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrw = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let dif = tomorrw.getTime() - now.getTime();
  return Math.round(dif / 1000);
}
alert(getSecondsToTomorrow())
