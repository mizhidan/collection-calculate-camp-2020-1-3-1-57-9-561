'use strict';

function average_uneven(collection) {
  let aver = 0;
  let evenArr = collection.filter((item) => item % 2 !== 0);
  evenArr.forEach((item) => aver += item);
  return aver / evenArr.length;
}

module.exports = average_uneven;
