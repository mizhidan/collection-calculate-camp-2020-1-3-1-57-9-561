function count_same_elements(collection) {
  let res = [];
  let items = new Set(collection);
  let allItems = [...items];
  allItems.forEach((item) => {
    if (item.match(/\d/)) {
      let tempArr = item.split('-');
      let flag = false;
      res.forEach((eachItem) => {
        if(eachItem.key == tempArr[0]) {
          eachItem.count += tempArr[1];
          flag = true;
        }
      })
      if (flag == false) {
        let obj = {key:tempArr[0],count:parseInt(tempArr[1])};
        res.push(obj);
      }
    } else{
      let obj = {key:item,count:0};
      res.push(obj);
    }
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
