'use strict';

function hybrid_operation(collection) {
  let sum = 0;
  collection.map((item) => item * 3 + 2).forEach((item) => {
    sum += item;
  });
  return sum;
}

module.exports = hybrid_operation;

