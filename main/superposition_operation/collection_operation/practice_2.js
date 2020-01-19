'use strict';

function hybrid_operation_to_uneven(collection) {
  let resArr = [];
  collection.forEach((item) => {
    if (item % 2 !== 0) {
      resArr.push(item * 3 + 2);
    }
  })
  return resArr;
}

module.exports = hybrid_operation_to_uneven;

