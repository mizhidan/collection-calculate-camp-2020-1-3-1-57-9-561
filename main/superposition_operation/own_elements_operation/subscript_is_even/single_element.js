'use strict';
var single_element = function(collection){
    let newArr = collection.filter((item, index) => index % 2 !== 0);
    let repeatArr = newArr.filter((item, index, array) => {
        return array.indexOf(item) !== index;
    });
    if (repeatArr.length === 0) {
        return [];
    } else {
        return newArr.filter((item) => !repeatArr.includes(item));
    }

};
module.exports = single_element;
