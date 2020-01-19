'use strict';
var even_group_calculate_average = function(collection){
    let newArr = collection.filter((item, index) => index % 2 !== 0);
    let oddArr = newArr.filter((item) => item %2 === 0);
    if(oddArr.length) {
        let unitsArr = oddArr.filter((item) => item < 10);
        let tensArr = oddArr.filter((item) => item >= 10 && item < 100);
        let hundredsArr = oddArr.filter((item) => item >= 100 && item < 1000);
        if (!unitsArr.length && !tensArr.length && hundredsArr.length) {
            let aver = 0;
            hundredsArr.forEach((item) => aver += item);
            return [aver / hundredsArr.length];
        } else {
            let averArr = [];
            let aver = 0;
            unitsArr.forEach((item) => aver += item);
            averArr.push(aver / unitsArr.length);
            aver = 0;
            tensArr.forEach((item) => aver += item);
            averArr.push(aver / tensArr.length);
            aver = 0;
            hundredsArr.forEach((item) => aver += item);
            averArr.push(aver / hundredsArr.length);
            return averArr;
        }
    } else {
        return [0];
    }
};
module.exports = even_group_calculate_average;
