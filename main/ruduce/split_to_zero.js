'use strict';

function spilt_to_zero(number, interval) {
  let resArr = [];
  if ((number / interval) % 1 === 0) {
    for (let res = number; res >= 0; res -= interval) {
      if(res === 0) {
        resArr.push(parseInt(res));
      } else {
        resArr.push(parseFloat(res.toFixed(1)));
      }
    }
  } else {
    for (let res = number; res >= (0 - interval); res -= interval) {
      resArr.push(parseFloat(res.toFixed(1)));
    }
  }
  return resArr;
}

module.exports = spilt_to_zero;
