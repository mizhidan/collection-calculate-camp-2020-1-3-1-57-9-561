'use strict';

function get_letter_interval(number_a, number_b) {
  let arr = [];
  if(number_a > number_b) { 
    getDecreaseLetter(number_a,number_b);
  } else if(number_a < number_b) {
    getGrowLetter(number_a,number_b);
  } else {
   return [String.fromCharCode(number_a)];
  }
}

function getGrowLetter(number_a,number_b) {
  var charCollection = [];
    for (let index = 0; index < number_b - number_a;) {
      charCollection.push(String.fromCharCode(number_a))
      ++number_a;
    }
  return charCollection;
}

function getDecreaseLetter(number_a,number_b) {
  let arr = [];
  arr.push(getGrowLetter(number_b,number_a).reverse());
  return arr;
}

module.exports = get_letter_interval;
