'use strict';

function get_intersection(collection_a, collection_b) {
  var intersectionArr = [];
  collection_b.forEach((bItem) => {
    if(collection_a.indexOf(bItem) > -1)
        intersectionArr.push(bItem);
    }) 
  return intersectionArr;
}

module.exports = get_intersection;
