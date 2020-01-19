'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce((prev, cur) => prev + cur);
}

module.exports = calculate_elements_sum;

