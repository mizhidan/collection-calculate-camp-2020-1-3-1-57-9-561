'use strict';
var rank_desc = function(collection){
  return collection.sort((prev,cur) => prev - cur);
};

module.exports = rank_desc;
