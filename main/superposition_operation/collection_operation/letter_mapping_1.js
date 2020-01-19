'use strict';

function even_to_letter(collection) {
  let tempArr = collection.filter((item) => item % 2 == 0);
  let res = [];
  tempArr.forEach((item) => {
    res.push(String.fromCharCode(96 + item));
  })
  return res;
}

module.exports = even_to_letter;
