function create_updated_collection(collection_a, object_b) {
  object_b.value.map((item) => {
    collection_a.forEach((collectionItem) => {
      if (collectionItem.key === item) {
        let minOprator = parseInt(collectionItem.count / 3);
        collectionItem.count -= minOprator;
      }
    })
  })
  return collection_a;
}

module.exports = create_updated_collection;
