'use strict';

function collect_all_even(collection) {
  var evenArr = [];
  for (let index = 0; index < collection.length; ++index) {
    if(collection[index] % 2 == 0) {
      evenArr.push(collection[index]);
    }
  }
  return evenArr;
}

module.exports = collect_all_even;
