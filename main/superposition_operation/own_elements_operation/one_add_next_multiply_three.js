'use strict';
function one_add_next_multiply_three(collection){
  let newArr = [];
  for (let index = 0; index < collection.length; ++index) {
    if(index !== collection.length - 1) {
      newArr.push((collection[index] + collection[index + 1]) * 3)
    }
  }
  return newArr;
}
module.exports = one_add_next_multiply_three;
