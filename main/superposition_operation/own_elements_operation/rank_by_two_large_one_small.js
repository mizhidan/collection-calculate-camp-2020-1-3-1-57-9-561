'use strict';
function rank_by_two_large_one_small(collection){
  let newArr = [];
  let count = collection.length;
  let pos = 0;
  collection.sort((prev, cur) => prev - cur);
  for (let index = 0; index < Math.ceil(collection.length / 3); ++index) {
    if(pos < count - count % 3 || count % 3 === 0) {
      newArr.push(collection[pos + 1]);
      newArr.push(collection[pos + 2]);
      newArr.push(collection[pos]);
      pos += 3;
    } else if(collection % 3 !== 0 && pos >= count - count % 3) {
      for(let newIndex = 0; newIndex < count % 3; ++newIndex) {
        newArr.push(collection[pos]);
        ++pos;
      }
    }
  }
  return newArr;
}
module.exports = rank_by_two_large_one_small;
