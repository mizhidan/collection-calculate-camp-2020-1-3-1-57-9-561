'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map((item) => get_letter_interval_2(item))
};

function get_letter_interval_2(number_a) {
  if(number_a < 26) {
    return String.fromCharCode(96 + number_a);
  } else {
    return String.fromCharCode(96 + number_a / 26) + String.fromCharCode(96 + number_a % 26);
  }
}

module.exports = number_map_to_word_over_26;
