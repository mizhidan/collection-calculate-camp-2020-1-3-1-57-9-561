"use strict";

function get_integer_interval_2(number_a, number_b) {
  var collection = [];
  if (number_a < number_b) {
    if (number_a % 2 == 0) {
      for (let index = number_a; index <= number_b;) {
        collection.push(index);
        index += 2
      }
    } else {
      for (let index = number_a + 1; index <= number_b;) {
        collection.push(index);
        index += 2
      }
    }
  } else if(number_a > number_b) {
    if (number_a % 2 == 0) {
      for (let index = number_a; index > number_b;) {
        collection.push(index);
        index -= 2
      }
    } else {
      for (let index = number_a - 1; index > number_b;) {
        collection.push(index);
        index -= 2
      }
    }
  } else if(number_a % 2 !== 0) {
    return collection;
  } else {
    collection.push(number_a);
  }
  return collection;
}
module.exports = get_integer_interval_2;
