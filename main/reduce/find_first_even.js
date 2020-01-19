'use strict';

function find_first_even(collection) {
  return collection.filter((item) => item % 2 === 0)[0];
}

module.exports = find_first_even;

