'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let arr = [];
  collection_a.forEach((aitem) => {
    collection_b.forEach((bitem) => {
      if(aitem % bitem === 0) {
        arr.push(aitem);
      } 
    })  
  })
  return arr;
  //在这里写入代码
}

module.exports = choose_divisible_integer;
