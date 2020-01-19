function count_same_elements(collection) {
  let res = [];
  let items = new Set(collection);
  let allItems = [...items];
  allItems.forEach((item) => {
    if (item.match(/\d/g)) {
      let itemNum = parseInt(item.match(/\d/g).join(""));
      let itemKey = item.slice(0,1);
      let flag = false;
      res.forEach((eachItem) => {
        if(eachItem.name == itemKey) {
          eachItem.summary += itemNum;
          flag = true;
        }
      })
      if (flag == false) {
        let obj = {name:itemKey,summary:itemNum};
        res.push(obj);
      }
    } else{
      let obj = {name:item,summary:0};
      res.push(obj);
    }
  })
  collection.forEach((collectionItem) => {
    res.forEach((resItem) => {
      if(resItem.name === collectionItem) {
        ++resItem.summary;
      }
    })
  })
  return res;
}

module.exports = count_same_elements;
