'use strict';
var is_exist_element = function(collection,element){
    let newArr = collection.filter((item, index) => index % 2 === 0);
    if (newArr.includes(element)) {
        return true;
    } else {
        return false;
    }
};
module.exports = is_exist_element;
