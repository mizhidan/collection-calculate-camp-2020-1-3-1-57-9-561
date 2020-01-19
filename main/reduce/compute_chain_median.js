'use strict';

function compute_chain_median(collection) {
  let arr = collection.split('->');
  arr = arr.sort((prev, cur) => prev - cur).reduce((prev,cur) => prev.concat(parseInt(cur)),[]);
  let count = arr.length;
  let median = 0;
  if (count % 2 === 0) {
    median = (arr[count / 2 -1] +arr[count / 2]) / 2;
  } else {
    median = arr[(count - 1) /2];
  }
  return median;
}

module.exports = compute_chain_median;
