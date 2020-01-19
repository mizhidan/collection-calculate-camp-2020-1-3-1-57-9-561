'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let arr = [];
  collection_a.forEach((item) => {
    if(collection_b.indexOf(item) == -1) {
      arr.push(item);
    }
  })
  return arr;
  //在这里写入代码
}

module.exports = choose_no_common_elements;
