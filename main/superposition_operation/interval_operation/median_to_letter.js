'use strict';

function median_to_letter(collection) {
  let median;
  let count = collection.length;
  if (count % 2 === 0) {
    median = Math.ceil((collection[count / 2] + collection[count / 2 - 1]) / 2);
  } else {
    median = collection[count - 1 / 2];
  }
  if(median < 26) {
    return String.fromCharCode(96 + median);
  } else {
    return String.fromCharCode(96 + median / 26) + String.fromCharCode(96 + median % 26);
  }
}

module.exports = median_to_letter;
