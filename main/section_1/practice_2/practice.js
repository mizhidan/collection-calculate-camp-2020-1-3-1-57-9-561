function collect_same_elements(collection_a, collection_b) {
  let newCollect = collection_b.flat();
  let arr = [];
  collection_a.forEach((item) => {
    if(newCollect.indexOf(item) > -1) {
      arr.push(item);
    }
  })
  return arr;
}

module.exports = collect_same_elements;
