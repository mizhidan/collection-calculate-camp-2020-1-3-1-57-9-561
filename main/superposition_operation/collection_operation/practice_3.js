'use strict';

function hybrid_operation_to_uneven(collection) {
  let resArr = [];
  let sum = 0;
  collection.forEach((item) => {
    if (item % 2 !== 0) {
      resArr.push(item * 3 + 5);
    }
  })
  resArr.forEach((item) => sum += item);
  return sum;
}

module.exports = hybrid_operation_to_uneven;

