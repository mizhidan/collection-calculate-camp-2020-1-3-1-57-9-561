'use strict';

function get_union(collection_a, collection_b) {
  let union = collection_a.concat(collection_b.filter(function (val) { return !(collection_a.indexOf(val) > -1) }))
  return union;
}

module.exports = get_union;

