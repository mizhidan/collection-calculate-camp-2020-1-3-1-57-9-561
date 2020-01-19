'use strict';

function double_to_one(collection) {
  let arr = [];
  let item = new Set(arr.concat.apply([],collection));
  let result = [...item];
  return result;
}

module.exports = double_to_one;
