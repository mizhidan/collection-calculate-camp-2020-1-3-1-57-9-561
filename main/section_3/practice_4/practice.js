function create_updated_collection(collection_a, object_b) {
  let res = [];
  let items = new Set(collection_a);
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
  collection_a.forEach((collectionItem) => {
    res.forEach((resItem) => {
      if(resItem.key === collectionItem) {
        ++resItem.count;
      }
    })
  })
  object_b.value.map((item) => {
    res.forEach((collectionItem) => {
      if (collectionItem.key === item) {
        let minOprator = parseInt(collectionItem.count / 3);
        collectionItem.count -= minOprator;
      }
    })
  })
  return res;
}

module.exports = create_updated_collection;
