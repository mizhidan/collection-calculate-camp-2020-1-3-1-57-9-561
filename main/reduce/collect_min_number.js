'use strict';

function collect_min_number(collection) {
  return collection.reduce((prev, cur) => cur < prev ? cur : prev)
}

module.exports = collect_min_number;

