'use strict';

function choose_no_repeat_number(collection) {
  let items = new Set(collection);
  let array = [...items];
  return array;
}

module.exports = choose_no_repeat_number;
