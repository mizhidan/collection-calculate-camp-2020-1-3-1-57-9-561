'use strict';
var rank_asc = function(collection){
  return collection.sort((prev, cur) => cur - prev);
};

module.exports = rank_asc;
