'use strict';
var calculate_median = function(collection){
    let newArr = collection.filter((item, index) => index % 2 !== 0);
    let median = 0;
    let count = newArr.length;
    if(newArr.length % 2 === 0) {
        median = (newArr[count / 2 - 1] + newArr[count / 2]) / 2;
    } else {
        median = newArr[(count - 1) / 2];
    }
    return median;
};
module.exports = calculate_median;
