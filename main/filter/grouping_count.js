'use strict';

function grouping_count(collection) {
  let res = {};
  collection.forEach((item) => {
    res[item] = res[item] >= 1 ? res[item] + 1 : 1;
  })
  return res;
  //在这里写入代码
}

module.exports = grouping_count;
