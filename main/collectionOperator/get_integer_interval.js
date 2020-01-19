"use strict";

function get_integer_interval(number_a, number_b) {
  var collection = [];
  if (number_a < number_b) {
    for (let index = number_a; index <= number_b;) {
      collection.push(index);
      ++index;
    }
  } else if(number_a > number_b) {
    for (let index = number_a; index >= number_b;) {
      collection.push(index);
      --index;
    }
  } else {
    collection.push(number_a)
  }
  return collection;
}

module.exports = get_integer_interval;
