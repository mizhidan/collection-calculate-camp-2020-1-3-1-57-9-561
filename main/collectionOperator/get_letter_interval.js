'use strict';

function get_letter_interval(number_a, number_b) {
  if(number_a > number_b) { 
    return getDecreaseLetter(number_a,number_b);
  } else if(number_a < number_b) {
    return getGrowLetter(number_a,number_b);
  } else {
   return [String.fromCharCode(96 + number_a)];
  }
}

function getGrowLetter(number_a,number_b) {
  var charCollection = [];
    for (let index = 0; index <= number_b - number_a;) {
      charCollection.push(String.fromCharCode(96 + number_a))
      ++number_a;
    }
  return charCollection;
}

function getDecreaseLetter(number_a,number_b) {
  return getGrowLetter(number_b,number_a).reverse();
}

module.exports = get_letter_interval;
