'use strict';

function collect_max_number(collection) {
  return collection.reduce((prev, cur) => cur > prev ? cur : prev)
}

module.exports = collect_max_number;
