'use strict';

function find_last_even(collection) {
  return collection.reverse().filter((item) => item % 2 === 0)[0];
}

module.exports = find_last_even;
