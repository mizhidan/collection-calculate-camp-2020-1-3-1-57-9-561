'use strict';

function amount_even(collection) {
  let sum = 0;
  let evenArr = collection.filter((item) => item % 2 === 0);
  evenArr.forEach((item) => sum += item);
  return sum;
}

module.exports = amount_even;
