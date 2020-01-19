'use strict';

function compute_median(collection) {
  collection.sort((prev, cur) => prev - cur);
  let count = collection.length;
  if (count % 2 === 0) {
    return (collection[count / 2] + collection[count / 2 - 1]) / 2;
  } else {
    return collection[(count - 1) / 2];
  }
}

module.exports = compute_median;


