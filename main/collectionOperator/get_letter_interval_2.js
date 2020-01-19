function get_letter_interval_2(number_a, number_b) {
  if(number_a > number_b) {
    return getDecreaseLetter(number_a,number_b);
  } else if(number_a < number_b) {
    return getGrowLetter(number_a,number_b);
  } else if(number_a < 26) {
    return [String.fromCharCode(number_a)];
  } else {
    return [String.fromCharCode(96 + number_a / 26) + String.fromCharCode(96 + number_a % 26)];
  }
}

function getGrowLetter(number_a,number_b) {
  var charCollection = [];
  let firstLetterCount = number_b / 26;
  if(number_a > 26 && number_b > 26) {
    for(let index = 0; index < number_b - number_a;) {
      charCollection.push(String.fromCharCode(96 + number_a / 26) + String.fromCharCode(96 + number_a % 26));
      ++number_a;
    }
  } else if(number_a < 26 && number_b > 26) {
    for(let index = number_a;index <= 26;) {
      charCollection.push(String.fromCharCode(96 + index))
      ++index;
    }
    for(let firstLetter = 1; firstLetter <= firstLetterCount; ++firstLetter) {
      for(let secondLetter = 1;secondLetter <= 26;) {
        charCollection.push(String.fromCharCode(96 + firstLetter) + String.fromCharCode(96 + secondLetter));
        --number_b;
        ++secondLetter;
        if(number_b - 26 === 0) {
          break;
        }
      }
    }
  } else {
    for (let index = 0; index < number_b - number_a;) {
      charCollection.push(String.fromCharCode(number_a))
      ++number_a;
    }
  }
  return charCollection;
}

function getDecreaseLetter(number_a,number_b) {
  let arr = getGrowLetter(number_b,number_a).reverse();
  return arr;
}

module.exports = get_letter_interval_2;