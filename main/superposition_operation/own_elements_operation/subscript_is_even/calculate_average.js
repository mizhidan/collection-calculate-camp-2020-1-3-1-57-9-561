'use strict';
var calculate_average = function(collection){
    let newArr = collection.filter((item) => item % 2 === 0);
    let aver = 0;
    newArr.forEach((item) => aver += item);
    aver = aver / newArr.length;
    return aver;
};
module.exports = calculate_average;
