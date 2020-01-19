function create_updated_collection(collection_a, object_b) {
  object_b.value.map((item) => {
    collection_a.forEach((collectionItem) => {
      if (collectionItem.key === item) {
        --collectionItem.count;
      }
    })
  })
  return collection_a;
}

module.exports = create_updated_collection;
