'use strict';

function compare_collections(collection_a, collection_b) {
  let res = true;
  if (collection_a.length === collection_b.length) {
    for (let index = 0; index < collection_b.length; ++index) {
      if (collection_a[index] !== collection_b[index]) {
        res = false;
      }
    }
  } else {
    res = false;
  }
  return res;
}

module.exports = compare_collections;


