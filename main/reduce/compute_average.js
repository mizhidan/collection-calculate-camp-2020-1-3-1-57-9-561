'use strict';

function compute_average(collection) {
  return collection.reduce((prev, cur) => prev + cur) / collection.length;
}

module.exports = compute_average;

