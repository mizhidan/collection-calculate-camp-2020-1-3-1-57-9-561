'use strict';
var number_map_to_word = function(collection){
  return collection.map((item) => get_letter_interval(item))
};

function get_letter_interval(number_a) {
  return String.fromCharCode(96 + number_a);
}
module.exports = number_map_to_word;
