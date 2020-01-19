'use strict';

function grouping_count(collection) {
  let res = {};
  collection.forEach((item) => {
    res[item] = res[item] >= 1 ? res[item] + 1 : 1;
  })
  return res;
}

module.exports = grouping_count;
