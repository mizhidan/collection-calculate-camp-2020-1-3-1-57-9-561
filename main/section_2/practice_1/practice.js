function count_same_elements(collection) {
  let res = [];
  let items = new Set(collection);
  let allItems = [...items];
  allItems.forEach((item) => {
    let obj = {key:item,count:0};
    res.push(obj);
  })
  collection.forEach((collectionItem) => {
    res.forEach((resItem) => {
      if(resItem.key === collectionItem) {
        ++resItem.count;
      }
    })
  })
  return res;
}

module.exports = count_same_elements;
