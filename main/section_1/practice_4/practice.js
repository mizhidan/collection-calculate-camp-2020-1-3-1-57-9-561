function collect_same_elements(collection_a, object_b) {
  let arr = [];
  collection_a.forEach((item) => {
    if(object_b.value.indexOf(item.key) > -1) {
      arr.push(item.key);
    }
  })
  return arr;
}

module.exports = collect_same_elements;
