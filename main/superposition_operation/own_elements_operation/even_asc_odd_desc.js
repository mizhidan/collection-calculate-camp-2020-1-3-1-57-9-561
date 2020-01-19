'use strict';
var even_asc_odd_desc = function(collection){
  let evenArr = [];
  let oddArr = [];
  evenArr = collection.filter((item) => item % 2 === 0);
  oddArr = collection.filter((item) => item % 2 !== 0);
  evenArr.sort((prev, cur) => prev - cur);
  oddArr.sort((prev, cur) => cur - prev);
  let newArr = evenArr.concat(oddArr);
  return newArr;
}
module.exports = even_asc_odd_desc;
