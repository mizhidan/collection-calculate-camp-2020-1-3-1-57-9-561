'use strict';

function average_to_letter(collection) {
  let sum = Math.ceil(collection.reduce((prev, cur) => prev + cur) / collection.length);
  return String.fromCharCode(96 + sum);
}

module.exports = average_to_letter;

