function collect_same_elements(collection_a, collection_b) {
  let arr = [];
  collection_a.forEach((item) => {
    if(collection_b.indexOf(item) > -1) {
      arr.push(item);
    }
  })
  return arr;
}

module.exports = collect_same_elements;
